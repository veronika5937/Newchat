import React, { Component } from 'react';
import './Chats.css';
import ChatDetail from './Chat-detail';
import Sidebar from '../sidebar/Sidebar';
import '../img/face.jpg'




const CHATS = [
    {

        id: 1,
        name: 'Chatting here',
        attendees: [1, 2],
        creator: 1,
        createdAt: '50'
    },
    {

        id: 2,
        name: 'Cool chat',
        attendees: [3, 4],
        creator: 3,
        createdAt: '10'
    }
]

class Chats extends Component {
    constructor() {
        super();
        this.state = {
            id: null
        }
    }

    getId(id) {
        this.setState({ id: id });
    }

    sortMessages(messages, id) {
        return messages.filter((message) => {
            return message.chatId === +id
        })
    }

    render() {
        return (
            <div className="chat-wrapper">
                <Sidebar chats={CHATS} func={this.getId.bind(this)} />
                <ChatDetail hendleMessage={this.sortMessages.bind(this)} id={this.state.id} />
            </div>
        );
    }
}

export default Chats;
