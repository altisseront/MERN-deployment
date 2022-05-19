import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import {
    BrowserRouter,
    Switch,
    Route,
    Link 
  } from "react-router-dom";


const CreateAnimal = () => {
    let [formInfo, setFormInfo] = useState({name:"",type:"",description:"",skill1:"",skill2:"",skill3:""});
    let history = useHistory()
    let [validationMsg, setValidationMsg] = useState({});
    let [dupeError, setDupeError] = useState(false);
    const changeHandler = (e)=> {
        setFormInfo({
            ...formInfo,
            [e.target.name]:e.target.value
        })}

    const addAnimal = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/animals", formInfo)
            .then(response => {
                console.log(response)
                if (response.data.error) {
                    if(response.data.error.errors){
                    setValidationMsg(response.data.error.errors)
                    console.log(validationMsg)
                    }
                    else{
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
        <div className="">
        <h1 className='text-left'>Know a pet needing a home?</h1>
        <h3><Link to={'/'}>Home</Link></h3>
        <div>
        {dupeError==true?
        <p>Name must be unique</p>:
        <p></p>
        }
        </div>
        <p>{validationMsg.name?.message}</p>
        <p>{validationMsg.type?.message}</p>
        <p>{validationMsg.description?.message}</p>
        <form onSubmit={addAnimal}>
            <div className="d-flex form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name='name' onChange={changeHandler} value={formInfo.name}/>
            </div>
            <div className="d-flex form-group">
                <label htmlFor="type">Type</label>
                <input type="text" name='type' onChange={changeHandler} value={formInfo.type}/>
            </div>
            <div className="d-flex form-group">
                <label htmlFor="description">Description</label>
                <input type="text" name='description' onChange={changeHandler} value={formInfo.description}/>
            </div>
            <div className="d-flex form-group">
                <label htmlFor="skill1">Skill 1 *optional*</label>
                <input type="text" name='skill1' onChange={changeHandler} value={formInfo.skill1}/>
            </div>
            <div className="d-flex form-group">
                <label htmlFor="skill2">Skill 2 *optional*</label>
                <input type="text" name='skill2' onChange={changeHandler} value={formInfo.skill2}/>
            </div>
            <div className="d-flex form-group">
                <label htmlFor="skill3">Skill 3 *optional*</label>
                <input type="text" name='skill3' onChange={changeHandler} value={formInfo.skill3}/>
            </div>
            <input type="submit" className='btn btn-primary'/>
        </form>
        
        </div>

    )
}
export default CreateAnimal;