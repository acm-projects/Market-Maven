import React from "react";
import "./chat.css"
import Nav from "./../Components/chatNav"
import Navbar from "../Components/Navbar";
import Chatbody from "./../Components/chatBody"

export default function Chat() {
    return (
        <div>
            <Navbar />
            <div className="chat-main">
                <div className="chat-main">
                    <Nav />
                    <Chatbody />
                </div>
            </div>

        </div>
    )
}