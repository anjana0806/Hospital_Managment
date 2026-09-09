import React from "react";
const Index = () => {
  return (
    <>
      <style>{`
        * {
            box-sizing: border-box;
        }
        h3{
            color: black;
            font-weight: bold;
            font-size: 30px;
            margin-bottom: 12px;
        }
        body {
            margin: 0;
            min-height: 100vh;
            font-family: Arial, sans-serif;
            background: #E6F2DD;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .title {
            text-align: center;
            margin-bottom: 45px;
        }

        .title h1 {
            color: black;
            font-weight: bold;
            font-size: 55px;
            margin-bottom: 20px;
        }
        .title p {
        color: #777;
        font-size: 20px;
}
        .cards-container {
            display: flex;
            gap: 30px;
        }

        .option-card {
            background: #88BDA4;
            padding: 30px;
            text-align: center;
            width: 50%;
            min-height: 400px;
            border-radius: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: 0.4s;
        }

        .option-card:hover {
            transform: scale(1.02);
        }

        .card-image {
            width: 130px;
            height: 130px;
            object-fit: cover;
            border-radius: 50%;
            margin-bottom: 20px;
            border: 5px solid #E6F2DD;
        }

        .option-card h3 {
            color: #333;
            font-size: 30px;
            margin-bottom: 12px;
        }

        .option-card p {
            color: #666;
            font-size: 17px;
            margin-bottom: 25px;
        }

        .btn-custom {
            background: #E6F2DD;
            color: black;
            padding: 11px 35px;
            border-radius: 6px;
            display: inline-block;
            text-decoration: none;
            font-size: 17px;
            border: none;
        }

        .btn-custom:hover {
            background: white;
            color: black;
        }

        @media (max-width: 768px) {

            .main-container {
                padding: 20px;
            }

            .title h1 {
                font-size: 42px;
            }

            .title p {
                font-size: 17px;
            }

            .cards-container {
                flex-direction: column;
            }

            .option-card {
                width: 100%;
            }
        }
      `}</style>

      <div className="main-container">
        <div className="title">
          <h1>Sunshine Medicare</h1>
          <p>"Our priority is your health and peace of mind."</p>
        </div>

        <div className="cards-container">
          <div className="option-card">
            <img src="./images/doctormain.png" className="card-image" alt="Doctor" />

            <h3>Doctor Portal</h3>
            <p>
              Access your dashboard and
              <br />
              manage patient records easily.
            </p>
            <a href="DoctorLogin" className="btn-custom">
              Access Dashboard
            </a>
          </div>

          <div className="option-card">
            <img src="./images/patient.png" className="card-image" alt="Patient" />
            <h3>Patient Portal</h3>
            <p>Book & Tramp; track your appointments</p>
            <a href="PatientLogin" className="btn-custom">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;