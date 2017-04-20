import React, { Component } from 'react';

class MessageNew extends Component {
  

  render() {
    return (
      <form action="" className="massage-new-form">
        <div className="massage-new__input-wrap">
          <input type="text" name="message-new" className="massage-new__input" placeholder="Type something...." />
          <i className="fa fa-smile-o"></i>
        </div>
        <i className="fa fa-files-o"></i>
      </form>
    );
  }
}

export default MessageNew;
