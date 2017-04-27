import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '../App.css';
import Home from './Home';
import Chats from './chats/Chats';
import Login from './auth/Login';
import Register from './auth/Register';





class Header extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <nav className="main-nav">
            <Link to="/">Home</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/chat" component={Chats} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default Header;
