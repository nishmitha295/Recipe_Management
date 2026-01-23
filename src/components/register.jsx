import React from "react";
import { useState } from "react";
import { Link } from "react-router";

export default function Signup (){

const [formData, setformData] = useState (
  {
  username :"",
  email :"",
  password :""
});

const handleChange = (e) =>
    setformData(
        {...formData,
        [e.target.name]:e.target.value
        }
    )

const handleSubmit = (e) =>
    e.preventDefault();
console.log(formData);



    return(
        <>
        <div className = "SignUp">
            <form onSubmit={handleSubmit}>
            <h1>Sign UP</h1>
            <input 
            type ="text"
            name ="username"
            placeholder="Enter your Username"
            value ={formData.username}
            onChange={handleChange}/>
            <input 
            type ="email"
            name ="eamil"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}/>
            <input 
            type ="password" 
            name= "password" 
            placeholder="Enter your Password" 
            value={formData.password} 
            onChange={handleChange}/>
            <button type="Submit"> Sign Up</button>
            <p>Already a user, Plaese SignIN
                <Link to = "/login">SignIn</Link>
            </p>
            </form>
        </div>
        </>
    )
}

