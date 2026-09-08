import React, { useState } from "react";
function Profile() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const handleUpdate = (e) => {
        e.preventDefault();
        if (
            firstName === "" ||
            lastName === "" ||
            phone === "" ||
            email === "" ||
            gender === "" ||
            address === "" ||
            password === "" ||
            confirmPassword === "") 
        {
            alert("Please fill all the fields");
            return;
        }
        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match");
            return;
        }
        alert("Profile Updated Successfully");
    };
    const handleCancel = () => {
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setGender("");
        setAddress("");
        setPassword("");
        setConfirmPassword("");
    };
    return (
        <>
            <style>
                {`
                    * {
                        box-sizing: border-box;
                    }
                    body {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                        background-color: #E6F2DD;
                    }
                    .profile-page {
                        margin-left: 260px;
                        margin-top: 70px;
                        min-height: calc(100vh - 70px);
                        background-color: #E6F2DD;
                        padding: 30px 70px 50px 70px;
                    }
                    .profile-box {
                        width: 100%;
                        max-width: 925px;
                        margin: auto;
                        background-color: #88BDA4;
                        padding: 30px;
                        border: 1px solid #659287;
                        border-radius: 7px;
                    }
                    .profile-title {
                        color: #173B4D;
                        font-size: 27px;
                        font-weight: bold;
                        margin-bottom: 18px;
                        padding-bottom: 18px;
                        border-bottom: 1px solid #659287;
                    }
                    .form-row {
                        display: flex;
                        gap: 27px;
                    }
                    .form-group {
                        width: 100%;
                        margin-bottom: 18px;
                    }
                    .form-group label {
                        display: block;
                        color: #173B4D;
                        font-size: 16px;
                        margin-bottom: 7px;
                    }
                    .required {
                        color: red;
                    }
                    .form-control {
                        width: 100%;
                        height: 53px;
                        padding: 10px 14px;
                        border: 1px solid #C9DDE3;
                        border-radius: 6px;
                        font-size: 16px;
                        outline: none;
                        background-color: white;
                    }
                    .form-control:focus {
                        border-color: #659287;
                    }
                    textarea.form-control {
                        height: 55px;
                        resize: vertical;
                    }
                    .gender-box {
                        display: flex;
                        align-items: center;
                        gap: 30px;
                        margin-top: 4px;
                    }
                    .gender-option {
                        display: flex !important;
                        align-items: center;
                        gap: 8px;
                        color: #29434E !important;
                    }
                    .gender-option input {
                        width: 20px;
                        height: 20px;
                    }
                    .button-area {
                        text-align: center;
                        margin-top: 10px;
                    }
                    .update-button {
                        padding: 12px 35px;
                        background-color: #E6F2DD;
                        color: #173B4D;
                        border: none;
                        border-radius: 8px;
                        font-size: 17px;
                        font-weight: bold;
                        cursor: pointer;
                    }
                    .cancel-button {
                        padding: 12px 35px;
                        margin-left: 10px;
                        background-color: transparent;
                        color: #173B4D;
                        border: 1px solid #659287;
                        border-radius: 8px;
                        font-size: 17px;
                        cursor: pointer;
                    }
                    .update-button:hover {
                        background-color: #d5eacb;
                    }
                    .cancel-button:hover {
                        background-color: #659287;
                        color: white;
                    }
                    .profile-page {
                        margin-left: 230px;
                        margin-top: 60px;
                        height: calc(100vh - 100px);
                        padding: 30px;
                        background-color: #E6F2DD;
                        overflow: hidden;
                    }
                        .profile-box {
                        background-color: #88BDA4;
                        padding: 30px;
                        border-radius: 8px;
                    }
                `}
            </style>
            <div className="profile-page">
                <div className="profile-box">
                    <div className="profile-title"> Edit Profile </div>
                    <form onSubmit={handleUpdate}>
                        <div className="form-row">
                            <div className="form-group">
                                <label> First Name <span className="required">*</span> </label>
                                <input type="text" className="form-control" placeholder="Enter First name" value={firstName} onChange={(e) => setFirstName(e.target.value) } />
                            </div>
                            <div className="form-group">
                                <label> Last Name <span className="required">*</span>
                                </label>
                                <input type="text" className="form-control" placeholder="Enter Last name" value={lastName} onChange={(e) => setLastName(e.target.value) } />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label> Phone Number <span className="required">*</span> </label>
                                <input type="text" className="form-control" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value) } />
                            </div>
                            <div className="form-group">
                                <label> Email Address <span className="required">*</span> </label>
                                <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value) } />
                            </div>
                        </div>
                        <div className="form-group">
                         <label> Gender <span className="required">*</span> </label>
                        
                            <div className="gender-box">
                                <label className="gender-option">
                                <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => setGender(e.target.value) } /> Male </label>

                                <label className="gender-option">
                                <input type="radio"  name="gender" value="Female" checked={gender === "Female"} onChange={(e) => setGender(e.target.value) } /> Female </label>
                                
                                <label className="gender-option">
                                <input type="radio" name="gender" value="Other" checked={gender === "Other"} onChange={(e) => setGender(e.target.value) } /> Other </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label> Address <span className="required">*</span> </label>
                            <textarea className="form-control" placeholder="Enter full address" value={address} onChange={(e) => setAddress(e.target.value) }></textarea>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label> Password <span className="required">*</span> </label>
                                <input type="password" className="form-control" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value) } />
                            </div>
                            <div className="form-group">
                                <label> Confirm Password{" "} <span className="required">*</span> </label>
                                <input type="password" className="form-control" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value) } />
                            </div>
                        </div>
                        <div className="button-area">
                            <button type="submit" className="update-button"> Update Profile </button>
                            <button type="button" className="cancel-button" onClick={handleCancel}> Cancel </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Profile;