import React, { Component } from 'react';
import './Message.css';



class MessageList extends Component {

    getMessages(messages, userId) {
        return messages.map((message, key) => {
            const date = new Date(message.time);
            var monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];

            return (
                <li className={userId !== message.senderId ? `messages-list__item incoming` : `messages-list__item outgoing`}
                    key={key}>
                    <div className="avatar"></div>
                    <p className="messages-list__item__content">{message.msg}
                        <time>{date.getDay()} {monthNames[date.getMonth()]} {date.getHours()}:{date.getMinutes()}m</time>
                    </p>
                </li>
            );
        })
    }


    render() {
        const userId = 1;
        console.log(this.props.messages)
        if (this.props.messages.length === 0) {
            return (<p>Loading...</p>)
        } else {
            return (
                <ul className="messages-list" >
                    {this.getMessages(this.props.messages, userId)}
                </ul>
            );
        }
    }
}

export default MessageList;
