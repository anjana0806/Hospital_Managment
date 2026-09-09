import React, { useState } from 'react';
import Header1 from '../Component/Header1';
import Sidebar1 from '../Component/Sidebar1';
import Footer from '../Component/Footer';
const initialPatients = [
    {
        pid: 1,
        first_name: 'John',
        last_name: 'Smith',
        gender: 'Male',
        phone: '1234567890',
        email: 'john.smith@example.com',
        address: '123 Main Street, New York',
    },
    {
        pid: 2,
        first_name: 'Emma',
        last_name: 'Johnson',
        gender: 'Female',
        phone: '0987654321',
        email: 'emma.johnson@example.com',
        address: '456 Park Avenue, London',
    },
    {
        pid: 3,
        first_name: 'Daniel',
        last_name: 'Brown',
        gender: 'Male',
        phone: '9876543210',
        email: 'daniel.brown@example.com',
        address: '789 Market Road, Paris',
    },
];

const DoctorDashboard = () => {
    const [doctorName] = useState('Dr. Alex Carter');
    const [patients, setPatients] = useState(initialPatients);

    const handleDelete = (pid) => {
        const confirmed = window.confirm('Are you sure you want to delete this patient?');
        if (confirmed) {
            setPatients((prevPatients) => prevPatients.filter((patient) => patient.pid !== pid));
        }
    };

    return (
        <>
            <style>{`
                .main-content {
                    position: fixed;
                    height: auto;
                    min-height: calc(100vh - 120px);
                    overflow-y: auto;
                }
                .patient-dashboard {
                    padding: 25px;
                    padding-bottom: 100px;
                }
                .dashboard-heading {
                    font-size: 28px;
                    font-weight: bold;
                    color: #173B4D;
                    margin-bottom: 5px;
                }
                .dashboard-text {
                    color: #607D86;
                    margin-bottom: 25px;
                }
                .patient-table-card {
                    background: white;
                    border-radius: 12px;
                    padding: 25px;
                    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);
                }
                .patient-table-title {
                    background-color: #88BDA4;
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
                }
                .patient-table th {
                    background-color: #173B4D;
                    color: white;
                    padding: 13px;
                    text-align: left;
                    white-space: nowrap;
                }
                .patient-table td {
                    padding: 12px;
                    border-bottom: 1px solid #d9e5e1;
                    color: #29434E;
                    vertical-align: middle;
                }
                .patient-table tbody tr:hover {
                    background-color: #f0f8f5;
                }

                .patient-table tbody tr:nth-child(even) {
                    background-color: #f8fbfa;
                }
                .delete-btn {
                    text-decoration: none;
                    background-color: #dc3545;
                    color: white;
                    padding: 6px 11px;
                    border-radius: 5px;
                    font-size: 13px;
                    font-weight: bold;
                    cursor: pointer;
                    border: none;
                }
                .delete-btn:hover {
                    background-color: #b02a37;
                    color: white;
                }
                .gender-badge {
                    background-color: #e6f2dd;
                    color: #315c45;
                    padding: 5px 10px;
                    border-radius: 15px;
                    font-size: 12px;
                    font-weight: bold;
                }
                .table-container {
                    overflow-x: auto;
                }
                .no-patient {
                    text-align: center;
                    padding: 30px;
                    color: #607D86;
                    font-size: 18px;
                }
            `}</style>

            <Header1 />
            <Sidebar1 />

            <main className="main-content">
                <div className="patient-dashboard">
                    <div className="dashboard-heading">Doctor Dashboard</div>
                    <div className="dashboard-text">Welcome, {doctorName}</div>

                    <div className="patient-table-card">
                        <div className="patient-table-title">Patient Records</div>

                        {patients.length > 0 ? (
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
                                        <th>Address</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {patients.map((patient) => (
                                        <tr key={patient.pid}>
                                            <td>
                                                <button
                                                    type="button"
                                                    className="delete-btn"
                                                    onClick={() => handleDelete(patient.pid)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                            <td>{patient.pid}</td>
                                            <td>{patient.first_name}</td>
                                            <td>{patient.last_name}</td>
                                            <td>
                                                <span className="gender-badge">{patient.gender}</span>
                                            </td>
                                            <td>{patient.phone}</td>
                                            <td>{patient.email}</td>
                                            <td>{patient.address}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="no-patient">No patients found!!!</div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default DoctorDashboard;