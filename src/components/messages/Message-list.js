import React, { Component } from 'react';
import './Message.css';



class MessageList extends Component {
    

    getMessages(messages, userId) {
        return messages.map((message) => {
            return (
                <li className={userId !== message.senderId ? `messages-list__item incoming` : `messages-list__item outgoing`}
                    key={message.id}>
                    <div className="avatar"></div>
                    <p className="messages-list__item__content">{message.text}
                        <time>{message.sentAt}m</time>
                    </p>
                </li>
            );
        })
    }
  

    render() {
        const userId = 1;
        return (
            <ul className="messages-list" >
                {this.getMessages(this.props.messages, userId)}    
            </ul>
        );
    }
}

export default MessageList;
