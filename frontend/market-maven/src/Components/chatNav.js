import React, { Component } from 'react'
import "./chatNav.css"
import logo from "./../images/logo.jpg"

export default function Nav() {
        return (
            <div className='nav'>
                <div className='nav_blocks'>
                    <img src={logo}></img>                    
                </div>
                <div className='nav_blocks'></div>
                <div className='nav_blocks'></div>
            </div>
        )
    }