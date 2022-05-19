import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const ShowAllAnimals = (props) => {
    let [animalList, setAnimalList] = useState([]);
    function SortArray(x, y){
        return x.type.localeCompare(y.type);
    }
    useEffect(()=>{
        axios.get('http://localhost:8000/api/animals')
        .then(response => {
            setAnimalList(response.data.animals.sort(SortArray));
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })   
    },[])
    return (
        <div>  
            <h2>These pets are looking for a good home</h2>
            <h2><Link to={"/create"}>Add an animal</Link></h2>
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        animalList.map((animal, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{animal.name}</td>
                                        <td>{animal.type}</td>
                                        <td><button className='btn border border-secondary'><Link className='text-dark' to={`/show/${animal._id}`}>Details</Link></button><button className='btn border border-secondary'><Link className='text-dark' to={`/edit/${animal._id}`}>Edit</Link></button></td>
                                    </tr>
                                )

                        })
                    }
                </tbody>
            </table>





        </div>
    )
}
export default ShowAllAnimals;