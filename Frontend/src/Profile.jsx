import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Personal_Details from './Personal_Details';
function Profile() {
    const [ActiveOption,setActiveOption] = useState(null);
  return (
    <>
        <div className="body">
            <div className="profile-headers">
                <h1>My Account</h1>
            </div>
            <div className="alignment">
                <div className="forbodyalignment">
                <div className="orders">
                <h4>Your Orders</h4>
                <div className="shopping-orders  border border-bottom-white">
                    <h5>My Shopping Orders</h5>
                </div>
            </div>
            <div className="account">
                <div  className="header">
                    <h4>Your Account</h4>
                </div>
                <div className="border border-bottom-white personal-details" onClick={() =>setActiveOption("personal")}>
                    <h5>Personal Details</h5>
                </div>
                <div className="border border-bottom-white">
                    <h5>Address</h5>
                </div>
                <div className="border border-bottom-white">
                    <h5>Payments Details</h5>
                </div>
                <div className="border border-bottom-white">
                    <h5>Contact Preference</h5>
                </div>
                <div className="border border-bottom-white">
                    <h5>Support & FAQs</h5>
                </div>
                <div className="border border-bottom-white">
                    <h5>Contact Us</h5>
                </div>
            </div>
            </div>
            <div className="accountContent">
                {
                    ActiveOption === "personal" && 
                    <Personal_Details/>
                }
            </div>
            </div>  
      </div>
    </>
  )
}

export default Profile