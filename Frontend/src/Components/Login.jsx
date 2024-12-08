import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Login({setuserId}) {
    const [first, setfirst] = useState("SIGNIN");
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const navigate = useNavigate();

    const buttonHandler = async () => {
        axios.post(
            "http://localhost:5000/api/Signin",
            { username, password, email },
            { withCredentials: true }
        );
        alert("signin successful");
    };

    return (
        <div>
            <div className="page">
                <div className="container">
                    <div className="header">
                        <div className="signin">
                            <span>{first}</span>
                        </div>
                        <div className="underline"></div>
                    </div>
                    <div className="inputs">
                        {first === "SIGNIN" ? (
                            <>
                                <div className="input-name">Username</div>
                                <input
                                    className="input"
                                    onChange={(e) => {
                                        setusername(e.target.value);
                                    }}
                                ></input>
                            </>
                        ) : (
                            <div></div>
                        )}

                        <div className="input-name">Email</div>
                        <input
                            className="input"
                            onChange={(e) => {
                                setemail(e.target.value);
                            }}
                        ></input>

                        <div className="input-name">password</div>
                        <input
                            className="input"
                            onChange={(e) => {
                                setpassword(e.target.value);
                            }}
                        ></input>
                    </div>
                    {first === "SIGNIN" ? (
                        <div className="forgot-password">
                            Forgot Password ? <span>Click here</span>
                        </div>
                    ) : (
                        <div></div>
                    )}
                    <br />
                    <div className="submit-btns">
                        <Link
                            className="signin-btn"
                            to="/"
                            onClick={() => {
                                setfirst("SIGNIN");
                                if (!emailRegex.test(email)) {
                                    alert("enter a vaild email");
                                } else if (username == "" || password == "") {
                                    alert("fill all the details");
                                } else {
                                    buttonHandler();
                                }
                            }}
                        >
                            SIGNIN
                        </Link>
                        <button
                            className="login-btn"
                            onClick={async () => {
                                setfirst("LOGIN");
                                const result = await axios.post(
                                    "http://localhost:5000/api/Login",
                                    { email, password: Number(password) },
                                    { withCredentials: true }
                                );
                                if (result.data.type) {
                                    navigate("/");
                                    setuserId(result.data.userdata._id)
                                } else {
                                    window.alert(result.data.errormessage);
                                }
                            }}
                        >
                            LOGIN
                        </button>
                    </div>
                    <br />
                    <Link type="button" to="/" className="btn btn-dark fs-8 fw-medium">
                        ⇐ Back to home page
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
