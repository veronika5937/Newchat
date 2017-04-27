import React, { Component } from 'react';
import './Auth.css';
import { Redirect} from 'react-router-dom'


class Register extends Component {
    constructor(...args) {
		super(...args);
		this.state = {
			credentials: {
				'username': '',
				'email': '',
				'password': ''
			}
		}
		this.changeInput = this.changeInput.bind(this);
		this.signUp = this.signUp.bind(this);
	}

    changeInput(field) {
    return event => {
      const credentials = this.state.credentials;
      credentials[field] = event.target.value;
      this.setState({ credentials: credentials });
    }
  }

   componentDidMount() {
        fetch('http://eleksfrontendcamp-mockapitron.rhcloud.com/users')
            .then(response => response.json())
            .then(messages => console.table(messages))
        }
    


  signUp(event) {
    event.preventDefault();
    fetch(new Request('http://eleksfrontendcamp-mockapitron.rhcloud.com/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(this.state.credentials)
    }))
       .then(this.setState({redirect: true}))
  }


  render() {
    if (this.state.redirect)  return( <Redirect to='/chat' />);
    return (
    <div className="auth-form-wrap">
      <form className="auth-form" noValidate>

				<label htmlFor="user-name">Full name
					<i className="fa fa-user"></i>
				</label>
				<input type="text"
					name="name" placeholder="Name"
					id="user-name"
					onChange={this.changeInput('username')} />

				<label htmlFor="user-email">Email
					<i className="fa fa-envelope"></i>
				</label>
				<input type="email"
					name="email"
					placeholder="Email"
					id="user-email"
					onChange={this.changeInput('email')} />

				<label htmlFor="user-password">Password
					<i className="fa fa-key"></i>
				</label>
				<input type="password"
					placeholder="Password"
					id="user-password"
					onChange={this.changeInput('password')} />


				<label htmlFor="user-confirm-password">Confirm password
					<i className="fa fa-key"></i>
				</label>
				<input type="password"
					placeholder="Confirm password" id="user-confirm-password"/>

				<button type="submit" className="form-btn" onClick={this.signUp}>Sign up</button>
			</form>
        </div>
    );
  }
}

export default Register;
