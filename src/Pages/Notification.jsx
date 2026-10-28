import React, { useEffect, useState } from "react";
import axios from "axios";

function Notification() {

    const [notifications, setNotifications] = useState([]);

const patientEmail = localStorage.getItem("email");
useEffect(() => {

    const patientEmail = localStorage.getItem("email");

    axios.get("http://localhost:3001/notification")
        .then((response) => {

            const data = response.data.filter(
                (item) => item.pemail === patientEmail
            );

            setNotifications(data);

        })
        .catch((error) => {
            console.log(error);
        });

}, []);
    return (
        <>
            <style>{`

                body {
                    background: #E6F2DD;
                }

                .notification-container {
                    width: 800px;
                    margin: 100px auto;
                }

                .title {
                    text-align: center;
                    color: #173B4D;
                    margin-bottom: 25px;
                }

                .notification-box {
                    background: white;
                    padding: 18px;
                    margin-bottom: 15px;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px #ccc;
                }

                .notification-message {
                    color: #173B4D;
                    font-size: 16px;
                }

                .back-button {
                    position: absolute;
                    top: 20px;
                    right: 25px;
                    background-color: #88BDA4;
                    color: #070709;
                    border: 2px solid #0d0d0e;
                    border-radius: 20px;
                    padding: 7px 18px;
                    font-size: 16px;
                    font-weight: bold;
                    text-decoration: none;
                }

                .no-notification {
                    background: white;
                    padding: 25px;
                    text-align: center;
                    border-radius: 8px;
                    box-shadow: 0 2px 8px #ccc;
                }

            `}</style>

            <div className="notification-container">

                <h2 className="title">
                    🔔 Notifications
                </h2>

                <a href="/PatientDashboard" className="back-button">
                    Back
                </a>

                {notifications.length > 0 ? (

                    notifications.map((notification) => (

                        <div className="notification-box" key={notification.id}>

                            <div className="notification-message">
                                {notification.message}
                            </div>

                        </div>

                    ))

                ) : (

                    <div className="no-notification">
                        You don't have any notifications.
                    </div>

                )}

            </div>
        </>
    );
}

export default Notification;