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

    const handleRegister = async (e) => {

        e.preventDefault();

        if (
            firstName === "" ||
            lastName === "" ||
            gender === "" ||
            phone === "" ||
            email === "" ||
            address === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
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
            address: address,
            status: "Registered",
            createdAt: new Date().toISOString()
        };

        try {

            const response = await fetch(
                "http://localhost:3001/patient",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(patient)
                }
            );

            if (response.ok) {

                const savedPatient = await response.json();

                const patients = JSON.parse(
                    localStorage.getItem("patients") || "[]"
                );

                localStorage.setItem(
                    "patients",
                    JSON.stringify([
                        ...patients,
                        savedPatient
                    ])
                );

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
                .hospital-title {
                    font-size: 20px;
                    font-weight: bold;
                }

                .hospital-subtitle {
                    font-size: 16px;
                }

                .registration-title {
                    font-size: 30px;
                    font-weight: bold;
                    color: #173B4D;
                }

                .section-title {
                    color: #173B4D;
                    font-weight: bold;
                    font-size: 22px;
                }

                label {
                    font-weight: 600;
                    color: #29434E;
                }

                .required {
                    color: #D9534F;
                }

                .form-control,
                .form-select {
                    height: 48px;
                    border-radius: 8px;
                    border: 1px solid #C9DDE3;
                }

                .form-control:focus,
                .form-select:focus {
                    outline: none;
                    box-shadow: none;
                    border-color: #C9DDE3;
                }

                input:-webkit-autofill {
                    -webkit-box-shadow: 0 0 0 1000px white inset;
                    box-shadow: 0 0 0 1000px white inset;
                }

                .btn-register {
                    background: #E6F2DD;
                    color: black;
                    padding: 12px 35px;
                    font-size: 17px;
                    border-radius: 8px;
                    border: none;
                }

                .login-link {
                    text-align: center;
                    margin-top: 15px;
                    color: #40545C;
                }

                .gender-options {
                    display: flex;
                    gap: 25px;
                    align-items: center;
                    margin-top: 10px;
                }

                .gender-options .form-check {
                    display: flex;
                    align-items: center;
                    gap: 7px;
                }

                .gender-options .form-check-input {
                    width: 18px;
                    height: 18px;
                    margin: 0;
                }

                .gender-options .form-check-label {
                    margin: 0;
                    font-weight: normal;
                    color: #29434E;
                }

                .main-content {
                    background-color: #E6F2DD;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .registration-row {
                    width: 100%;
                    margin: 0;
                }

                .registration-card {
                    background-color: #88BDA4;
                }

                .error {
                    color: red;
                    font-size: 15px;
                    margin-top: 5px;
                    font-family: Arial, sans-serif;
                }

                .message-box {
                    border-radius: 8px;
                    padding: 12px 15px;
                    margin-bottom: 20px;
                    font-family: Arial, sans-serif;
                    font-size: 16px;
                }
            `}</style>

            <form onSubmit={handleRegister}>

                <input
                    type="text"
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                />
                Male

                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                />
                Female

                <input
                    type="radio"
                    name="gender"
                    value="Other"
                    checked={gender === "Other"}
                    onChange={(e) => setGender(e.target.value)}
                />
                Other

                <textarea
                    placeholder="Enter Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button type="submit">
                    Register
                </button>

            </form>
        </>
    );
}

export default PatientRegistration;