import React, { useEffect, useState } from "react";

function ViewAppointment() {

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const loadAppointments = async () => {
            try {
                const response = await fetch("http://localhost:3001/appointment");

                if (!response.ok) {
                    throw new Error("Unable to load appointments");
                }

                const data = await response.json();
                setAppointments(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("Error loading appointments:", error);
                setAppointments([]);
            }
        };

        loadAppointments();
    }, []);

    const css = `
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #EAF2F8;
        }

        .appointment-dashboard {
            margin-left: 230px;
            margin-top: 60px;
            padding: 30px;
            min-height: calc(100vh - 100px);
            background: #EAF2F8;
        }

        .appointment-card {
            background: white;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.12);
            overflow-x: auto;
        }

        .appointment-title {
            background: #88BDA4;
            color: #173B4D;
            padding: 15px 20px;
            border-radius: 8px;
            font-size: 21px;
            font-weight: bold;
            margin-bottom: 20px;
        }

        .appointment-table {
            width: 100%;
            border-collapse: collapse;
            min-width: 900px;
        }

        .appointment-table th {
            background: #173B4D;
            color: white;
            padding: 12px;
            text-align: center;
            font-size: 14px;
        }

        .appointment-table td {
            padding: 12px;
            text-align: center;
            border-bottom: 1px solid #ddd;
            font-size: 14px;
        }

        .appointment-table tr:hover {
            background: #f5f5f5;
        }

        .status-badge {
            background: #E6F2DD;
            color: #315C45;
            padding: 5px 12px;
            border-radius: 15px;
        }

        .no-appointment {
            text-align: center;
            padding: 30px;
            color: #777;
            font-size: 16px;
        }
    `;

    return (
        <>
            <style>{css}</style>

            <div className="appointment-dashboard">

                <div className="appointment-card">

                    <div className="appointment-title">
                        Appointment Details
                    </div>

                    {appointments.length === 0 ? (

                        <div className="no-appointment">
                            No appointments found.
                        </div>

                    ) : (

                        <table className="appointment-table">

                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Patient Name</th>
                                    <th>Phone</th>
                                    <th>Department</th>
                                    <th>Doctor</th>
                                    <th>Appointment Date</th>
                                    <th>Appointment Time</th>
                                    <th>Problem</th>
                                    <th>Status</th>
                                </tr>
                            </thead>

                            <tbody>

                                {appointments.map((appointment) => (

                                    <tr key={appointment.id}>

                                        <td>{appointment.id}</td>
                                        <td>{appointment.patientName}</td>
                                        <td>{appointment.phone}</td>
                                        <td>{appointment.department}</td>
                                        <td>{appointment.doctor}</td>
                                        <td>{appointment.appointmentDate}</td>
                                        <td>{appointment.appointmentTime}</td>
                                        <td>{appointment.problem}</td>

                                        <td>
                                            <span className="status-badge">
                                                Booked
                                            </span>
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

export default ViewAppointment;