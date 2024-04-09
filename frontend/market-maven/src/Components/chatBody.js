import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "./chatList";
import ChatCont from "./chatCont";
import UserChat from "./userChat";


export default class ChatBody extends Component {
    render() {
        return <div className="main__chatbody">
            <ChatList/>
            <ChatCont/>
            <UserChat/>
        </div>
    }
}