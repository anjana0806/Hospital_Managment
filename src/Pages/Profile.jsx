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

                body {
                    background: #EAF6F8;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                }

                .profile-box {
                    width: 600px;
                    margin: 50px auto;
                }

                .section-title {
                    margin-top: 10px;
                    color: #173B4D;
                    font-weight: bold;
                    font-size: 22px;
                }

                label {
                    font-weight: 600;
                    margin-bottom: 7px;
                    color: #29434E;
                }

                .required {
                    color: #D9534F;
                }

                .form-control {
                    height: 50px;
                    border-radius: 8px;
                    border: 1px solid #C9DDE3;
                }

                .btn-update {
                    background: #E6F2DD;
                    color: black;
                    padding: 12px 35px;
                    font-size: 17px;
                    border-radius: 8px;
                    border: none;
                }

                .btn-update:hover {
                    background: #d3e8c8;
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


                            <div className="mb-3">

                                <label>
                                    Phone Number{" "}
                                    <span className="required">
                                        *
                                    </span>
                                </label>

                                <input
                                    type="tel"
                                    name="phone"
                                    className="form-control"
                                    value={patient.phone}
                                    onChange={handleChange}
                                    pattern="[0-9]{10}"
                                    maxLength="10"
                                    required
                                />

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