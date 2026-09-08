import React from "react";
import Footer from "./Footer";

function Sidebar1() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
            />

            <style>{`
                .sidebar {
                    width: 230px;
                    height: 1000px;
                    position: fixed;
                    left: 0;
                    top: 60px;
                    background-color: #B1D3B9;
                    padding-top: 20px;
                }

                .sidebar-title {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 15px;
                }

                .sidebar a {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    color: black;
                    padding: 13px 20px;
                    font-size: 15px;
                    text-decoration: none;
                }

                .sidebar a:hover {
                    background-color: #2A8299;
                    color: black;
                }
            `}</style>

            <aside className="sidebar">

                <div className="sidebar-title">
                    <i className="bi bi-grid-1x2-fill"></i>
                    MAIN MENU
                </div>

                <a href="/DoctorDashboard" className="active">
                    <i className="bi bi-speedometer2"></i>
                    Doctor Dashboard
                </a>

                <a href="/ViewAppoinment">
                    <i className="bi bi-calendar-check-fill"></i>
                    Appopintments
                </a>

                <Footer />

            </aside>
        </>
    );
}

export default Sidebar1;