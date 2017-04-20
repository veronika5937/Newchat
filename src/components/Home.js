import React, { Component } from 'react';
import chat from './chat.svg';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <h1>Welcome to Chat Application</h1>
        <img src={chat} className="App-img" alt="chat" />
      </div>
    );
  }
}

export default Home;
