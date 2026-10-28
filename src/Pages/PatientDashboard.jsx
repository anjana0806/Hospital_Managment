import React, { useEffect, useState } from "react";
const PatientDashboard = () => {

    const [doctors, setDoctors] = useState([]);
    const [search, setSearch] = useState("");

useEffect(() => {

    fetch("http://localhost:3001/doctor")
        .then((response) => response.json())
        .then((data) => {

            console.log(data);
            setDoctors(data);

        })
        .catch((error) => {
            console.log(error);
        });

}, []);

const filteredDoctors = doctors.filter((doctor) => {

    return (
        (doctor.name &&
            doctor.name.toLowerCase().includes(search.toLowerCase())) ||

        (doctor.department &&
            doctor.department.toLowerCase().includes(search.toLowerCase())) ||

        (doctor.Specialization &&
            doctor.Specialization.toLowerCase().includes(search.toLowerCase())) ||

        (doctor.phone &&
            doctor.phone.toString().includes(search.toLowerCase()))
    );

});


    const css = `
        .main-content {
            top: -10px;
            left: 0px;
            bottom: 44px;
            padding: 20px 30px;
            overflow-y: auto;
            overflow-x: hidden;
            background: #eaf4df;
        }

        .search-box {
            width: 100%;
            margin-bottom: 18px;
            margin-top: -10px;
        }

        .section-title {
            font-size: 28px;
            margin-bottom: 8px;
        }

        .search-box input {
            width: 100%;
            height: 42px;
            padding: 8px 14px;
            border: 1px solid #b8c9bf;
            border-radius: 8px;
            font-size: 14px;
            outline: none;
            background: white;
        }

        .doctor-item {
            margin-bottom: 18px;
        }

        .doctor-card {
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.10);
            height: 100%;
        }

        .doctor-img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 50%;
            display: block;
            margin: 0 auto 10px;
        }

        .doctor-card h2 {
            font-size: 18px;
            text-align: center;
            margin: 5px 0 12px;
        }

        .doctor-card p {
            font-size: 15px;
            margin: 5px 0;
        }
    `;


    return (
        <>
            <style>{css}</style>

            <main className="main-content">

                <div className="search-box">

                    <h1 className="section-title">
                        Search
                    </h1>

                    <input
                        type="text"
                        placeholder="Search doctor..."
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                    />

                </div>


                <div className="row">

                    {filteredDoctors.length > 0 ? (

                        filteredDoctors.map((doctor) => (

                            <div
                                className="col-lg-4 col-md-6 doctor-item"
                                key={doctor.id}
                            >

                                <div className="doctor-card">

                                    <img
                                        src="/images/doctor1.jpg"
                                        className="doctor-img"
                                        alt="Doctor"
                                    />

                                    <h2>
                                        {doctor.name}
                                    </h2>

                                    <p>
                                        <b>Department:</b>{" "}
                                        {doctor.department}
                                    </p>

                                    <p>
                                        <b>Specialization:</b>{" "}
                                        {doctor.Specialization}
                                    </p>

                                    <p>
                                        <b>Phone:</b>{" "}
                                        {doctor.phone}
                                    </p>

                                </div>

                            </div>

                        ))

                    ) : (

                        <div className="col-12">

                            <div className="alert alert-info">
                                No doctors available.
                            </div>

                        </div>

                    )}

                </div>

            </main>
        </>
    );
};

export default PatientDashboard;