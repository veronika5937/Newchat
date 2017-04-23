import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import RegisterContainer from '../../containers/register';
import LoginContainer from '../../containers/login';



class Auth extends Component {
  render() {
    return (
      <Router>
        <div className="auth-form-wrap">
          <nav className="tabs">
            <Link to="/auth/login" className="tab-item">Login</Link>
            <Link to="/auth/register"  className="tab-item">Register</Link>
          </nav>
          <Route  exact path="/auth/login" component={LoginContainer}/>
          <Route  path="/auth/register" component={RegisterContainer}/>
        </div>
      </Router>
    );
  }
}

export default Auth;