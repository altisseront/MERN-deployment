import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const ShowOneAnimal = () => {
    let {id} = useParams()
    let [currentAnimal, setCurrentAnimal] = useState({});
    let history = useHistory()
    let deleteAnimal =()=>{
        axios.delete(`http://localhost:8000/api/animals/${id}`)
            .then(response=>{
                console.log("response---->", response)
                history.push('/')
            })
            .catch(err=>{
            console.log(err);
            }
            )
            
    }
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/animals/${id}`)
        .then(response=>{
            console.log("response---->", response.data.animal)
            setCurrentAnimal(response.data.animal)
            
        })
        .catch(err=>{
            console.log(err);
            }
        )
    }, [])
    return (
        <div>
            <h3><Link to={`/`}>Home</Link></h3>
            <p></p>
            <h1>Name: {currentAnimal.name}</h1>
            <h1>Type: {currentAnimal.type}</h1>
            <h1>Description: {currentAnimal.description}</h1>

            <h3>Skill 1:</h3>
            {
                currentAnimal.skill1 ===""?
                <p>None</p>:
                <p>{currentAnimal.skill1}</p>
            }
                        <h3>Skill 2:</h3>
            {
                currentAnimal.skill2 ===""?
                <p>None</p>:
                <p>{currentAnimal.skill2}</p>
            }
                        <h3>Skill 3:</h3>
            {
                currentAnimal.skill3 ===""?
                <p>None</p>:
                <p>{currentAnimal.skill3}</p>
            }
            <hr />
            <h5 onClick={deleteAnimal} className="text-danger">Adopt {currentAnimal.name}</h5>
        </div>
    
        )
}
export default ShowOneAnimal;