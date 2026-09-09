import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function DoctorLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

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

            // Check doctor in JSON Server
            const res = await axios.get(
                `http://localhost:3001/doctor?email=${email}`
            );

            if (res.data.length > 0) {

                // Doctor already exists
                localStorage.setItem("doctorEmail", email);
                localStorage.setItem("doctorName", res.data[0].name || "Doctor");
                localStorage.setItem("auth", "true");

                navigate("./DoctorDashboard");

            }
            else {

                // New doctor - save in db.json
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

                navigate("./DoctorDashboard");
            }

        }
        catch (err) {

            console.log(err);
            alert("Server Error");

        }
};

    return (
        <div
            className="container d-flex justify-content-center align-items-center vh-100"
        >

            <div
                className="card shadow p-4"
                style={{ width: "400px" }}
            >

                <h3 className="text-center mb-4">
                    Doctor Login
                </h3>

                <form onSubmit={handleLogin}>

                    <div className="mb-3">

                        <label className="form-label">
                            Email
                        </label>

                        <input
                            type="text"
                            className={`form-control ${
                                errors.email ? "is-invalid" : ""
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
                            <div className="text-danger">
                                {errors.email}
                            </div>
                        )}

                    </div>

                    <div className="mb-3">

                        <label className="form-label">
                            Password
                        </label>

                        <input
                            type="password"
                            className={`form-control ${
                                errors.password ? "is-invalid" : ""
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
                            <div className="text-danger">
                                {errors.password}
                            </div>
                        )}

                    </div>

                    <div className="mb-3">

                        <a
                            href="/Forgotpass1"
                            style={{
                                color: "#0546f8",
                                textDecoration: "none"
                            }}
                        >
                            Forgot Password?
                        </a>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                    >
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}