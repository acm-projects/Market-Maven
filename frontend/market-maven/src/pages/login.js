import React, { useEffect, useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLoginButton } from "../Components/GoogleLoginButton";

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

// Maybe this and the register screen could be refactored to be one page ?
export const Login = () => {

    const [cred, setCred] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    useEffect(() => {

        // logic to redirect out of page if logged in or render if not

    }, [])

    // TO-DO: properly store the credentials and access token
    // CURRENT SOLUTION: local storage
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = cred;

        axios.post('http://localhost:8080/api/auth/stored-auth/login', { email, password })
            .then((res) => {
                setCred({ email: "", password: "" })

                console.log(res.data)

                localStorage.setItem("accessToken", res.data.accessToken)
                localStorage.setItem("refreshToken", res.data.refreshToken)
                localStorage.setItem("username", res.data.username)

                // redirect to some other page - shop, profile, etc
            });

    }

    return (
        <div className="flex bg-white">
            <div className="side-image hidden sm:block" />
            <div className="auth-form-container flex flex-col justify-center items-center h-screen min-h-[400px] w-screen min-w-[400px] sm:w-1/2">
                <div className="m-8 grid justify-center items-center">
                    <h2 className="m-2 text-4xl text-center"><b>Welcome Back!</b></h2>
                    <h2 className="m-2 text-center">Log back in to continue searching for locally sourced products!</h2>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <form className="w-64 text-center flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                        {/* <label htmlFor="email">email</label> */}
                        <input className="mb-3 p-3 border border-black rounded-full w-full text-md" type="email" value={cred.email} onChange={(e) => setCred({ ...cred, email: e.target.value })} placeholder="Email" id="email" name="email" />
                        {/* <label htmlFor="password">password</label> */}
                        <input className="mb-3 p-3 border border-black rounded-full w-full text-md" type="password" value={cred.password} onChange={(e) => setCred({ ...cred, password: e.target.value })} placeholder="Password" id="password" name="password" />
                        <div className="flex w-full justify-between m-3">
                            <button className="border-none bg-none hover:underline" onClick={() => navigate('/register')}>Sign Up</button>
                            <button className="border-none bg-none hover:underline" type="submit">Forgot password?</button>
                        </div>
                        <button className="border-none bg-login-button text-white text-md font-regular w-[240px] h-[50px] rounded-full " type="submit">Login</button>
                    </form>

                    <div className="m-8 grid justify-center">
                        <h2>Have a Gmail? Log in here with Google</h2>
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