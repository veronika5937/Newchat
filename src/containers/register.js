
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Register from '../components/auth/Register';
import * as signUpActions from '../actions/register';
import * as loaderActions from '../actions/loader';
import { push } from 'react-router-redux';

class RegisterContainer extends Component {
  render() {
    return ( 
      <Register {...this.props} />
    );
  }
}

const actionCreators = Object.assign({}, signUpActions, loaderActions, {push});
const mapActionsToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(null, mapActionsToProps)(RegisterContainer);