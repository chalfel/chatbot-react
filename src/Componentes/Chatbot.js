import React, {Component} from 'react'
import ChatHeader from './chat/ChatHeader';
import ChatMensagem from './chat/ChatMensagem';
import ChatConversa from './chat/ChatConversa';

class Chatbot extends Component{
    render(){
        return(
            <div className = "chatbot">
            <ChatHeader />
            <ChatConversa />
            <ChatMensagem />
            </div>
        )
    }
}

export default Chatbot