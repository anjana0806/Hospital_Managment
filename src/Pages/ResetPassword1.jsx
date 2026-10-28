
import React, { useState } from "react";

export default function ResetPassword1() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleReset = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match!");
            return;
        }



        alert("Password reset successfully!");
        window.location.href = "./DoctorLogin";
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
                        min-height: 100vh;
                        background-color: #E6F2DD;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }

                    .login-box {
                        background-color: #88BDA4;
                        width: 550px;
                        padding: 35px;
                        border-radius: 7px;
                        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                    }

                    .login-title {
                        color: #080a0c;
                        font-family: Arial, sans-serif;
                        font-size: 38px;
                        font-weight: bold;
                        margin-bottom: 20px;
                    }

                    .login-label {
                        font-family: Arial, sans-serif;
                        font-size: 20px;
                        font-weight: bold;
                        color: #111;
                        margin-bottom: 8px;
                    }

                    .login-input {
                        height: 55px;
                        width: 100%;
                        border: 1px solid #d5dce3;
                        border-radius: 9px;
                        padding: 10px 15px;
                        font-size: 18px;
                        outline: none;
                        border: none;
                    }

                    .login-input:focus {
                        outline: none;
                    }

                    .login-button {
                        background-color: #E6F2DD;
                        width: 100%;
                        height: 55px;
                        color: black;
                        border: none;
                        border-radius: 8px;
                        font-size: 20px;
                        font-weight: bold;
                        cursor: pointer;
                        margin-top: 15px;
                        outline: none;
                    }
                `}
            </style>

            <div className="login-box">

                <h2 className="login-title">
                    Reset Password1
                </h2>

                <hr />

                <form onSubmit={handleReset} autoComplete="off">

                    <div className="mb-4">

                        <label className="login-label">
                            New Password <span style={{ color: "red" }}>*</span>
                        </label>

                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Enter new password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                    </div>

                    <div className="mb-4">

                        <label className="login-label">
                            Confirm Password <span style={{ color: "red" }}>*</span>
                        </label>

                        <input
                            type="password"
                            name="confirm_password"
                            className="login-input"
                            placeholder="Confirm new password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />

                    </div>

                    <div>

                        <a
                            href="./DoctorLogin"
                            style={{
                                color: "#0546f8",
                                textDecoration: "none",
                                fontSize: "17px"
                            }}
                        >
                            Back to Login
                        </a>

                    </div>

                    <input
                        type="submit"
                        value="Reset Password"
                        name="reset"
                        className="login-button"
                    />

                </form>

            </div>
        </>
    );
}

