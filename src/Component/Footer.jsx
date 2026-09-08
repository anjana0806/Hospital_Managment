import React from "react";

function Footer() {
    return (
        <>
            <style>{`
                .footer {
                    position: fixed;
                    bottom: 0;
                    /* left: 230px; */
                    width: 100%;
                    height: 40px;
                    background-color: #659287;
                    color: white;
                    text-align: center;
                    padding-top: 5px;
                    font-size: 20px;
                }
            `}</style>

            <footer className="footer">
                © 2026 Hospital Appointment. All Rights Reserved.
            </footer>
        </>
    );
}

export default Footer;