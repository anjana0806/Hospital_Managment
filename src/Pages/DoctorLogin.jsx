import React, { useState } from "react";
import axios from "axios";
const DoctorLogin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        password: "",
        login: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "",
            login: "",
        }));
    };

    const validateLogin = () => {
        const nextErrors = { email: "", password: "", login: "" };

        const emailValue = formData.email.trim();

        if (!emailValue) {
            nextErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            nextErrors.email = "Please enter a valid email address.";
        }

        if (!formData.password.trim()) {
            nextErrors.password = "Password is required";
        }

        setErrors(nextErrors);
        return nextErrors.email === "" && nextErrors.password === "";
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateLogin()) {
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/doctor");
            const doctors = await response.json();

            const matchedDoctor = doctors.find(
                (doctor) =>
                    doctor.email &&
                    doctor.email.toLowerCase() === formData.email.trim().toLowerCase() &&
                    String(doctor.password) === String(formData.password)
            );

            if (matchedDoctor) {
                localStorage.setItem("doctorEmail", matchedDoctor.email);
                localStorage.setItem("doctorName", matchedDoctor.name || "Doctor");
                window.location.href = "/DoctorDashboard";
                return;
            }

            const saveResponse = await fetch("http://localhost:3001/doctor", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "Doctor",
                    email: formData.email.trim(),
                    password: formData.password,
                }),
            });

            if (!saveResponse.ok) {
                throw new Error("Unable to save doctor details");
            }

            const savedDoctor = await saveResponse.json();

            localStorage.setItem("doctorEmail", savedDoctor.email);
            localStorage.setItem("doctorName", savedDoctor.name || "Doctor");
            window.location.href = "/DoctorDashboard";
        } catch (error) {
            setErrors({
                email: "",
                password: "",
                login: "Server is not running. Please start JSON server.",
            });
            console.error(error);
        }
    };

    return (
        <>
            <style>{`
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
            `}</style>

            <div className="login-box">
                <a href="/" className="home-button">Home</a>
                <h2 className="login-title">Doctor Login</h2>
                <hr />

                <form onSubmit={handleSubmit} autoComplete="off">
                    <div className="mb-4">
                        <label className="login-label">
                            Email <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`login-input ${errors.email ? "input-error" : ""}`}
                            placeholder="Enter email address"
                            autoComplete="off"
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>

                    <div className="mb-4">
                        <label className="login-label">
                            Password <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`login-input ${errors.password ? "input-error" : ""}`}
                            placeholder="Enter password"
                            autoComplete="new-password"
                        />
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>

                    {errors.login && <div className="error">{errors.login}</div>}

                    <div>
                        <a href="/Forgotpass1" style={{ color: "#0546f8", textDecoration: "none", fontSize: "17px" }}>
                            Forgot Password?
                        </a>
                    </div>

                    <input type="submit" value="Login" name="login" className="login-button" />
                </form>
            </div>
        </>
    );
};

export default DoctorLogin;
