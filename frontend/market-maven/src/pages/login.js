import React, { useEffect, useState } from "react"
import "./login.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import { useAuthContext } from "../hooks/useAuthContext"

import { GoogleOAuthProvider } from "@react-oauth/google"
import { GoogleLoginButton } from "../Components/GoogleLoginButton"
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined'

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID

// TO-DO: fix data validation, form still works but just clean up
// the data validation
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

    // error states
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [resError, setResError] = useState("")

    useEffect(() => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

        // data validation
        if (submitted) {
            setEmailError(!(emailRegex.test(cred.email) & cred.email.trim().length > 0))
            setPasswordError(cred.password.trim().length < 1)    
        }
        else {
            setEmailError(false)
            setPasswordError(false)
            setResError("")
        }
    }, [cred, submitted])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitted(true)

        setResError("")
        setCred({ ...cred})

        console.log(emailError, passwordError)

        if (!(emailError || passwordError)) {
            try {
                const res = await axios.post('http://localhost:8080/api/auth/stored-auth/login', { email: cred.email, password: cred.password })

                setCred({ email: "", password: "" })

                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setUser(res.data.username)

                localStorage.setItem("accessToken", res.data.accessToken)
                localStorage.setItem("refreshToken", res.data.refreshToken)
                localStorage.setItem("username", res.data.username)

                navigate("/Shop")
            } catch (error) {
                console.error('Error logging in:', error.response.data.message)
                setResError(error.response.data.message)
            }
        }
    }

    const renderErrorMessage = () => {

        if (resError != "") {
            return (
                <div className="flex flex-row mb-2 text-red-700 w-64">
                    <ErrorOutlinedIcon className="mx-2"/>
                    <h2>{resError}</h2>
                </div>
            )
        }
        else if (emailError) {
            return (
                <div className="flex flex-row mb-2 text-red-700 w-64">
                    <ErrorOutlinedIcon className="mx-2"/>
                    <h2>Invalid email address</h2>
                </div>
            )
        }
        else if (passwordError) {
            return (
                <div className="flex flex-row mb-2 text-red-700 w-64">
                    <ErrorOutlinedIcon className="mx-2"/>
                    <h2>Please input a password</h2>
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