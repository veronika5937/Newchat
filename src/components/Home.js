import React, { Component } from 'react';
import chat from './chat.svg';


const homeWrapper = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

class Home extends Component {
  

  render() {
    return (
      <div className="home-wrapper" style={homeWrapper}>
        <h1>Welcome to Chat Application</h1>
        <img src={chat} className="App-img" alt="chat" />
      </div>
    );
  }
}

export default Home;
