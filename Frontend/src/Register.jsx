import React, { useState } from 'react'
import {Link , useNavigate} from 'react-router-dom'
function Register() {
    const navigate = useNavigate();
    const [error,setError] = useState(null);
    const [name,setname] = useState("");
    const [password,setpassword] = useState("");
    const [email,setemail] = useState("");
    const [phoneNumber,setphoneNumber] = useState("");
    const register = async () => {
        console.log("got here")
        const response = await fetch("http://localhost:3000/api/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user_name:name,    
                password:password,
                email:email,
                phone_number:phoneNumber
            })
        })
        const data = await response.json();
        if(data.ok){
            navigate('/');
        }
        else{
            setError(data.message);
        }
    }
  return (
    <>
        <div>
            <div className="header">
                <h1>Register</h1>
            </div>
            <div className="formbody">
                <div className="form">
                    <div className="register-name">
                        <h3>Name</h3>
                        <input type="text" value={name} placeholder="Enter your name" onChange={(e) => setname(e.target.value)}/>
                    </div>
                    <div className="register-email">
                        <h3>Email</h3>
                        <input type="email" value={email} placeholder="Enter your e-mail" onChange={(e) => setemail(e.target.value)}/>
                    </div>
                    <div className="register-password">
                        <h3>Password</h3>
                        <input type="password" value={password} placeholder="Enter your password" onChange={(e) => setpassword(e.target.value)}/>
                    </div>
                    <div className="register-phoneNumber">
                        <h3>Mobile Number</h3>
                        <input type="text" value={phoneNumber} placeholder="Enter your phone number" onChange={(e) => setphoneNumber(e.target.value)}/>
                    </div>
                    <div className="buttons">
                    <div className="register-button">
                        {
                            error && (<p className="text-danger">{error}</p>)
                        }
                        <button onClick={register}>Register</button>
                    </div>
                    <div className="login-button">
                        <p>Already have an account</p>
                        <Link to="/">
                            <button>Login</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Register