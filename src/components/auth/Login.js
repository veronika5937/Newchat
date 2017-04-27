import React, { Component } from 'react';
import './Auth.css';


class Login extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      redirect: false,

      credentials: {
        'username': '',
        'password': ''
      }
    }
    this.changeInput = this.changeInput.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  changeInput(field) {
    return event => {
      const credentials = this.state.credentials;
      credentials[field] = event.target.value;
      this.setState({ credentials: credentials });
    }
  }

  loginUser(event) {
    event.preventDefault();
    // const { username, password } = this.state.credentials;

    fetch(new Request('http://eleksfrontendcamp-mockapitron.rhcloud.com/login', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(this.state.credentials)
    }))
      .then(response => response.json())
      .then(user => {
        console.log(user)
        localStorage.setItem('token', user.token)
        localStorage.setItem('username', user.user.username)
      })
      .catch(err => console.log(err));

  }

  // logoutUser() {}

  // if (username && password) {
  //   loginUser(this.state.credentials)
  //     .then(() => {
  //       push('/chat');
  //       hideLoader();
  //     })
  //     .catch(err => {
  //       hideLoader();
  //       console.error(`Error: ${err}`);
  //     });
  // }
  //   }


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
          placeholder="Password"
          onChange={this.changeInput('password')}
          required />

        <a href="#">Forgot password?</a>
        <button type="submit" className="form-btn" onClick={this.loginUser}>Log in</button>
      </form>
    );
  }
}

export default Login;
