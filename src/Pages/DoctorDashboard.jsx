// import React, { useState } from "react";
// function DoctorDashboard() {
//     const [patients, setPatients] = useState([]);
//     const deletePatient = (id) => {
//         const confirmDelete = window.confirm("Are you sure you want to delete this patient?");
//         if (confirmDelete) {
//             setPatients(patients.filter((patient) => patient.id !== id));
//             alert("Patient Removed!!!");
//         }
//     };
//     const css = `
//         * {
//             box-sizing: border-box;
//         }

//         body {
//             margin: 0;
//             font-family: Arial, sans-serif;
//             background: #EAF6F8;
//         }

//         .doctor-dashboard {
//             margin-left: 230px;
//             margin-top: 60px;
//             padding: 30px;
//             min-height: calc(100vh - 100px);
//             background: #EAF6F8;
//         }

//         .patient-table-card {
//             background: white;
//             border-radius: 12px;
//             padding: 25px;
//             box-shadow: 0 3px 10px rgba(0,0,0,0.12);
//             overflow-x: auto;
//         }

//         .patient-table-title {
//             background: #88BDA4;
//             color: #173B4D;
//             padding: 15px 20px;
//             border-radius: 8px;
//             font-size: 21px;
//             font-weight: bold;
//             margin-bottom: 20px;
//         }

//         .patient-table {
//             width: 100%;
//             border-collapse: collapse;
//             min-width: 900px;
//         }

//         .patient-table th {
//             background: #173B4D;
//             color: white;
//             padding: 12px;
//             text-align: center;
//             font-size: 14px;
//         }

//         .patient-table td {
//             padding: 12px;
//             text-align: center;
//             border-bottom: 1px solid #ddd;
//             font-size: 14px;
//         }

//         .patient-table tr:hover {
//             background: #f5f5f5;
//         }

//         .gender-badge {
//             background: #E6F2DD;
//             color: #315C45;
//             padding: 5px 10px;
//             border-radius: 15px;
//         }

//         .delete-btn {
//             background: #dc3545;
//             color: white;
//             border: none;
//             padding: 7px 13px;
//             border-radius: 5px;
//             cursor: pointer;
//         }

//         .delete-btn:hover {
//             background: #b02a37;
//         }

//         .no-patient {
//             text-align: center;
//             padding: 30px;
//             color: #777;
//             font-size: 16px;
//         }
//     `;

//     return (
//         <>
//             <style>{css}</style>

//             <div className="doctor-dashboard">

//                 <div className="patient-table-card">

//                     <div className="patient-table-title">
//                         Patient Dashboard
//                     </div>

//                     {patients.length === 0 ? (

//                         <div className="no-patient">
//                             No patient records found.
//                         </div>

//                     ) : (

//                         <table className="patient-table">

//                             <thead>
//                                 <tr>
//                                     <th>Action</th>
//                                     <th>ID</th>
//                                     <th>First Name</th>
//                                     <th>Last Name</th>
//                                     <th>Gender</th>
//                                     <th>Phone</th>
//                                     <th>Email</th>
//                                     <th>Password</th>
//                                     <th>Address</th>
//                                 </tr>
//                             </thead>

//                             <tbody>

//                                 {patients.map((patient) => (

//                                     <tr key={patient.id}>

//                                         <td>
//                                             <button
//                                                 className="delete-btn"
//                                                 onClick={() => deletePatient(patient.id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </td>

//                                         <td>{patient.id}</td>
//                                         <td>{patient.firstName}</td>
//                                         <td>{patient.lastName}</td>

//                                         <td>
//                                             <span className="gender-badge">
//                                                 {patient.gender}
//                                             </span>
//                                         </td>

//                                         <td>{patient.phone}</td>
//                                         <td>{patient.email}</td>
//                                         <td>********</td>
//                                         <td>{patient.address}</td>

//                                     </tr>

//                                 ))}

//                             </tbody>

//                         </table>

