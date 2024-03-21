import React, { useState } from "react";
import "./register.css"
import { useNavigate } from "react-router-dom";

export const Register = (props) => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

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
                    <h2 className="">Sign-Up</h2>
                    <form className="form1" onSubmit={handleSubmit}>
                        <div className="p-3 border border-black rounded-full mb-3">
                            <input className="border-none w-64 text-md" type={name} placeholder="Name" id="name" name="name" />
                        </div>
                        <div className="p-3 border border-black rounded-full mb-3">
                            <input className="border-none w-64 text-md" type={email} placeholder="Email" id="email" name="email" />
                        </div>
                        <div className="p-3 border border-black mb-3 rounded-full">
                            <input className="border-none  w-64 text-md" type={pass} placeholder="Password" id="password" name="password" />
                        </div>
                        <div className="flex w-full justify-between">
                            <button className="border-none bg-none" onClick={() => navigate('/login')}>Already have an account?</button>
                        </div>
                        <div className="w-full h-6" />
                        <button className="border-none bg-login-button text-white text-md font-regular p-5 rounded-full " type="submit">Create Account</button>
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
                </div>
            </div>
        </div>
    )
}