import React, { useState } from "react";
import axios from "axios";

export default function DoctorLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });


    const handleLogin = async (e) => {

        e.preventDefault();

        let newErrors = {
            email: "",
            password: "",
        };

        if (!email.trim()) {
            newErrors.email = "Email is required";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if (newErrors.email || newErrors.password) {
            return;
        }

        try {

            const res = await axios.get(
                `http://localhost:3001/doctor?email=${email}`
            );

            if (res.data.length > 0) {

                localStorage.setItem("doctorEmail", email);

                localStorage.setItem(
                    "doctorName",
                    res.data[0].name || "Doctor"
                );

                localStorage.setItem("auth", "true");

                window.location.href = "/DoctorDashboard";
            }
            else {

                const saveDoctor = await axios.post(
                    "http://localhost:3001/doctor",
                    {
                        name: "Doctor",
                        email: email,
                        password: password
                    }
                );

                localStorage.setItem(
                    "doctorEmail",
                    saveDoctor.data.email
                );

                localStorage.setItem(
                    "doctorName",
                    saveDoctor.data.name || "Doctor"
                );

                localStorage.setItem("auth", "true");

                window.location.href = "/DoctorDashboard";
            }

        }
        catch (err) {

            console.log(err);
            alert("Server Error");

        }
    };


    const css = `
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
            position: relative;
        }

        .login-box {
            background-color: #88BDA4;
            width: 850px;
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

        .login-input.input-error {
            border: 2px solid #dc3545;
            background-color: #fff5f5;
        }

        .message-box {
            color: #842029;
            background-color: #f8d7da;
            border: 1px solid #f5c2c7;
            border-radius: 8px;
            padding: 12px 15px;
            margin-bottom: 20px;
            font-family: Arial, sans-serif;
            font-size: 16px;
        }

        .error {
            color: red;
            font-size: 16px;
            margin-top: 5px;
            font-family: Arial, sans-serif;
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

        .home-button {
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
    `;


    return (
        <>
            <style>{css}</style>

            <a href="/" className="home-button">
                Home
            </a>

            <div className="login-box">

                <div className="login-title">
                    Doctor Login
                </div>

                <form onSubmit={handleLogin}>

                    <div>
                        <div className="login-label">
                            Email
                        </div>

                        <input
                            type="text"
                            className={`login-input ${
                                errors.email ? "input-error" : ""
                            }`}
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);

                                setErrors({
                                    ...errors,
                                    email: ""
                                });
                            }}
                        />

                        {errors.email && (
                            <div className="error">
                                {errors.email}
                            </div>
                        )}
                    </div>


                    <div style={{ marginTop: "20px" }}>

                        <div className="login-label">
                            Password
                        </div>

                        <input
                            type="password"
                            className={`login-input ${
                                errors.password ? "input-error" : ""
                            }`}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);

                                setErrors({
                                    ...errors,
                                    password: ""
                                });
                            }}
                        />

                        {errors.password && (
                            <div className="error">
                                {errors.password}
                            </div>
                        )}
                    </div>


                    <div style={{ marginTop: "15px" }}>

                        <a
                            href="/ForgotPassword"
                            style={{
                                color: "#0546f8",
                                textDecoration: "none",
                                fontFamily: "Arial, sans-serif",
                                fontSize: "16px"
                            }}
                        >
                            Forgot Password?
                        </a>

                    </div>


                    <button
                        type="submit"
                        className="login-button"
                    >
                        Login
                    </button>

                </form>

            </div>
        </>
    );
}