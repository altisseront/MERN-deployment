import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const EditAnimal = () => {
    let [currentAnimal, setCurrentAnimal] = useState({});
    let history = useHistory()
    let { id } = useParams()
    let [validationMsg, setValidationMsg] = useState({})
    let [dupeError, setDupeError] = useState(false);
    let [originalAnimal, setOriginalAnimal] = useState("")
    useEffect(() => {
        axios.get(`http://localhost:8000/api/animals/${id}`)
            .then(response => {
                console.log("response---->", response)
                setCurrentAnimal(response.data.animal)
                setOriginalAnimal(response.data.animal.name)

            })
            .catch(err => {
                console.log("catch")
                console.log(err);
            }
            )
    }, [id])

    const changeHandler = (e) => {
        setCurrentAnimal({
            ...currentAnimal,
            [e.target.name]: e.target.value
        })
    }

    const editAnimal = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/animals/${id}`, currentAnimal)
            .then(response => {
                console.log(response)
                if (response.data.error) {
                    if (response.data.error.errors) {
                        setValidationMsg(response.data.error.errors)
                        console.log(validationMsg)
                    }
                    else {
                        setDupeError(true)
                    }
                }
                else {
                    history.push('/')
                }
            })
            .catch(err => {
                console.log(err)

            })

    }
    return (
        <div>
            <div>
                <h1 className='text-center'>Edit {originalAnimal}</h1>
                <h3><Link to={'/'}>Home</Link></h3>
                <div>
                    {dupeError == true ?
                        <p>Name must be unique</p> :
                        <p></p>
                    }
                </div>
                <p>{validationMsg.name?.message}</p>
                <p>{validationMsg.type?.message}</p>
                <p>{validationMsg.description?.message}</p>
                <form onSubmit={editAnimal}>
                    <div className="d-flex form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' onChange={changeHandler} value={currentAnimal.name} />
                    </div>
                    <div className="d-flex form-group">
                        <label htmlFor="type">Type</label>
                        <input type="text" name='type' onChange={changeHandler} value={currentAnimal.type} />
                    </div>
                    <div className="d-flex form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" name='description' onChange={changeHandler} value={currentAnimal.description} />
                    </div>
                    <div className="d-flex form-group">
                        <label htmlFor="skill1">Skill 1 *optional*</label>
                        <input type="text" name='skill1' onChange={changeHandler} value={currentAnimal.skill1} />
                    </div>
                    <div className="d-flex form-group">
                        <label htmlFor="skill2">Skill 2 *optional*</label>
                        <input type="text" name='skill2' onChange={changeHandler} value={currentAnimal.skill2} />
                    </div>
                    <div className="d-flex form-group">
                        <label htmlFor="skill3">Skill 3 *optional*</label>
                        <input type="text" name='skill3' onChange={changeHandler} value={currentAnimal.skill3} />
                    </div>
                    <input type="submit" className='btn btn-primary' />
                </form>
            </div>
        </div>

    )
}
export default EditAnimal