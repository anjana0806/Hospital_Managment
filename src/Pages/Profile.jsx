import React, { useEffect, useState } from "react";

export default function EditProfile() {

    const [patient, setPatient] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });

    const [message, setMessage] = useState("");


    useEffect(() => {

        const patientEmail = localStorage.getItem("patientEmail");

        if (!patientEmail) {
            return;
        }

        fetch(
            `http://localhost:3001/patient?email=${patientEmail}`
        )
            .then((response) => response.json())
            .then((data) => {

                if (data.length > 0) {

                    setPatient({
                        firstName: data[0].firstName,
                        lastName: data[0].lastName,
                        email: data[0].email,
                        phone: data[0].phone
                    });

                }

            })
            .catch((error) => {
                console.log(error);
            });

    }, []);


    const handleChange = (e) => {

        setPatient({
            ...patient,
            [e.target.name]: e.target.value
        });

    };


    const handleUpdate = async (e) => {

        e.preventDefault();

        const patientEmail = localStorage.getItem("patientEmail");

        try {

            const response = await fetch(
                `http://localhost:3001/patient?email=${patientEmail}`
            );

            const data = await response.json();

            if (data.length === 0) {

                alert("Patient not found!!!");
                return;

            }

            const patientId = data[0].id;


            const updateResponse = await fetch(
                `http://localhost:3001/patient/${patientId}`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        firstName: patient.firstName,
                        lastName: patient.lastName,
                        email: patient.email,
                        phone: patient.phone
                    })
                }
            );


            if (updateResponse.ok) {

                localStorage.setItem(
                    "patientEmail",
                    patient.email
                );

                localStorage.setItem(
                    "patientName",
                    patient.firstName
                );

                setMessage(
                    "Profile Updated Successfully!!!"
                );

                alert("Profile Updated Successfully!!!");

            }
            else {

                alert("Update Failed!!!");

            }

        }
        catch (error) {

            console.log(error);

            alert("Update Failed!!!");

        }

    };


    const handleCancel = () => {

        const patientEmail = localStorage.getItem("patientEmail");

        if (!patientEmail) {
            return;
        }

        fetch(
            `http://localhost:3001/patient?email=${patientEmail}`
        )
            .then((response) => response.json())
            .then((data) => {

                if (data.length > 0) {

                    setPatient({
                        firstName: data[0].firstName,
                        lastName: data[0].lastName,
                        email: data[0].email,
                        phone: data[0].phone
                    });

                }

            });

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


            <div className="main-content">

                <div className="profile-box">

                    <div
                        className="card p-4 shadow-sm"
                        style={{ backgroundColor: "#88BDA4" }}
                    >

                        <form
                            onSubmit={handleUpdate}
                        >

                            <div className="section-title">
                                Edit Profile
                            </div>

                            <hr />


                            <div className="mb-3">

                                <label>
                                    First Name{" "}
                                    <span className="required">
                                        *
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="firstName"
                                    className="form-control"
                                    value={patient.firstName}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="mb-3">

                                <label>
                                    Last Name{" "}
                                    <span className="required">
                                        *
                                    </span>
                                </label>

                                <input
                                    type="text"
                                    name="lastName"
                                    className="form-control"
                                    value={patient.lastName}
                                    onChange={handleChange}
                                    required
                                />

                            </div>


                            <div className="mb-3">

                                <label>
                                    Email{" "}
                                    <span className="required">
                                        *
                                    </span>
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={patient.email}
                                    onChange={handleChange}
                                    required
                                />

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


                            <div className="text-center mt-4">

                                <input
                                    type="submit"
                                    name="Update"
                                    value="Update Profile"
                                    className="btn-update"
                                />


                                <button
                                    type="button"
                                    className="btn btn-outline-secondary ms-2"
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </>

    );

}