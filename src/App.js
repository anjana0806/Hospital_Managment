import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Index from "./Pages/Index";
import PatientLogin from "./Pages/PatientLogin";
import PatientRegistration from "./Pages/PatientRegistration";
import PatientDashboard from "./Pages/PatientDashboard";
import Appointment from "./Pages/Appointment";
import Profile from "./Pages/Profile";
import DoctorLogin from "./Pages/DoctorLogin";
import DoctorDashboard from "./Pages/DoctorDashboard";
import ViewAppointment from "./Pages/ViewAppointment";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import ForgotPassword1 from "./Pages/ForgotPassword1";
import ResetPassword1 from "./Pages/ResetPassword1";
import Notification from "./Pages/Notification";

import Header from "./Component/Header";
import Header1 from "./Component/Header1";
import Sidebar from "./Component/Sidebar";
import Sidebar1 from "./Component/Sidebar1";
import Footer from "./Component/Footer";


function App() {
    const path = window.location.pathname;
    if (path === "/" || path === "/Index") {
        return <Index />;
    }


    if (path === "/PatientLogin") {
        return <PatientLogin />;
    }

    if (path === "/PatientRegistration") {
        return <PatientRegistration />;
    }

    if (path === "/PatientDashboard") {
        return (
            <>
                <Header />
                <Sidebar />
                <PatientDashboard />
                <Footer />
            </>
        );
    }

    if (path === "/Appointment") {
        return (
            <>
                <Header />
                <Sidebar />
                <Appointment />
                <Footer />
            </>
        );
    }

    if (path === "/Profile") {
        return (
            <>
                <Header />
                <Sidebar />
                <Profile />
                <Footer />
            </>
        );
    }

    if (path === "/DoctorLogin") {
        return <DoctorLogin />;

    }

    if (path === "/DoctorDashboard") {
        return (
            <>
                <Header1 />
                <Sidebar1 />
                <DoctorDashboard />
                <Footer />
            </>
        );
    }

    if (path === "/ViewAppointment") {
        return (
            <>
                <Header1 />
                <Sidebar1 />
                <ViewAppointment />
                <Footer />
            </>
        );
    }
    if (path === "/ForgotPassword") {
        return <ForgotPassword />;
    }

    if (path === "/ResetPassword")  { 
        return <ResetPassword />; 

    }
    if (path === "/ForgotPassword1") {
        return <ForgotPassword1 />;
    }

    if (path === "/ResetPassword1")  { 
        return <ResetPassword1 />; 

    }
    if (path === "/Notification")  { 
        return <Notification />; 

    }

    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
            <h2>Page Not Found</h2>
        </div>
    );
}
export default App;