import React, { useState } from "react";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldError, setOldError] = useState("");
  const [newError, setNewError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const handleChangePassword = (e) => {
    e.preventDefault();
    setOldError("");
    setNewError("");
    setConfirmError("");

    let valid = true;

    if (oldPassword === "") {
      setOldError("Please enter old password.");
      valid = false;
    }

    if (newPassword === "") {
      setNewError("Please enter new password.");
      valid = false;
    }

    if (confirmPassword === "") {
      setConfirmError("Please confirm password.");
      valid = false;
    }

    if (!valid) {
      return;
    }

    if (newPassword !== confirmPassword) {
      setNewError("New password and confirm password do not match.");
      setConfirmError("New password and confirm password do not match.");
      return;
    }

    if (oldPassword === newPassword) {
      setNewError("New password must be different from old password.");
      return;
    }

    alert("Password Changed Successfully!!!");
  };

  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Change Password</title>
          <style>
            {`
              * {
                box-sizing: border-box;
              }

              html,
              body {
                margin: 0;
                padding: 0;
                min-height: 100vh;
                font-family: Arial, sans-serif;
                background-color: #EAF4DF !important;
              }

              .password-page {
                margin-left: 230px;
                padding-top: 100px;
                padding-bottom: 100px;
                min-height: 100vh;
                background-color: #EAF4DF;
                display: flex;
                justify-content: center;
                align-items: flex-start;
              }

              .password-box {
                width: 660px;
                padding: 40px 43px;
                background-color: #8BC0AA;
                border-radius: 9px;
                box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
              }

              .password-box h1 {
                margin: 0;
                font-size: 42px;
                color: #173B4D;
                font-weight: 500;
              }

              .password-box hr {
                border: 0;
                border-top: 1px solid rgba(0, 0, 0, 0.25);
                margin: 20px 0 22px;
              }

              .password-box label {
                display: block;
                font-size: 21px;
                font-weight: bold;
                color: #173B4D;
                margin-bottom: 12px;
              }

              .required {
                color: red;
              }

              .password-box input {
                display: block;
                width: 100%;
                height: 67px;
                padding: 15px;
                border: none;
                border-radius: 10px;
                font-size: 17px;
                margin-bottom: 5px;
              }

              .password-box input::placeholder {
                color: #777;
              }

              .password-box input:focus {
                outline: none;
              }

              .error {
                color: red;
                font-size: 15px;
                font-weight: bold;
                margin-top: 5px;
                margin-bottom: 18px;
              }

              .password-box button {
                display: block;
                width: 100%;
                height: 64px;
                border: none;
                border-radius: 0;
                background-color: #EAF4DF;
                color: #111;
                font-size: 17px;
                font-weight: bold;
                margin-top: 30px;
                cursor: pointer;
              }

              .password-box button:hover {
                background-color: #DDECCF;
              }
            `}
          </style>
        </head>

        <body>
          <main className="password-page">
            <div className="password-box">
              <h1>Change Password</h1>
              <hr />

              <form method="post" autoComplete="off" onSubmit={handleChangePassword}>
                <label>
                  Old Password
                  <span className="required">*</span>
                </label>
                <input
                  type="password"
                  name="old_password"
                  placeholder="Enter old password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                {oldError !== "" && <div className="error">{oldError}</div>}

                <label>
                  New Password
                  <span className="required">*</span>
                </label>
                <input
                  type="password"
                  name="new_password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                {newError !== "" && <div className="error">{newError}</div>}

                <label>
                  Confirm Password
                  <span className="required">*</span>
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmError !== "" && <div className="error">{confirmError}</div>}

                <button type="submit">Change Password</button>
              </form>
            </div>
          </main>
        </body>
      </html>
    </>
  );
}
