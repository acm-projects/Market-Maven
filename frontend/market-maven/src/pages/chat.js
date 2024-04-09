import React from "react";
import "./chat.css"
import Nav from "./../Components/chatNav"
import Chatbody from "./../Components/chatBody"

export default function Chat(){
    return (
    <div className="container">
        <Nav/>
        <Chatbody/>
    </div>
    )
}