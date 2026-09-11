import React, { useState } from "react";
import axios from "axios";

export default function PatientLogin() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");

    const [passwordError, setPasswordError] = useState("");

    const [loginError, setLoginError] = useState("");

    const [isLoading, setIsLoading] = useState(false);


    const validateLogin = () => {

        const newEmailError =
            email.trim() === ""
                ? "Email is required"
                : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                    ? "Please enter a valid email address."
                    : "";

        const newPasswordError =
            password.trim() === ""
                ? "Password is required"
                : "";


        setEmailError(newEmailError);

        setPasswordError(newPasswordError);

        setLoginError("");


        return newEmailError === "" && newPasswordError === "";
    };


    const handleSubmit = async (event) => {

        event.preventDefault();


        if (!validateLogin()) {
            return;
        }


        setIsLoading(true);

        setLoginError("");


        try {

            const response = await axios.get(
                "http://localhost:3001/patient"
            );


            const patients = response.data || [];


            const patient = patients.find(
                (p) =>
                    p.email &&
                    p.email.trim().toLowerCase() === email.trim().toLowerCase() &&
                    String(p.password).trim() === password.trim()
            );


            if (patient) {

                localStorage.setItem(
                    "patientEmail",
                    patient.email
                );


                localStorage.setItem(
                    "patientName",
                    patient.firstName || "Patient"
                );


                localStorage.setItem(
                    "auth",
                    "true"
                );


                window.location.href = "/PatientDashboard";

            }
            else {

                setLoginError(
                    "Invalid Email or Password"
                );

            }

        }
        catch (error) {

            console.log(error);

            setLoginError(
                "Server Error"
            );

        }
        finally {

            setIsLoading(false);

        }

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

                .login-link {
                    text-align: center;
                    margin-top: 15px;
                    color: #40545C;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
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

                `}

            </style>


            <div className="login-box">

                <a href="/" className="home-button">
                    Home
                </a>


                <h2 className="login-title">
                    Patient Login
                </h2>


                <hr />


                <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                >


                    <div className="mb-4">

                        <label className="login-label">

                            Email

                            <span style={{ color: "red" }}>
                                *
                            </span>

                        </label>


                        <input
                            type="text"
                            name="email"
                            className={`login-input ${
                                emailError ? "input-error" : ""
                            }`}
                            placeholder="Enter email address"
                            autoComplete="off"
                            value={email}
                            onChange={(e) => {

                                setEmail(e.target.value);

                                if (emailError) {
                                    setEmailError("");
                                }

                                if (loginError) {
                                    setLoginError("");
                                }

                            }}
                        />


                        {emailError !== "" && (

                            <div className="error">
                                {emailError}
                            </div>

                        )}

                    </div>



                    <div className="mb-4">

                        <label className="login-label">

                            Password

                            <span style={{ color: "red" }}>
                                *
                            </span>

                        </label>


                        <input
                            type="password"
                            name="password"
                            className={`login-input ${
                                passwordError ? "input-error" : ""
                            }`}
                            placeholder="Enter password"
                            autoComplete="new-password"
                            value={password}
                            onChange={(e) => {

                                setPassword(e.target.value);

                                if (passwordError) {
                                    setPasswordError("");
                                }

                                if (loginError) {
                                    setLoginError("");
                                }

                            }}
                        />


                        {passwordError !== "" && (

                            <div className="error">
                                {passwordError}
                            </div>

                        )}

                    </div>



                    {loginError !== "" && (

                        <div className="error">
                            {loginError}
                        </div>

                    )}



                    <div>

                        <a
                            href="/Forgotpass"
                            style={{
                                color: "#0546f8",
                                textDecoration: "none",
                                fontSize: "17px"
                            }}
                        >
                            Forgot Password?
                        </a>

                    </div>



                    <input
                        type="submit"
                        value={
                            isLoading
                                ? "Logging in..."
                                : "Login"
                        }
                        name="login"
                        className="login-button"
                        disabled={isLoading}
                    />



                    <div className="login-link">

                        {" Don't have an account????"}

                        <a
                            href="/PatientRegistration"
                            style={{
                                textDecoration: "none",
                                color: "#0546f8"
                            }}
                        >
                            Register Here
                        </a>

                    </div>


                </form>

            </div>

        </>

    );

}