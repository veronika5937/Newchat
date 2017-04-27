import React, { Component } from 'react';
import './Chats.css';
import MessageList from '../messages/Message-list';
import MessageNew from '../messages/Message-new';
import Sidebar from '../sidebar/Sidebar';
import '../img/face.jpg';
import io from 'socket.io-client';

export const socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000');
// console.log('check 1', socket.connected);
// socket.on('connect', function() {
//   console.log('check 2', socket.connected);
// });

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
// const MESSAGES = [
//     {
//         id: 1,
//         senderId: 1,
//         isRead: true,
//         sentAt: 45,
//         text: 'Hello!',
//         chatId: 1
//     },
//     {

//         id: 2,
//         senderId: 1,
//         isRead: true,
//         sentAt: 20,
//         text: 'How are you?',
//         chatId: 1
//     },
//     {

//         id: 3,
//         senderId: 2,
//         isRead: true,
//         sentAt: 30,
//         text: 'Hi man!',
//         chatId: 1
//     },
//     {

//         id: 4,
//         senderId: 2,
//         isRead: true,
//         sentAt: 15,
//         text: `I'm fine, thanks!`,
//         chatId: 1
//     },
//     {

//         id: 5,
//         senderId: 3,
//         isRead: true,
//         sentAt: 5,
//         text: `I'll wait you near street at 5 o'clock`,
//         chatId: 2
//     },
//     {

//         id: 6,
//         senderId: 4,
//         isRead: true,
//         sentAt: 3,
//         text: `Ok, I will be here in 20 minutes!`,
//         chatId: 2
//     }
// ];

class Chats extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            messages: []
        }
         
    }

    componentDidMount() {
        fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/messages')
            .then(response => response.json())
            .then(messages => {
                messages = messages.slice(300);
                this.setState({ messages: messages })
            })
            socket.on('message', (msg) => {
            var { messages } = this.state;
            console.log(msg)
            messages.push(msg);
            this.setState({ messages });
        })
    }


    // getId(id) {
    //     this.setState({ id: id });
    // }

    // sortMessages(messages, id) {
    //     return messages.filter((message) => {
    //         return message.chatId === +id
    //     })
    // }

    render() {
        return (
            <div className="chat-wrapper">
                <Sidebar chats={CHATS} />
                {/*func={this.getId.bind(this)} */}
                <main className="chat-detail">
                    <MessageList messages={this.state.messages} id={this.state.id} />
                    <MessageNew {...this.props} />
                </main>
            </div>
        );
    }
}

export default Chats;
