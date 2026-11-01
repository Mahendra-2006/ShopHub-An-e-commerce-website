import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const [Error,setError] = useState(null);
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const login = async () =>{
       const response = await fetch("http://localhost:3000/api/login",{
        method:"POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email:Email,
            password:Password
        })
       })
       const data = await response.json();
       console.log(data);
        if(data.ok){
            navigate("/dashboard");
        }
        else{
            setError(data.message);
        }
    }
  return (
    <>
        <div className="body">
                <div className="formBody">
                    <div className="form">
                        <div className="email">
                            <h3>E-mail</h3>
                            <input type="text" placeholder="Enter your E-mail" onChange={(e) =>setEmail(e.target.value)}/>
                        </div>
                        <div className="password">
                        <h3>Password</h3>
                        <input type="text"placeholder="Enter your password" onChange={(e) =>setPassword(e.target.value)} />
                        </div>
                        <div className="login-button">
                            {
                                Error && (
                                    <p className="text-danger">{Error}</p>
                                )
                            }
                            <button onClick={login}>Login</button>
                        </div>
                <div className="dont_have_an_account">
                    <p>Don't have an account</p>
                    <Link to="/register">
                    <div className="register">
                        <button>Register</button>
                    </div>
                    </Link>
                </div>
                </div>
                </div>
                
        </div>
    </>
  )
}

export default Login