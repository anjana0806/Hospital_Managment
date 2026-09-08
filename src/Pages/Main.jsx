
import React from "react";
function Main() {
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
                    background-color: #E6F2DD;
                }

                .main-page {
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 30px;
                }

                .main-container {
                    width: 100%;
                    max-width: 500px;
                    text-align: center;
                }

                .hospital-title {
                    font-size: 35px;
                    font-weight: bold;
                    color: #173B4D;
                    margin-bottom: 10px;
                }

                .hospital-subtitle {
                    font-size: 17px;
                    color: #29434E;
                    margin-bottom: 30px;
                }

                .option-card {
                    background-color: #88BDA4;
                    padding: 25px;
                    margin-bottom: 20px;
                    border-radius: 10px;
                }

                .option-card h3 {
                    margin-top: 0;
                    color: #173B4D;
                    font-size: 22px;
                }

                .option-card p {
                    color: #29434E;
                    margin-bottom: 20px;
                }

                .main-btn {
                    display: inline-block;
                    padding: 11px 30px;
                    background-color: #E6F2DD;
                    color: #173B4D;
                    text-decoration: none;
                    border-radius: 7px;
                    font-size: 16px;
                    font-weight: bold;
                    border: none;
                    cursor: pointer;
                }
}
            `}</style>

            <div className="main-page">
                <div className="main-container">

                    <div className="hospital-title">
                        Sunshine Medicare
                    </div>

                    <div className="hospital-subtitle">
                        Our priority is your health and peace of mind.
                    </div>

                    <div className="option-card">
                        <h3>Login</h3>

                        <p>
                            Already have an account? Login to continue.
                        </p>

                        <button
                            className="main-btn"
                            onClick={() => window.location.href = "/PatientLogin"}
                        >
                            Login
                        </button>
                    </div>

                    <div className="option-card">
                        <h3>Registration</h3>

                        <p>
                            New patient? Create your account.
                        </p>

                        <button
                            className="main-btn"
                            onClick={() => window.location.href = "/PatientRegistration"}>
                            Registration
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Main;

