import React, { useState } from "react";

function ForgotPassword1() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleForgotPassword = (e) => {
        e.preventDefault();

        if (email === "") {
            setMessage("Please enter your email.");
            return;
        }

        setMessage("If this email is registered, password reset instructions will be sent.");
    };

    const css = `
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #E6F2DD;
        }

        .forgot-page {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .forgot-box {
            width: 500px;
            background-color: #88BDA4;
            padding: 35px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .forgot-title {
            text-align: center;
            color: #173B4D;
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .forgot-text {
            text-align: center;
            color: #29434E;
            font-size: 15px;
            margin-bottom: 25px;
        }

        .form-label {
            display: block;
            color: #29434E;
            font-size: 16px;
            margin-bottom: 8px;
        }

        .form-control {
            width: 100%;
            height: 48px;
            padding: 10px 15px;
            border: 1px solid #C9DDE3;
            border-radius: 8px;
            font-size: 15px;
            outline: none;
        }

        .form-control:focus {
            border-color: #173B4D;
        }

        .reset-btn {
            width: 100%;
            height: 45px;
            margin-top: 20px;
            background-color: #E6F2DD;
            color: #173B4D;
            border: none;
            border-radius: 7px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }

        .reset-btn:hover {
            background-color: #d4eac8;
        }

        .message {
            text-align: center;
            margin-top: 15px;
            color: #173B4D;
            font-size: 14px;
        }

        .back-login {
            display: block;
            text-align: center;
            margin-top: 20px;
            color: #173B4D;
            text-decoration: none;
            font-size: 15px;
        }

        .back-login:hover {
            text-decoration: underline;
        }
    `;

    return (
        <>
            <style>{css}</style>

            <div className="forgot-page">

                <div className="forgot-box">

                    <div className="forgot-title">
                        Forgot Password
                    </div>

                    <div className="forgot-text">
                        Enter your registered email address to reset your password.
                    </div>

                    <form onSubmit={handleForgotPassword}>

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="reset-btn"
                        >
                            Reset Password
                        </button>

                    </form>

                    {message && (
                        <div className="message">
                            {message}
                        </div>
                    )}

                    <a
                        href="/DoctorLogin"
                        className="back-login"
                    >
                        Back to Login
                    </a>

                </div>

            </div>
        </>
    );
}

export default ForgotPassword1;