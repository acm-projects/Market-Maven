import React from "react"
import axios from "axios";

import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

export const GoogleLoginButton = ( signUp ) => {
    const navigate = useNavigate();

    // implement the UseGoogleLogin hook
    const handleAuth = useGoogleLogin({
        onSuccess: async (googleAuthRes) => {
            console.log("Login: ", googleAuthRes)

            try {


                // add some control structure or state that can choose btween the login and signup routes
                const response = axios.post("http://localhost:8080/api/auth/google-oauth/login", { googleToken: googleAuthRes.access_token})

                // handle JWT access and/or refresh tokens
                localStorage.setItem("googleAccessToken", googleAuthRes)

                // navigate to the user profile or homepage or wherever
                navigate("/")

            } catch (error) {
                console.error('Error logging in with Google', error)
            }
        },
        onError: () => {
            console.error()
        },
        flow: 'implicit',   // implicit only gives access token, auth code would need to be handled to extract access token and/or refresh token
        scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
    });

    return (

        // Google OAuth button
        <button id="google-login-button" className="m-3 flex justify-center" onClick={() => handleAuth()}><img src="/web_light_rd_ctn@4x.png" className="max-w-[240px]"/></button>
    ); 

}