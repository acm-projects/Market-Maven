import React, { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="flex bg-white">
            <div className="side-image" />
            <div className="auth-form-container flex justify-center flex-wrap items-center border border-black w-full">
                <div className="">
                    <h2 className="">Welcome</h2>
                    <form className="form1" onSubmit={handleSubmit}>
                        {/* <label htmlFor="email">email</label> */}
                        <div className="p-3 border border-black rounded-full mb-3">
                            <input className="border-none w-64 text-md" type={email} placeholder="Email" id="email" name="email" />
                        </div>
                        {/* <label htmlFor="password">password</label> */}
                        <div className="p-3 border border-black mb-3 rounded-full">
                            <input className="border-none  w-64 text-md" type={pass} placeholder="Password" id="password" name="password" />
                        </div>
                        <div className="flex w-full justify-between">
                            <button className="border-none bg-none" onClick={() => navigate('/register')}>Create account</button>
                            <button className="border-none bg-none" type="submit">Forgot password?</button>
                        </div>
                        <div className="w-full h-6" />
                        <button className="border-none bg-login-button text-white text-md font-regular p-5 rounded-full " type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>

    )
}