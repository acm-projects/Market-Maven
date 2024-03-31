import React, { useState } from "react";
import "./register.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLoginButton } from "../Components/GoogleLoginButton";

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

export const Register = (props) => {

    const [cred, setCred] = useState({
        email: '',
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, username, password } = cred;
        const token = await axios.post('http://localhost:8080/api/auth/stored-auth/signup', { email, username, password });

    }

    return (
        <div className="flex bg-white">
            <div className="side-image" />
            <div className="auth-form-container flex justify-center flex-wrap items-center w-1/2 min-w-[400px]">
                <h2 className="m-8 text-4xl text-center"><b>Welcome to Market Maven!</b></h2>
                <div className="flex flex-col justify-center items-center">
                    <form className="w-64 text-center flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                        <input className="mb-3 p-3 border border-black rounded-full w-64 text-md" type="text" value={cred.username} onChange={(e) => setCred({ ...cred, username: e.target.value })} placeholder="Username" id="username" name="username" />
                        <input className="mb-3 p-3 border border-black rounded-full w-64 text-md" type="email" value={cred.email} onChange={(e) => setCred({ ...cred, email: e.target.value })} placeholder="Email" id="email" name="email" />
                        <input className="mb-3 p-3 border border-black rounded-full w-64 text-md" type="password" value={cred.password} onChange={(e) => setCred({ ...cred, password: e.target.value })} placeholder="Password" id="password" name="password" />
                        <div className="flex w-full justify-between m-3">
                            <button className="border-none bg-none" onClick={() => navigate('/login')}>Already have an account?</button>
                        </div>
                        <button className="border-none bg-login-button text-white text-md font-regular w-[240px] h-[50px] rounded-full " type="submit">Sign Up</button>
                        {/* <div className="auth-form-container">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Full name</label>
                                <input value={name} name="name" id="name" placeholder="full Name" />
                                <label htmlFor="email">email</label>
                                <input type={email} placeholder="youremail@gmail.com" id="email" name="email" />
                                <label htmlFor="password">password</label>
                                <input type={pass} placeholder="*******" id="password" name="password" />
                                <button type="submit">Login</button>
                                <button onClick={() => navigate('/login')}>Already have an account? Login here.</button>
                            </form>
                        </div> */}
                    </form>

                    <div className="m-3">
                        <h2>Have a Gmail? Sign in here with Google</h2>
                        {/* Login w/ Google Button */}
                        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                            <GoogleLoginButton />
                        </GoogleOAuthProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}