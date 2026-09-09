import React, { useState } from "react";
function PatientDashboard() {
    const [search, setSearch] = useState("");

    const doctors = [
        {
            name: "Dr. Rahul Patel",
            department: "Cardiology",
            specialization: "Cardiologist",
            phone: "9876543210",
            image: "images/doctor1.jpg"
        },
        {
            name: "Dr. Priya Sharma",
            department: "Pediatrics",
            specialization: "Pediatrician",
            phone: "9449849844",
            image: "images/doctor2.jpg"
        },
        {
            name: "Dr. Ananya Reddy",
            department: "Neurology",
            specialization: "Neurologist",
            phone: "9856895690",
            image: "images/doctor2.jpg"
        },
        {
            name: "Dr. Nilam Shah",
            department: "ENT",
            specialization: "ENT Specialist",
            phone: "8656543210",
            image: "images/doctor2.jpg"
        },
        {
            name: "Dr. Sanjay Kumar",
            department: "Ophthalmology",
            specialization: "Ophthalmologist",
            phone: "9515896584",
            image: "images/doctor1.jpg"
        },
        {
            name: "Dr. Amita Desai",
            department: "General Surgery",
            specialization: "General Surgeon",
            phone: "8476324526",
            image: "images/doctor1.jpg"
        },
        {
            name: "Dr. Rajesh Gupta",
            department: "Gynecology",
            specialization: "Gynecologist",
            phone: "8476324526",
            image: "images/doctor1.jpg"
        },
        {
            name: "Dr. Sunita Mehta",
            department: "General Medicine",
            specialization: "General Medicine",
            phone: "8476324526",
            image: "images/doctor1.jpg"
        },
        {
            name: "Dr. Arnav Jariwala",
            department: "Psychiatry",
            specialization: "Psychiatrist",
            phone: "8476324526",
            image: "images/doctor1.jpg"
        }
    ];

    const filteredDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase()) ||
        doctor.department.toLowerCase().includes(search.toLowerCase()) ||
        doctor.specialization.toLowerCase().includes(search.toLowerCase())
    );

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

                    .patient-dashboard {
                        margin-left: 230px;
                        margin-top: 60px;
                        padding: 30px 35px 80px 37px;
                        min-height: calc(100vh - 100px);
                        background-color: #E6F2DD;
                        overflow-y: auto;
                    }

                    .search-box {
                        margin-bottom: 20px;
                    }

                    .search-title {
                        font-size: 28px;
                        font-weight: bold;
                        color: #173B4D;
                        margin-bottom: 10px;
                    }

                    .search-input {
                        width: 100%;
                        height: 47px;
                        padding: 10px 15px;
                        border: 1px solid #C9DDE3;
                        border-radius: 8px;
                        font-size: 15px;
                        outline: none;
                        background-color: white;
                    }

                    .doctor-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 20px 25px;
                    }

                    .doctor-card {
                        background-color: white;
                        border-radius: 10px;
                        padding: 20px 17px;
                        min-height: 225px;
                        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.10);
                    }

                    .doctor-image {
                        width: 55px;
                        height: 55px;
                        object-fit: cover;
                        border-radius: 50%;
                        display: block;
                        margin: 0 auto 10px auto;
                    }

                    .doctor-name {
                        text-align: center;
                        color: #173B4D;
                        font-size: 20px;
                        font-weight: bold;
                        margin-bottom: 17px;
                    }

                    .doctor-info {
                        font-size: 16px;
                        color: #222;
                        line-height: 1.8;
                    }

                    .doctor-info strong {
                        color: #111;
                    }

                    .no-doctor {
                        text-align: center;
                        background-color: white;
                        padding: 25px;
                        border-radius: 8px;
                        color: #666;
                    }

                    @media (max-width: 1000px) {
                        .doctor-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }

                    @media (max-width: 700px) {
                        .patient-dashboard {
                            margin-left: 0;
                            padding: 20px;
                        }

                        .doctor-grid {
                            grid-template-columns: 1fr;
                        }
                    }
                `}
            </style>

            <div className="patient-dashboard">

                <div className="search-box">

                    <div className="search-title">
                        Search
                    </div>

                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search doctor..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

                {filteredDoctors.length > 0 ? (

                    <div className="doctor-grid">

                        {filteredDoctors.map((doctor, index) => (

                            <div className="doctor-card" key={index}>

                                <img
                                    src={doctor.image}
                                    alt="Doctor"
                                    className="doctor-image"
                                />

                                <div className="doctor-name">
                                    {doctor.name}
                                </div>

                                <div className="doctor-info">

                                    <div>
                                        <strong>Department:</strong>{" "}
                                        {doctor.department}
                                    </div>

                                    <div>
                                        <strong>Specialization:</strong>{" "}
                                        {doctor.specialization}
                                    </div>

                                    <div>
                                        <strong>Phone:</strong>{" "}
                                        {doctor.phone}
                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                ) : (

                    <div className="no-doctor">
                        No doctor found.
                    </div>

                )}

            </div>
        </>
    );
}

export default PatientDashboard;