import React from "react";

function Header() {
return (
<>
<style>{`
            .top-header {
            height: 60px;
            color: white;
            position: fixed;
            top: 0;
            padding-left: 20px;
            left: 0;
            display: flex;
            align-items: center;
            width: 100%;
            font-size: 25px;
            background-color: #659287;
            z-index: 1000;
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
            }
            .login-link a {
                color: white;
                text-decoration: none;
                font-size: 20px;
                padding: 8px 18px;
                border-radius: 5px;
            }
            .login-link a:hover {
                background-color: #88BDA4;
            }
        `}
        </style>

        <header className="top-header">
            <div>Sunshine Medicare</div>

            <div className="login-link">
                <a href="/Main">Home</a>
                <a href="/AdminLogin">Login</a>
            </div>
        </header>
    </>
);

}

export default Header;