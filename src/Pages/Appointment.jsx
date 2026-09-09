import React, { useState } from "react";

const createAppointment = async (appointmentData) => {
  const response = await fetch("/api/appointment", {
    method: "POST",                                          
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(appointmentData),
  });

  if (!response.ok) {
    throw new Error("Booking Failed!!!");
  }

  return response.json();
};

const Appointment = () => {
  const [formData, setFormData] = useState({
    patient_name: "",
    phone: "",
    department: "",
    doctor: "",
    appointment_date: "",
    appointment_time: "",
    problem: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await createAppointment(formData);
      alert("Appointment Booked Successfully");
      setFormData({
        patient_name: "",
        phone: "",
        department: "",
        doctor: "",
        appointment_date: "",
        appointment_time: "",
        problem: "",
      });
    } catch (error) {
      alert(error.message || "Booking Failed!!!");
    } finally {
      setIsLoading(false);
    }
  };

  const css = `
    body {
      background: #EAF6F8;
      font-family: Arial, sans-serif;
      font-size: 16px;
    }

    .section-title {
      margin-top: 10px;
      color: #173B4D;
      font-weight: bold;
      font-size: 22px;
    }

    label {
      font-weight: 600;
      margin-bottom: 7px;
      color: #29434E;
    }

    .required {
      color: #D9534F;
    }

    .form-control,
    .form-select {
      height: 50px;
      border-radius: 8px;
      border: 1px solid #C9DDE3;
    }

    textarea.form-control {
      height: 100px;
    }

    .btn-BookAppointment {
      background: #E6F2DD;
      color: black;
      padding: 12px 35px;
      font-size: 17px;
      border-radius: 8px;
      border: none;
    }

    .btn-BookAppointment:hover {
      background: #d3e8c8;
    }

    .success-message {
      margin-bottom: 20px;
      font-weight: 600;
    }
  `;

  return (
    <>
      <style>{css}</style>
    <div className="main-content">
      <div className="row justify-content-center" style={{ marginTop: "50px" }}>
        <div className="col-lg-8 col-md-10">
          <div className="card p-4 shadow-sm" style={{ backgroundColor: "#88BDA4" }}>
            <form onSubmit={handleSubmit}>
              <div className="section-title">Appointment Form</div>
              <hr />

              <div className="row">
                <div className="col-md-12 mb-3">
                  <label>
                    Patient Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="patient_name"
                    className="form-control"
                    placeholder="Enter Your name"
                    value={formData.patient_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Enter phone number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>
                    Department <span className="required">*</span>
                  </label>
                  <select
                    name="department"
                    className="form-select"
                    value={formData.department}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Dermatology">Dermatology</option>
                    <option value="Orthopedics">Orthopedics</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Gynecology">Gynecology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="General Medicine">General Medicine</option>
                    <option value="ENT">ENT</option>
                    <option value="Ophthalmology">Ophthalmology</option>
                    <option value="Dentistry">Dentistry</option>
                    <option value="Psychiatry">Psychiatry</option>
                    <option value="General Surgery">General Surgery</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label>
                    Doctor <span className="required">*</span>
                  </label>
                  <select
                    name="doctor"
                    className="form-select"
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Doctor</option>
                    <option value="Dr. Rahul Patel">Dr. Rahul Patel</option>
                    <option value="Dr. Priya Shah">Dr. Arnav Jariwala</option>
                    <option value="Dr. Amit Mehta">Dr. Amit Mehta</option>
                    <option value="Dr. Neha Joshi">Dr. Neha Joshi</option>
                    <option value="Dr. Ananya Reddy">Dr. Nilam Shah</option>
                    <option value="Dr. Neha Joshi">Dr.Priya Sharma</option>
                    <option value="Dr. Neha Joshi">Dr. Sanjay Kumar</option>
                    <option value="Dr. Neha Joshi">Dr. Amita Desai</option>
                    <option value="Dr. Neha Joshi">Dr. Rajesh Gupta</option>
                    <option value="Dr. Neha Joshi">Dr. Sunita Mehta</option>
                  </select>
                </div>

                <div className="col-md-6 mb-3">
                  <label>
                    Appointment Date <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    name="appointment_date"
                    className="form-control"
                    value={formData.appointment_date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>
                    Appointment Time <span className="required">*</span>
                  </label>
                  <input
                    type="time"
                    name="appointment_time"
                    className="form-control"
                    value={formData.appointment_time}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <label>
                    Symptoms / Problem <span className="required">*</span>
                  </label>
                  <textarea
                    name="problem"
                    className="form-control"
                    placeholder="Describe your symptoms"
                    value={formData.problem}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="text-center">
                  <input
                    type="submit"
                    name="Book"
                    value={isLoading ? "Booking..." : "Book Appointment"}
                    className="btn-BookAppointment"
                    disabled={isLoading}
                  />
                  <button
                    type="reset"
                    className="btn btn-outline-secondary ms-2"
                    onClick={() =>
                      setFormData({
                        patient_name: "",
                        phone: "",
                        department: "",
                        doctor: "",
                        appointment_date: "",
                        appointment_time: "",
                        problem: "",
                      })
                    }
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Appointment;