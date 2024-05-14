import React from 'react'
import { useState } from 'react'
import validation from '../validation.js'

export default function Form({login}) {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
     })

     const [errors, setErrors] = useState({})

     const handleChange = (evento) => {
        setUserData({...userData, [evento.target.name] : evento.target.value})
        
        setErrors(validation(
          {...userData, [evento.target.name] : evento.target.value}
        ))
     }

     const handleSubmit = (evento) => {
      evento.preventDefault()
      login(userData)
     }

  return (
    <div>
        <img src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="logo_RaM" style={{width:'300px'}}/>

    <form onSubmit={handleSubmit}>

        <label>Email:</label>
        <input name='email' onChange={handleChange} type="text" value={userData.email}/>
        <p style={{color:'coral'}}>{errors.email?errors.email:null}</p>
        <br/>

        <label>Password:</label>
        <input name='password' onChange={handleChange} type="password" value={userData.password}/>
        <p style={{color:'coral'}}>{errors.password?errors.password:null}</p>
        <br/>

        <button type="submit" disabled={errors.email || errors.password}>Submit</button>
    </form>
    </div>
  )
}
