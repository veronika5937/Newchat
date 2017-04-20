import React, { Component } from 'react';
import './Auth.css';


class Login extends Component {
  render() {
    return (
     <form
    noValidate
    className="auth-form">
    <label htmlFor="user-email">Email
        <i className="fa fa-envelope"></i>
    </label>
    <input type="email"
            name="email"
            id="user-email"
            placeholder="Email"
            required/>

    <label htmlFor="user-password">Password
         <i className="fa fa-key"></i>
    </label>
    <input type="password"
            name="password"
            id="user-password"
            placeholder="Password"
            required/>

    <a href="#">Forgot password?</a>
    <button type="submit" className="form-btn" >Log in</button>
</form>
    );
  }
}

export default Login;
