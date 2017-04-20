import React, { Component } from 'react';
import './Sidebar.css';



class ChatList extends Component {
  


    filterChat(chats, exp) {
        return chats.map((chat) => {
            if(chat.name.match(exp)){
               return this.getListItem(chat)
            } else{
              return  null;
            } 
        })
    }
    
    //returns filtered chats
    getListItem(chat) {
        return (
            <li className="chat-list__item" key={chat.id}  onClick={()=>this.props.func(chat.id)}>
                <div className="avatar"></div>
                <div className="chat-list__item__content">
                    <h4>{chat.name}</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde ipsum odit ipsam at,</p>
                </div>
                <time >{chat.createdAt}</time>
            </li>
        )
    }




    render() {
        let exp = new RegExp(this.props.filterText, 'gi')

        return (
            <ul className="chat-list" >
                {this.filterChat(this.props.chats, exp)}
            </ul>
        );
    }
}

export default ChatList;
