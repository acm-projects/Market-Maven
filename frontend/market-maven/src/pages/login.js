import React, { useState } from "react";
import "./login.css"
import { useNavigate } from "react-router-dom";

import axios from 'axios'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data)
        const {email, password} = data;

        console.log(typeof email)
        console.log(typeof password)

        const token = await axios.post('http://localhost:8080/api/auth/stored-auth/login', {email, password});
        console.log(token)

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
                            <input className="border-none w-64 text-md" type={email} value={data.email} onChange={(e) => setData({...data, email: e.target.value})} placeholder="Email" id="email" name="email" />
                        </div>
                        {/* <label htmlFor="password">password</label> */}
                        <div className="p-3 border border-black mb-3 rounded-full">
                            <input className="border-none  w-64 text-md" type={pass} value={data.password} onChange={(e) => setData({...data, password: e.target.value})} placeholder="Password" id="password" name="password" />
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