import React, { Component } from 'react';
import './Auth.css';


class Register extends Component {
  render() {
    return (
      <form className="auth-form" noValidate>

        <label htmlFor="user-name">Full name
            <i className="fa fa-user"></i>
        </label>
        <input type="text" 
            name="name" placeholder="Name" id="user-name"/>

        <label htmlFor="user-email">Email
            <i className="fa fa-envelope"></i>
        </label>
        <input type="email" 
                name="email" placeholder="Email"  id="user-email"/>

    
    
        <label htmlFor="user-password">Password
            <i className="fa fa-key"></i>
        </label>
        <input type="password" 
            placeholder="Password" id="user-password"/>

        
        <label htmlFor="user-confirm-password">Confirm password
            <i className="fa fa-key"></i>
        </label>
        <input type="password" 
            placeholder="Confirm password" id="user-confirm-password" />
        
        
        <button type="submit" className="form-btn">Sign up</button>
    </form>

    );
  }
}

export default Register;
