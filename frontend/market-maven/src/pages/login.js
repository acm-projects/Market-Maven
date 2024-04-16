import React, { useEffect, useState } from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import { useAuthContext } from "../hooks/useAuthContext"

import { GoogleOAuthProvider } from "@react-oauth/google"
import { GoogleLoginButton } from "../Components/GoogleLoginButton"
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined'

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

export const Login = () => {

    const navigate = useNavigate()

    // auth context states
    const {
        accessToken, setAccessToken,
        refresh, setRefreshToken,
        user, setUser } = useAuthContext()

    // state for the form
    const [cred, setCred] = useState({
        email: '',
        password: '',
    })
    const [submitted, setSubmitted] = useState(false)

    // state for res error from server if error
    const [resError, setResError] = useState("")

    useEffect(() => {
        const validateAuth = async () => {
            console.log(accessToken)
            if (localStorage.getItem("accessToken")) navigate("/profile")
        }

        validateAuth();
        
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        // authentication
        try {
            const res = await axios.post('http://localhost:8080/api/auth/stored-auth/login', { ...cred });

            setCred({ email: "", password: "" })

            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setUser(res.data.username);

            localStorage.setItem("accessToken", res.data.accessToken);
            localStorage.setItem("refreshToken", res.data.refreshToken);
            localStorage.setItem("username", res.data.username);

            navigate("/Shop");
        } catch (error) {
            console.error(error);
            setResError(error.response.data.message);
        }
    }


    const renderErrorMessage = () => {
        if (resError != "") {
            return (
                <div className="flex flex-row px-2 mb-2 gap-2 text-red-700 w-64">
                    <ErrorOutlinedIcon />
                    <h2>{resError}</h2>
                </div>
            )
        }

        return null
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
                    {renderErrorMessage()}
                    <form className="w-64 text-center flex flex-col items-center justify-center" onSubmit={handleSubmit}>
                        <input className="mb-3 p-3 border border-black rounded-full w-full text-md" type="email" value={cred.email} onChange={(e) => {setCred({ ...cred, email: e.target.value}); setSubmitted(false)}} placeholder="Email" id="email" name="email" />
                        <input className="mb-3 p-3 border border-black rounded-full w-full text-md" type="password" value={cred.password} onChange={(e) => {setCred({ ...cred, password: e.target.value}); setSubmitted(false)}} placeholder="Password" id="password" name="password" />
                        <div className="flex w-full justify-between m-3">
                            <button className="border-none bg-none hover:underline" onClick={() => navigate('/register')}>Sign Up</button>
                            <button className="border-none bg-none hover:underline" /*onClick={() => navigate('/')}*/>Forgot password?</button>
                        </div>
                        <button className="border-none bg-[#472836] text-white text-md font-regular w-[240px] h-[50px] rounded-full " type="submit">Login</button>
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