//                     )}

//                 </div>

//             </div>
//         </>
//     );
// }

// export default DoctorDashboard;

import React, { useEffect, useState } from "react";

function DoctorDashboard() {

    const [patients, setPatients] = useState([]);

    
    // Get patients from db.json
    useEffect(() => {

        fetch("http://localhost:3001/patient")
            .then((response) => response.json())
            .then((data) => {
                setPatients(data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);


    // Delete patient
    const deletePatient = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this patient?"
        );

        if (!confirmDelete) {
            return;
        }

        try {

            const response = await fetch(
                `http://localhost:3001/patient/${id}`,
                {
                    method: "DELETE"
                }
            );

            if (response.ok) {

                setPatients(
                    patients.filter((patient) => patient.id !== id)
                );

                alert("Patient Removed!!!");

            } else {

                alert("Patient Delete Failed!!!");

            }

        } catch (error) {

            console.log(error);
            alert("Server is not running!!!");

        }
    };


    const css = `
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #EAF6F8;
        }

        .doctor-dashboard {
            margin-left: 230px;
            margin-top: 60px;
            padding: 30px;
            min-height: calc(100vh - 100px);
            background: #EAF6F8;
        }

        .patient-table-card {
            background: white;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.12);
            overflow-x: auto;
        }

        .patient-table-title {
            background: #88BDA4;
            color: #173B4D;
            padding: 15px 20px;
            border-radius: 8px;
            font-size: 21px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .patient-table {
            width: 100%;
            border-collapse: collapse;
            min-width: 900px;
        }

        .patient-table th {
            background: #173B4D;
            color: white;
            padding: 12px;
            text-align: center;
            font-size: 14px;
        }

        .patient-table td {
            padding: 12px;
            text-align: center;
            border-bottom: 1px solid #ddd;
            font-size: 14px;
        }

        .patient-table tr:hover {
            background: #f5f5f5;
        }

        .gender-badge {
            background: #E6F2DD;
            color: #315C45;
            padding: 5px 10px;
            border-radius: 15px;
        }

        .delete-btn {
            background: #dc3545;
            color: white;
            border: none;
            padding: 7px 13px;
            border-radius: 5px;
            cursor: pointer;
        }

        .delete-btn:hover {
            background: #b02a37;
        }

        .no-patient {
            text-align: center;
            padding: 30px;
            color: #777;
            font-size: 16px;
        }
    `;


    return (
        <>

            <style>{css}</style>

            <div className="doctor-dashboard">

                <div className="patient-table-card">

                    <div className="patient-table-title">
                        Patient Dashboard
                    </div>


                    {patients.length === 0 ? (

                        <div className="no-patient">
                            No patient records found.
                        </div>

                    ) : (

                        <table className="patient-table">

                            <thead>

                                <tr>

                                    <th>Action</th>
                                    <th>ID</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Gender</th>
                                    <th>Phone</th>
                                    <th>Email</th>
                                    <th>Password</th>
                                    <th>Address</th>

                                </tr>

                            </thead>


                            <tbody>

                                {patients.map((patient) => (

                                    <tr key={patient.id}>

                                        <td>

                                            <button
                                                className="delete-btn"
                                                onClick={() =>
                                                    deletePatient(patient.id)
                                                }
                                            >
                                                Delete
                                            </button>

                                        </td>


                                        <td>
                                            {patient.id}
                                        </td>


                                        <td>
                                            {patient.firstName}
                                        </td>


                                        <td>
                                            {patient.lastName}
                                        </td>


                                        <td>

                                            <span className="gender-badge">
                                                {patient.gender}
                                            </span>

                                        </td>


                                        <td>
                                            {patient.phone}
                                        </td>


                                        <td>
                                            {patient.email}
                                        </td>


                                        <td>
                                            ********
                                        </td>


                                        <td>
                                            {patient.address}
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    )}

                </div>

            </div>

        </>
    );
}

export default DoctorDashboard;