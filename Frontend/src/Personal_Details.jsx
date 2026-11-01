import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
function Personal_Details() {
    const [isEditiing,setisEditing] = useState(false);
    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");
    const [PhoneNumber,setPhoneNumber] = useState("");
    const [User,setUser] = useState(null);
    const cancelSave =  () =>{
        setisEditing(false);
        setEmail("");
        setName("");
        setPassword("");
        setPhoneNumber("");
    }
     const updateProfile = async () =>{
        setisEditing(false);
        setEmail("");
        setName("");
        setPassword("");
        setPhoneNumber("");
        await fetch("http://localhost:3000/api/update-profile",{
            method:"PUT",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user_name:Name,
                email:Email,
                password:Password,
                phone_number:PhoneNumber
            })
        })
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            setUser(data.profile);
        })
        .catch((err) =>{
            console.log(err);
        })
    } 
    useEffect(() =>{
        fetch("http://localhost:3000/api/profile",{
            method:"GET",
            credentials:"include"
        })
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            console.log(data);
            setUser(data.user);
        })
        .catch((err) =>{
            console.log(err);
        })
    },[])
    console.log(User);
  return (
    <>
        <div className="body">
                <h1>Personal Details</h1>
            {
                isEditiing ? (
                    <>
                    <div className="personalform">
                    <div className="formalignment">
                        <div className="name">
                            <h3>Name</h3>
                            <input type="text" value={Name} placeholder="Enter your new name" onChange={(e) =>setName(e.target.value)}/>
                        </div>
                        <div className="email">
                            <h3>Email</h3>
                            <input type="text" value={Email} placeholder="Enter your new email" onChange={(e) =>setEmail(e.target.value)}/>
                        </div>
                        <div className="password">
                            <h3>Password</h3>
                            <input type="password" value={Password} placeholder="Enter your new password" onChange={(e) =>setPassword(e.target.value)}/>
                        </div>
                        <div className="phoneNumber">
                            <h3>Mobile Number</h3>
                            <input type="text" placeholder="Enter your new phone number" onChange={(e) =>setPhoneNumber(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <button className="Save" onClick={updateProfile}>Save</button>
                <button className="Cancel" onClick={cancelSave}>Cancel</button>
                    </>
                ):(  
                <>
                <div className="personalform">
                    <div className="formalignment">
                       {
                            User ? (
                                <>
                        <div className="name">
                            <h3>Name</h3>
                            <p>{User.user_name}</p>
                        </div>
                        <div className="email">
                            <h3>Email</h3>
                            <p>{User.email}</p>
                        </div>
                        <div className="password">
                            <h3>Password</h3>
                            <p>{User.password}</p>
                        </div>
                        <div className="phoneNumber">
                            <h3>Mobile Number</h3>
                            <p>{User.phone_number}</p>
                        </div>
                        </>
                        ):(
                            <p>No details available</p>
                        )
                    }
                    </div>
                </div>
                <button className="Edit" onClick={() => setisEditing(true)}>Edit</button>
            </> 
                )
            }
            </div>
    </>
  )
}

export default Personal_Details