import React, { useState } from "react";

function PatientRegistration() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [address, setAddress] = useState("");

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        phone: "",
        email: "",
        password: "",
        cpassword: "",
        address: "",
        register: ""
    });


    const handleRegister = async (e) => {

        e.preventDefault();

        let newErrors = {
            firstName: "",
            lastName: "",
            gender: "",
            phone: "",
            email: "",
            password: "",
            cpassword: "",
            address: "",
            register: ""
        };


        if (firstName === "") {
            newErrors.firstName = "First Name is required";
        }

        if (lastName === "") {
            newErrors.lastName = "Last Name is required";
        }

        if (gender === "") {
            newErrors.gender = "Gender is required";
        }

        if (phone === "") {
            newErrors.phone = "Phone Number is required";
        }
        else if (!/^[0-9]{10}$/.test(phone)) {
            newErrors.phone =
                "Please enter a valid 10 digit phone number";
        }

        if (email === "") {
            newErrors.email = "Email is required";
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email =
                "Please enter a valid email address";
        }

        if (address === "") {
            newErrors.address = "Address is required";
        }

        if (password === "") {
            newErrors.password = "Password is required";
        }

        if (cpassword === "") {
            newErrors.cpassword =
                "Confirm Password is required";
        }
        else if (password !== cpassword) {
            newErrors.cpassword =
                "Password and Confirm Password do not match";
        }


        setErrors(newErrors);


        if (
            newErrors.firstName ||
            newErrors.lastName ||
            newErrors.gender ||
            newErrors.phone ||
            newErrors.email ||
            newErrors.password ||
            newErrors.cpassword ||
            newErrors.address
        ) {
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


            if (!response.ok) {
                throw new Error("Registration Failed");
            }


            alert("Registration Successful!!!");

            window.location.href = "/PatientLogin";


        }
        catch (error) {

            console.log(error);

            setErrors({
                ...newErrors,
                register: "Registration Failed!!!"
            });

        }
    };


    const css = `

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
            color: #842029;
            background-color: #f8d7da;
            border: 1px solid #f5c2c7;
            border-radius: 8px;
            padding: 12px 15px;
            margin-bottom: 20px;
            font-family: Arial, sans-serif;
            font-size: 16px;
        }

    `;


    return (
        <>
            <style>{css}</style>

            <div className="main-content">

                <div className="row justify-content-center registration-row">

                    <div className="col-lg-8 col-md-10">

                        <div className="card p-4 registration-card">


                            {errors.register !== "" && (
                                <div className="message-box">
                                    {errors.register}
                                </div>
                            )}


                            <form
                                onSubmit={handleRegister}
                                noValidate
                                autoComplete="off"
                            >


                                <div className="section-title">
                                    Personal Information
                                </div>

                                <hr />


                                <div className="row">


                                    <div className="col-md-6 mb-3">

                                        <label>
                                            First Name
                                            <span className="required">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="text"
                                            className={`form-control ${
                                                errors.firstName
                                                    ? "input-error"
                                                    : ""
                                            }`}
                                            placeholder="Enter First name"
                                            autoComplete="off"
                                            value={firstName}
                                            onChange={(e) => {
                                                setFirstName(
                                                    e.target.value
                                                );

                                                setErrors({
                                                    ...errors,
                                                    firstName: ""
                                                });
                                            }}
                                        />

                                        {errors.firstName && (
                                            <div className="error">
                                                {errors.firstName}
                                            </div>
                                        )}

                                    </div>



                                    <div className="col-md-6 mb-3">

                                        <label>
                                            Last Name
                                            <span className="required">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="text"
                                            className={`form-control ${
                                                errors.lastName
                                                    ? "input-error"
                                                    : ""
                                            }`}
                                            placeholder="Enter Last name"
                                            autoComplete="off"
                                            value={lastName}
                                            onChange={(e) => {
                                                setLastName(
                                                    e.target.value
                                                );

                                                setErrors({
                                                    ...errors,
                                                    lastName: ""
                                                });
                                            }}
                                        />

                                        {errors.lastName && (
                                            <div className="error">
                                                {errors.lastName}
                                            </div>
                                        )}

                                    </div>



                                    <div className="col-md-6 mb-3">

                                        <label>
                                            Phone Number
                                            <span className="required">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            className={`form-control ${
                                                errors.phone
                                                    ? "input-error"
                                                    : ""
                                            }`}
                                            placeholder="Enter phone number"
                                            maxLength="10"
                                            autoComplete="off"
                                            value={phone}
                                            onChange={(e) => {
                                                setPhone(
                                                    e.target.value
                                                );

                                                setErrors({
                                                    ...errors,
                                                    phone: ""
                                                });
                                            }}
                                        />

                                        {errors.phone && (
                                            <div className="error">
                                                {errors.phone}
                                            </div>
                                        )}

                                    </div>



                                    <div className="col-md-6 mb-3">

                                        <label>
                                            Email Address
                                            <span className="required">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="text"
                                            name="email"
                                            className={`form-control ${
                                                errors.email
                                                    ? "input-error"
                                                    : ""
                                            }`}
                                            placeholder="Enter email address"
                                            autoComplete="off"
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(
                                                    e.target.value
                                                );

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



                                    <div className="col-md-6 mb-3">

                                        <label>
                                            Gender
                                            <span className="required">
                                                *
                                            </span>
                                        </label>


                                        <div className="gender-options">


                                            <div className="form-check">

                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    value="Male"
                                                    checked={
                                                        gender === "Male"
                                                    }
                                                    onChange={(e) => {
                                                        setGender(
                                                            e.target.value
                                                        );

                                                        setErrors({
                                                            ...errors,
                                                            gender: ""
                                                        });
                                                    }}
                                                />

                                                <label className="form-check-label">
                                                    Male
                                                </label>

                                            </div>



                                            <div className="form-check">

                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    value="Female"
                                                    checked={
                                                        gender === "Female"
                                                    }
                                                    onChange={(e) => {
                                                        setGender(
                                                            e.target.value
                                                        );

                                                        setErrors({
                                                            ...errors,
                                                            gender: ""
                                                        });
                                                    }}
                                                />

                                                <label className="form-check-label">
                                                    Female
                                                </label>

                                            </div>



                                            <div className="form-check">

                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    value="Other"
                                                    checked={
                                                        gender === "Other"
                                                    }
                                                    onChange={(e) => {
                                                        setGender(
                                                            e.target.value
                                                        );

                                                        setErrors({
                                                            ...errors,
                                                            gender: ""
                                                        });
                                                    }}
                                                />

                                                <label className="form-check-label">
                                                    Other
                                                </label>

                                            </div>


                                        </div>


                                        {errors.gender && (
                                            <div className="error">
                                                {errors.gender}
                                            </div>
                                        )}

                                    </div>



                                    <div className="col-md-12 mb-4">

                                        <label>
                                            Address
                                            <span className="required">
                                                *
                                            </span>
                                        </label>

                                        <textarea
                                            name="address"
                                            className={`form-control ${
                                                errors.address
                                                    ? "input-error"
                                                    : ""
                                            }`}
                                            placeholder="Enter full address"
                                            autoComplete="off"
                                            value={address}
                                            onChange={(e) => {
                                                setAddress(
                                                    e.target.value
                                                );

                                                setErrors({
                                                    ...errors,
                                                    address: ""
                                                });
                                            }}
                                        ></textarea>


                                        {errors.address && (
                                            <div className="error">
                                                {errors.address}
                                            </div>
                                        )}

                                    </div>

                                </div>



                                <div className="row">


                                    <div className="col-md-6 mb-3">

                                        <label>
                                            Password
                                            <span className="required">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="password"
                                            name="password"
                                            className={`form-control ${
                                                errors.password
                                                    ? "input-error"
                                                    : ""
                                            }`}
                                            placeholder="Create password"
                                            autoComplete="new-password"
                                            value={password}
                                            onChange={(e) => {
                                                setPassword(
                                                    e.target.value
                                                );

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



                                    <div className="col-md-6 mb-3">

                                        <label>
                                            Confirm Password
                                            <span className="required">
                                                *
                                            </span>
                                        </label>

                                        <input
                                            type="password"
                                            name="cpassword"
                                            className={`form-control ${
                                                errors.cpassword
                                                    ? "input-error"
                                                    : ""
                                            }`}
                                            placeholder="Confirm password"
                                            autoComplete="new-password"
                                            value={cpassword}
                                            onChange={(e) => {
                                                setCpassword(
                                                    e.target.value
                                                );

                                                setErrors({
                                                    ...errors,
                                                    cpassword: ""
                                                });
                                            }}
                                        />

                                        {errors.cpassword && (
                                            <div className="error">
                                                {errors.cpassword}
                                            </div>
                                        )}

                                    </div>



                                    <div className="text-center">

                                        <button
                                            type="submit"
                                            className="btn-register"
                                            style={{
                                                textDecoration: "none"
                                            }}
                                        >
                                            Register
                                        </button>


                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary btn-cancel ms-2"
                                            onClick={() => {

                                                setFirstName("");
                                                setLastName("");
                                                setGender("");
                                                setPhone("");
                                                setEmail("");
                                                setPassword("");
                                                setCpassword("");
                                                setAddress("");

                                                setErrors({
                                                    firstName: "",
                                                    lastName: "",
                                                    gender: "",
                                                    phone: "",
                                                    email: "",
                                                    password: "",
                                                    cpassword: "",
                                                    address: "",
                                                    register: ""
                                                });

                                            }}
                                        >
                                            Cancel
                                        </button>

                                    </div>



                                    <div className="login-link">

                                        Already have an account?

                                        <a
                                            href="/PatientLogin"
                                            style={{
                                                marginLeft: "5px"
                                            }}
                                        >
                                            Login Here
                                        </a>

                                    </div>


                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default PatientRegistration;