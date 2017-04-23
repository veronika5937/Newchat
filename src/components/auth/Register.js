import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Auth.css';


class Register extends Component {
	constructor(...args) {
		super(...args);
		this.state = {
			credentials: {
				'username': '',
				'email': '',
				'password': '',
			}
		}
		this.changeInput = this.changeInput.bind(this);
		this.signUpSubmit = this.signUpSubmit.bind(this);
	}

	changeInput(field) {
    return event => {
      const credentials = this.state.credentials;
      credentials[field] = event.target.value;
      this.setState({ credentials: credentials });
    }
  }

	signUpSubmit(event){
		event.preventDefault();
		this.props.signUp(this.state.credentials)
	}

	render() {
		return (
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
					placeholder="Confirm password" id="user-confirm-password" />


				<button type="submit" className="form-btn" onClick={this.signUpSubmit}>Sign up</button>
			</form>

		);
	}
}

export default connect() (Register);
