import React, { Component } from 'react';
import './Auth.css';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      credentials: {
        'username': '',
        'password': ''
      }
    }
    this.changeInput = this.changeInput.bind(this);
    this.loginSubmit = this.loginSubmit.bind(this);
  }

  changeInput(field) {
    return event => {
      const credentials = this.state.credentials;
      credentials[field] = event.target.value;
      this.setState({ credentials: credentials });
    }
  }

  loginSubmit(event) {
    event.preventDefault();

    const { username, password } = this.state.credentials;
    const { push, loginUser, showLoader, hideLoader } = this.props;
    
     if (username && password) {
      showLoader();
      loginUser(this.state.credentials)
        .then(() => {
          push('/chat');
          hideLoader();
        })
        .catch(err => {
          hideLoader();
          console.error(`Error: ${err}`);
        });
    }
  }
     
   
  // componentDidMount(){
  //   fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/users')
  //   .then (response => response.json())
  //   .then (data => console.table(data))
  // }
 

  render() {
    return (
      <form
        noValidate
        className="auth-form">
        <label htmlFor="user-name">User Name
        <i className="fa fa-envelope"></i>
        </label>
        <input type="text"
          name="username"
          id="user-name"
          placeholder="User Name"
          onChange={this.changeInput('username')}
          required />

        <label htmlFor="user-password">Password
         <i className="fa fa-key"></i>
        </label>
        <input type="password"
          name="password"
          id="user-password"
          onChange={this.changeInput('password')}
          placeholder="Password"
          required />

        <a href="#">Forgot password?</a>
        <button type="submit" className="form-btn" onClick={this.loginSubmit}>Log in</button>
      </form>
    );
  }
}

export default connect()(Login);