import React, { Component } from 'react';
import './Chats.css'; 
import MessageNew  from '../messages/Message-new';
import MessageList  from '../messages/Message-list';

const MESSAGES = [
    { 
        id: 1,
        senderId: 1,
        isRead: true,
        sentAt: 45,
        text: 'Hello!',
        chatId: 1
    },
    {
       
        id: 2,
        senderId: 1,
        isRead: true,
        sentAt: 20,
        text: 'How are you?',
        chatId: 1
    },
    {
     
        id: 3,
        senderId: 2,
        isRead: true,
        sentAt: 30,
        text: 'Hi man!',
        chatId: 1
    },
    {
       
        id: 4,
        senderId: 2,
        isRead: true,
        sentAt: 15,
        text: `I'm fine, thanks!`,
        chatId: 1
    },
    {
   
        id: 5,
        senderId: 3,
        isRead: true,
        sentAt: 5,
        text: `I'll wait you near street at 5 o'clock`,
        chatId: 2
    },
    {
        
        id: 6,
        senderId: 4,
        isRead: true,
        sentAt: 3,
        text: `Ok, I will be here in 20 minutes!`,
        chatId: 2
    }
];

class ChatDetail extends Component {

  
  render() {
    return (
      <main className="chat-detail">
        <MessageList messages={this.props.hendleMessage(MESSAGES, this.props.id)}/>
        <MessageNew />
      </main>
    );
  }
}

export default ChatDetail;
