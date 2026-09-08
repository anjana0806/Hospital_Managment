import React, { useState } from "react";
function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Please enter Email and Password");
            return;
        }
        alert("Login button clicked");
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

                .admin-login-page {
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 30px;
                }

                .admin-login-box {
                    width: 100%;
                    max-width: 700px;
                    background-color: #88BDA4;
                    padding: 30px;
                    border-radius: 10px;
                }

                .admin-login-title {
                    text-align: center;
                    font-size: 30px;
                    font-weight: bold;
                    color: #173B4D;
                    margin-bottom: 30px;
                }

                .form-group {
                    margin-bottom: 20px;
                }

                .form-group label {
                    display: block;
                    font-size: 16px;
                    font-weight: bold;
                    color: #173B4D;
                    margin-bottom: 8px;
                }

                .form-group input {
                    width: 100%;
                    height: 50px;
                    padding: 10px 15px;
                    border: none;
                    border-radius: 7px;
                    font-size: 16px;
                    outline: none;
                }

                .login-button {
                    width: 100%;
                    height: 45px;
                    border: none;
                    border-radius: 7px;
                    background-color: #E6F2DD;
                    color: #173B4D;
                    font-size: 17px;
                    font-weight: bold;
                    cursor: pointer;
                }

                .login-button:hover {
                    background-color: white;
                }

                .login-links {
                    text-align: center;
                    margin-top: 20px;
                }

                .login-links a {
                    color: #173B4D;
                    text-decoration: none;
                    font-size: 15px;
                }

                .login-links a:hover {
                    text-decoration: underline;
                }

                .register-text {
                    margin-top: 12px;
                }
            `}</style>

            <div className="admin-login-page">

                <div className="admin-login-box">

                    <div className="admin-login-title">
                        Admin Login
                    </div>

                    <form onSubmit={handleLogin}>

                        <div className="form-group">

                            <label>Email</label>

                            <input
                                type="email"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                        </div>

                        <div className="form-group">

                            <label>Password</label>

                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                        </div>

                        <button
                            type="submit"
                            className="login-button"
                        >
                            Login
                        </button>

                    </form>

                    <div className="login-links">

                        <a href="/forgot-password">
                            Forgot Password?
                        </a>

                        <div className="register-text">

                            <a href="/patient-registration">
                                Don't have an account? Register
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}

export default AdminLogin;