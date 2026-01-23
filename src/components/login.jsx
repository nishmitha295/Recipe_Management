import React from "react";
import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";

export default function Signin()
    {
        const navigate = useNavigate();
        const [formData, setformData] = useState(
            {
                email :"",
                password :""
            });

        const handleSubmit = (e) =>
        {
          e.preventDefault();
          console.log(formData);

           navigate("/dashboard");
        }

        const handleChange = (e) =>
            setformData(
                {...formData,
                [e.target.name]:e.target.value
                }
            )

        return(
            <>
            <div className = "Login">
                <form onSubmit={handleSubmit}>
                <h1>Log IN</h1>
                <input 
                type ="email"
                placeholder="Enter your Email"
                name ="email"
                value ={formData.email}
                onChange={handleChange}/>
                <input 
                type ="password" 
                placeholder="Enter your Password" 
                name ="password"
                value ={formData.password} 
                onChange={handleChange}/>
                <button type="Submit"> Log In</button>
                <p>New User, Please SignUP
                    <Link to= '/Signup'>SignUp</Link>
                </p>
                </form>
            </div>
            </>
        )
    }
