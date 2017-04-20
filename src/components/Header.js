import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import '../App.css';
import Home from './Home';
import Chats from './chats/Chats';
import Auth from './auth/Auth';





class Header extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <nav className="main-nav">
              <Link to="/">Home</Link>
              <Link to="/chat">Chat</Link>
              <Link to="/auth/login">Login</Link>
              <Link to="/auth/register">Register</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route  path="/chat" component={Chats}/>
          <Route path="/auth/login" component={Auth}/>
          <Route path="/auth/register" component={Auth}/>
        
             
         
        </div>
      </Router>
    );
  }
}

export default Header;
