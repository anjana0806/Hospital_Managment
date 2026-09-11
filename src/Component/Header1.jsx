import React from "react";

const Header1 = ({ doctorName = "Doctor" }) => {
  return (
    <>
      <style>{`
        .top-header {
            height: 60px;
            color: white;
            position: fixed;
            top: 0;
            padding-left: 25px;
            left: 0;
            display: flex;
            align-items: center;
            width: 100%;
            font-size: 25px;
            background-color: #659287;
            z-index: 1000;
        }

        .logo {
            font-family: Georgia, serif;
            font-size: 27px;
            font-weight: bold;
            letter-spacing: 1px;
        }

        .main-content {
            margin-left: 230px;
            margin-top: 70px;
            padding: 30px;
            padding-left: 35px;
            width: 1310px;
            height: 750px;
            background-color: #E6F2DD;
            box-sizing: border-box;
            position: fixed;
            bottom: 40px;
        }

        .login-link {
            margin-left: auto;
            margin-right: 30px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .login-link a {
            color: white;
            text-decoration: none;
            font-size: 20px;
            padding: 8px 18px;
            border-radius: 5px;
            background-color: #88BDA4;
        }

        .login-link h2 {
            margin: 0;
            color: black;
            font-family: Arial, sans-serif;
            font-size: 18px;
            font-style: normal;
        }
      `}</style>

      <header className="top-header">
        <div className="logo">Sunshine Medicare</div>

        <div className="login-link">
          <h2>Welcome Dr. {doctorName}!!!</h2>

          <a href="/Index">Home</a>
          <a href="/DoctorLogin">Logout</a>
        </div>
      </header>
    </>
  );
};

export default Header1;