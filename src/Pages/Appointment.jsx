import React, { useState } from "react";

function Appointment() {

    const [patientName, setPatientName] = useState("");
    const [phone, setPhone] = useState("");
    const [department, setDepartment] = useState("");
    const [doctor, setDoctor] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    const [problem, setProblem] = useState("");

    const handleBookAppointment = (e) => {
        e.preventDefault();

        if (
            patientName === "" ||
            phone === "" ||
            department === "" ||
            doctor === "" ||
            appointmentDate === "" ||
            appointmentTime === "" ||
            problem === ""
        ) {
            alert("Please fill all the fields");
            return;
        }

        alert("Appointment Booked Successfully");
    };

    const handleCancel = () => {
        setPatientName("");
        setPhone("");
        setDepartment("");
        setDoctor("");
        setAppointmentDate("");
        setAppointmentTime("");
        setProblem("");
    };

    return (
        <>
            <style>{`

                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background-color: #EAF6F8;
                }

                .appointment-page {
                    min-height: 100vh;
                    padding: 40px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .appointment-box {
                    width: 100%;
                    max-width: 850px;
                    background-color: white;
                    padding: 30px 40px;
                    border-radius: 10px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.10);
                }

                .appointment-title {
                    text-align: center;
                    color: #173B4D;
                    font-size: 28px;
                    font-weight: bold;
                    margin-bottom: 30px;
                }

                .form-row {
                    display: flex;
                    gap: 20px;
                }

                .form-group {
                    width: 100%;
                    margin-bottom: 20px;
                }

                .form-group label {
                    display: block;
                    color: #29434E;
                    font-size: 16px;
                    font-weight: bold;
                    margin-bottom: 8px;
                }

                .required {
                    color: #D9534F;
                }

                .form-control {
                    width: 100%;
                    height: 50px;
                    padding: 10px 15px;
                    border: 1px solid #C9DDE3;
                    border-radius: 8px;
                    font-size: 16px;
                    outline: none;
                    background-color: white;
                }

                .form-control:focus {
                    border-color: #659287;
                }

                textarea.form-control {
                    height: 100px;
                    resize: none;
                }

                .button-area {
                    text-align: center;
                    margin-top: 10px;
                }

                .book-button {
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
                    background-color: white;
                    color: #173B4D;
                    border: 1px solid #659287;
                    border-radius: 8px;
                    font-size: 17px;
                    cursor: pointer;
                }

                .book-button:hover,
                .cancel-button:hover {
                    background-color: #88BDA4;
                }

                @media (max-width: 650px) {

                    .form-row {
                        flex-direction: column;
                        gap: 0;
                    }

                    .appointment-box {
                        padding: 25px 20px;
                    }

                }

            `}</style>

            <div className="appointment-page">

                <div className="appointment-box">

                    <div className="appointment-title">
                        Book Appointment
                    </div>

                    <form onSubmit={handleBookAppointment}>

                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Patient Name <span className="required">*</span>
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Patient Name"
                                    value={patientName}
                                    onChange={(e) =>
                                        setPatientName(e.target.value)
                                    }
                                />

                            </div>

                            <div className="form-group">

                                <label>
                                    Phone <span className="required">*</span>
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Phone Number"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Department <span className="required">*</span>
                                </label>

                                <select
                                    className="form-control"
                                    value={department}
                                    onChange={(e) =>
                                        setDepartment(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select Department
                                    </option>

                                    <option value="Cardiology">
                                        Cardiology
                                    </option>

                                    <option value="Dermatology">
                                        Dermatology
                                    </option>

                                    <option value="Orthopedics">
                                        Orthopedics
                                    </option>

                                    <option value="Pediatrics">
                                        Pediatrics
                                    </option>

                                    <option value="Gynecology">
                                        Gynecology
                                    </option>

                                    <option value="Neurology">
                                        Neurology
                                    </option>

                                    <option value="General Medicine">
                                        General Medicine
                                    </option>

                                    <option value="ENT">
                                        ENT
                                    </option>

                                    <option value="Ophthalmology">
                                        Ophthalmology
                                    </option>

                                    <option value="Dentistry">
                                        Dentistry
                                    </option>

                                    <option value="Psychiatry">
                                        Psychiatry
                                    </option>

                                    <option value="General Surgery">
                                        General Surgery
                                    </option>

                                </select>

                            </div>

                            <div className="form-group">

                                <label>
                                    Doctor <span className="required">*</span>
                                </label>

                                <select
                                    className="form-control"
                                    value={doctor}
                                    onChange={(e) =>
                                        setDoctor(e.target.value)
                                    }
                                >

                                    <option value="">
                                        Select Doctor
                                    </option>

                                    <option value="Interventional Cardiologist">
                                        Dr. Rahul Patel
                                    </option>

                                    <option value="Cosmetic Dermatologist">
                                        Dr. Priya Shah
                                    </option>

                                    <option value="Joint Replacement Specialist">
                                        Dr. Amit Mehta
                                    </option>

                                    <option value="Child Specialist">
                                        Dr. Neha Joshi
                                    </option>

                                </select>

                            </div>

                        </div>

                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Appointment Date{" "}
                                    <span className="required">*</span>
                                </label>

                                <input
                                    type="date"
                                    className="form-control"
                                    value={appointmentDate}
                                    onChange={(e) =>
                                        setAppointmentDate(e.target.value)
                                    }
                                />

                            </div>

                            <div className="form-group">

                                <label>
                                    Appointment Time{" "}
                                    <span className="required">*</span>
                                </label>

                                <input
                                    type="time"
                                    className="form-control"
                                    value={appointmentTime}
                                    onChange={(e) =>
                                        setAppointmentTime(e.target.value)
                                    }
                                />

                            </div>

                        </div>

                        <div className="form-group">

                            <label>
                                Problem <span className="required">*</span>
                            </label>

                            <textarea
                                className="form-control"
                                placeholder="Enter your problem"
                                value={problem}
                                onChange={(e) =>
                                    setProblem(e.target.value)
                                }
                            ></textarea>

                        </div>

                        <div className="button-area">

                            <button
                                type="submit"
                                className="book-button"
                            >
                                Book Appointment
                            </button>

                            <button
                                type="button"
                                className="cancel-button"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                </div>

            </div>
        </>
    );
}

export default Appointment;