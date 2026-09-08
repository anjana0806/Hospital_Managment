import React, { useState } from "react";
function PatientRegistration() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
   const handleRegister = async (e) => { e.preventDefault();
    if (
        firstName === "" ||
        lastName === "" ||
        gender === "" ||
        phone === "" ||
        email === "" ||
        address === "" ||
        password === "" ||
        confirmPassword === ""
    )
    {
        alert("Please fill all the fields");
        return;
    }
    if (password !== confirmPassword) {
        alert("Password and Confirm Password do not match");
        return;
    }
    const patient = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        phone: phone,
        email: email,
        password: password,
        address: address
    };
    try {
        const response = await fetch("http://localhost:3001/patient", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patient)
        });
        if (response.ok) {
            alert("Patient Registered Successfully!!!");
            setFirstName("");
            setLastName("");
            setGender("");
            setPhone("");
            setEmail("");
            setAddress("");
            setPassword("");
            setConfirmPassword("");
        } else {
            alert("Registration Failed!!!");
        }
    } catch (error) {
        console.log(error);
        alert("Server is not running!!!");
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
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background-color: #E6F2DD;
                }

                .registration-page {
                    min-height: 100vh;
                    padding: 40px 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow:hidden;
                }

                .registration-box {
                    width: 100%;
                    max-width: 850px;
                    background-color: #88BDA4;
                    padding: 30px;
                    border-radius: 10px;
                }

                .registration-title {
                    text-align: center;
                    font-size: 30px;
                    font-weight: bold;
                    color: #173B4D;
                    margin-bottom: 30px;
                }

                .form-row {
                    display: flex;
                    gap: 20px;
                }

                .form-group {
                    width: 100%;
                    margin-bottom: 18px;
                }

                .form-group label {
                    display: block;
                    font-size: 16px;
                    font-weight: bold;
                    color: #173B4D;
                    margin-bottom: 8px;
                }

                .required {
                    color: red;
                }

                .form-group input,
                .form-group textarea {
                    width: 100%;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 7px;
                    font-size: 16px;
                    outline: none;
                    font-family: Arial, sans-serif;
                }

                .form-group input {
                    height: 48px;
                }

                .form-group textarea {
                    height: 90px;
                    resize: none;
                }

                .gender-box {
                    display: flex;
                    gap: 25px;
                    align-items: center;
                    height: 48px;
                }

                .gender-option {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    color: #173B4D;
                    font-size: 16px;
                }

                .gender-option input {
                    width: auto;
                    height: auto;
                }

                .button-area {
                    text-align: center;
                    margin-top: 20px;
                }

                .register-button,
                .cancel-button {
                    padding: 11px 35px;
                    border: none;
                    border-radius: 7px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                }

                .register-button {
                    background-color: #E6F2DD;
                    color: #173B4D;
                }

                .cancel-button {
                    background-color: white;
                    color: #173B4D;
                    margin-left: 10px;
                }

                .register-button:hover,
                .cancel-button:hover {
                    background-color: #ffffff;
                }

                .login-text {
                    text-align: center;
                    margin-top: 20px;
                }

                .login-text a {
                    color: #173B4D;
                    text-decoration: none;
                    font-weight: bold;
                }

                .login-text a:hover {
                    text-decoration: underline;
                }

                @media (max-width: 650px) {

                    .form-row {
                        flex-direction: column;
                        gap: 0;
                    }

                    .registration-box {
                        padding: 20px;
                    }

                    .gender-box {
                        gap: 15px;
                    }
                }
            `}</style>

            <div className="registration-page">

                <div className="registration-box">

                    <div className="registration-title">
                        Patient Registration
                    </div>

                    <form onSubmit={handleRegister}>

                        <div className="form-row">

                            <div className="form-group">
                                <label>
                                    First Name <span className="required">*</span>
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    Last Name <span className="required">*</span>
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                        </div>

                        <div className="form-row">

                            <div className="form-group">
                                <label>
                                    Phone <span className="required">*</span>
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    Email <span className="required">*</span>
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                        </div>

                        <div className="form-group">

                            <label>
                                Gender <span className="required">*</span>
                            </label>

                            <div className="gender-box">

                                <label className="gender-option">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={gender === "Male"}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    Male
                                </label>

                                <label className="gender-option">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={gender === "Female"}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    Female
                                </label>

                                <label className="gender-option">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                        checked={gender === "Other"}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    Other
                                </label>

                            </div>

                        </div>

                        <div className="form-group">

                            <label>
                                Address <span className="required">*</span>
                            </label>

                            <textarea
                                placeholder="Enter Address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            ></textarea>

                        </div>

                        <div className="form-row">

                            <div className="form-group">

                                <label>
                                    Password <span className="required">*</span>
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                            </div>

                            <div className="form-group">

                                <label>
                                    Confirm Password <span className="required">*</span>
                                </label>

                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />

                            </div>

                        </div>

                        <div className="button-area">

                            <button
                                type="submit"
                                className="register-button"
                            >
                                Register
                            </button>

                            <button
                                type="button"
                                className="cancel-button"
                                onClick={() => {
                                    setFirstName("");
                                    setLastName("");
                                    setGender("");
                                    setPhone("");
                                    setEmail("");
                                    setAddress("");
                                    setPassword("");
                                    setConfirmPassword("");
                                }}
                            >
                                Cancel
                            </button>

                        </div>

                    </form>

                    <div className="login-text">

                        Already have an account?{" "}

                        <a href="/PatientLogin">
                            Login
                        </a>

                    </div>

                </div>

            </div>
        </>
    );
}

export default PatientRegistration;