import React, { useState } from "react";
import "./register.css"
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuthContext } from "../hooks/useAuthContext";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLoginButton } from "../Components/GoogleLoginButton";
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

// Maybe this and the login screen could be refactored to be one page ?
// TODO: test form data validation
export const Register = (props) => {

    const { setAccessToken, setRefreshToken, setUser } = useAuthContext();

    const [cred, setCred] = useState({
        email: '',
        username: '',
        password: ''
    });

    const [resError, setResError] = useState("")

    const navigate = useNavigate();

    // TO-DO: credentials validation
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:8080/api/auth/stored-auth/signup', { ...cred })
            
            setCred({ email: "", username: "", password: ""})

            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setUser(res.data.username)

            localStorage.setItem("accessToken", res.data.accessToken)
            localStorage.setItem("refreshToken", res.data.refreshToken)
            localStorage.setItem("username", res.data.username)

            navigate("/")
        }
        catch (error) {
            console.error(error.response.data.message)
            setResError(error.response.data.message)
        }

    }

    const renderErrorMessage = () => {

        if (resError != "") {
            return (
                <div className="flex flex-row mb-2 gap-2 text-red-700 w-64">
                    <ErrorOutlinedIcon />
                    <h2>{resError}</h2>
                </div>
            )
        }

        return null
    }

    return (
        <div className="flex bg-white">
            <div className="auth-form-container flex flex-col justify-center items-center h-screen min-h-[400px] w-screen min-w-[400px] sm:w-1/2">
                <div className="m-8 grid justify-center items-center">
                    <h2 className="m-2 text-4xl text-center"><b>Welcome to Market Maven!</b></h2>
                    <h2 className="m-2 text-center">Sign up for an account and join the community!</h2>
                </div>
                <div className="flex flex-col justify-center items-center">
                    {renderErrorMessage()}
                    <form className="w-64 text-center flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                        <input className="mb-3 p-3 border border-black rounded-full w-64 text-md" type="text" value={cred.username} onChange={(e) => setCred({ ...cred, username: e.target.value })} placeholder="Username" id="username" name="username" />
                        <input className="mb-3 p-3 border border-black rounded-full w-64 text-md" type="email" value={cred.email} onChange={(e) => setCred({ ...cred, email: e.target.value })} placeholder="Email" id="email" name="email" />
                        <input className="mb-3 p-3 border border-black rounded-full w-64 text-md" type="password" value={cred.password} onChange={(e) => setCred({ ...cred, password: e.target.value })} placeholder="Password" id="password" name="password" />
                        <div className="flex w-full justify-between m-3">
                            <button className="border-none bg-none text-center hover:underline" onClick={() => navigate('/login')}>Already have an account?</button>
                        </div>
                        <button className="border-none bg-[#472836] text-white text-md font-regular w-[240px] h-[50px] rounded-full " type="submit">Sign Up</button>
                    </form>

                    <div className="m-8 grid justify-center">
                        <h2>Have a Gmail? Sign Up with Google</h2>
                        {/* Login w/ Google Button */}
                        <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                            <GoogleLoginButton />
                        </GoogleOAuthProvider>
                    </div>
                </div>
            </div>
            <div className="hidden sm:block side-image" />
        </div>
    )
}