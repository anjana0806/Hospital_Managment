import React, { useEffect, useState } from "react";

const ViewAppointment = () => {

  const [appointments, setAppointments] = useState([]);

  // Get all appointments
  useEffect(() => {

    fetch("http://localhost:3001/appointment")
      .then((response) => response.json())
      .then((data) => {
        setAppointments(data);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  // Cancel Appointment
  const handleCancel = async (aid) => {

    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );

    if (!confirmCancel) {
      return;
    }

    try {

      // Get appointment details
      const response = await fetch(
        `http://localhost:3001/appointment/${aid}`
      );

      const appointment = await response.json();


      // Create notification message
      const message =
        appointment.patientname + 
        appointment.doctor +
        " on " +
        appointment.appointment_date +
        " has been cancelled by the doctor.";


      // Save notification
const notificationResponse = await fetch(
    "http://localhost:3001/notification",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pemail: appointment.pemail,
            message: message,
            status: "Unread"
        }),
    }
);

if (!notificationResponse.ok) {
    throw new Error("Notification Failed!!!");
}


      // Delete appointment
      const deleteResponse = await fetch(
        `http://localhost:3001/appointment/${aid}`,
        {
          method: "DELETE",
        }
      );


      if (deleteResponse.ok) {

        // alert("Appointment Cancelled Successfully");

        // Remove appointment from table
        setAppointments(
          appointments.filter(
            (item) => item.id !== aid
          )
        );

      } else {

        alert("Appointment Cancellation Failed!!!");

      }

    } catch (error) {

      console.log(error);
      alert("Appointment Cancellation Failed!!!");

    }

  };


  const css = `
    html,
    body {
        margin: 0;
        min-height: 100%;
        background-color: #E6F2DD;
    }

    .appointment-content {
        position: fixed;
        top: 60px;
        left: 230px;
        right: 0;
        bottom: 40px;
        height: auto;
        overflow-y: auto;
        overflow-x: auto;
        background-color: #eaf4df;
    }

    .appointment-page {
        padding: 25px;
        padding-bottom: 100px;
    }

    .appointment-card {
        background: white;
        border-radius: 12px;
        padding: 25px;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.12);
    }

    .appointment-title {
        background-color: #88BDA4;
        color: #173B4D;
        padding: 15px 20px;
        border-radius: 8px;
        font-size: 21px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .appointment-table {
        width: 100%;
        border-collapse: collapse;
    }

    .appointment-table th {
        background-color: #173B4D;
        color: white;
        padding: 13px;
        text-align: left;
        white-space: nowrap;
    }

    .appointment-table td {
        padding: 12px;
        border-bottom: 1px solid #d9e5e1;
        color: #29434E;
        vertical-align: middle;
    }

    .appointment-table tbody tr:hover {
        background-color: #f0f8f5;
    }

    .appointment-table tbody tr:nth-child(even) {
        background-color: #f8fbfa;
    }

    .remove-btn {
        text-decoration: none;
        background-color: #dc3545;
        color: white;
        padding: 6px 11px;
        border-radius: 5px;
        font-size: 13px;
        font-weight: bold;
        border: none;
    }

    .remove-btn:hover {
        background-color: #b02a37;
        color: white;
    }

    .appointment-container {
        overflow-x: auto;
    }

    .no-appointment {
        text-align: center;
        padding: 30px;
        color: #607D86;
        font-size: 18px;
    }

    .status-badge {
        background-color: #e6f2dd;
        color: #315c45;
        padding: 6px 12px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
    }

    .cancelled-badge {
        background-color: #f8d7da;
        color: #842029;
        padding: 6px 12px;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
    }

    .cancel-btn {
        background-color: #dc3545;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: 12px;
        font-weight: bold;
        margin-left: 8px;
    }

    .cancel-btn:hover {
        background-color: #b02a37;
    }
  `;


  return (
    <>
      <style>{css}</style>


      <main className="appointment-content">

        <div className="appointment-page">

          <div className="appointment-card">

            <div className="appointment-title">
              Appointment Records
            </div>


            <div className="appointment-container">

              <table className="appointment-table">

                <thead>
                  <tr>
                    <th>Actions</th>
                    <th>Patient Name</th>
                    <th>Department</th>
                    <th>Appointment Date</th>
                    <th>Appointment Time</th>
                    <th>Problem</th>
                  </tr>
                </thead>


                <tbody>

                  {appointments.length > 0 ? (

                    appointments.map((appointment) => (

                      <tr key={appointment.id}>

                        <td>

                          <button
                            type="button"
                            className="cancel-btn"
                            onClick={() =>
                              handleCancel(appointment.id)
                            }
                          >
                            Cancel
                          </button>

                        </td>


                        <td>
                          {appointment.patientname}
                        </td>


                        <td>
                          {appointment.department}
                        </td>


                        <td>
                          {appointment.appointment_date}
                        </td>


                        <td>
                          {appointment.appointment_time}
                        </td>


                        <td>
                          {appointment.problem}
                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td
                        colSpan="6"
                        className="no-appointment"
                      >
                        No Appointments Found
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </main>

    </>
  );
};


export default ViewAppointment;