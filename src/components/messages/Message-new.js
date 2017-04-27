import React, { Component } from 'react';
import { socket } from '../chats/Chats';

class MessageNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };

    socket.on('connect', () => {
      socket.emit('authenticate', { token: localStorage['token'] });
    })

    this.submitMessage = this.submitMessage.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(e) {
    const message = e.target.value;
    this.setState({ message: message });
  }

  submitMessage() {
    socket.emit('message', this.state.message);
    this.clearForm();
  }


  clearForm() {
    this.setState({ message: '' });
  }

  render() {
    return (
      <form action="" className="massage-new-form">
        <div className="massage-new__input-wrap">
          <input type="text" name="message-new" className="massage-new__input"
            value={this.state.message}
            onChange={this.changeInput}
            placeholder="Type something...." />
          <i className="fa fa-smile-o"></i>
        </div>
        <i className="fa fa-paper-plane" onClick={this.submitMessage}></i>
      </form>
    );
  }
}

export default MessageNew;
