import { combineReducers } from 'redux';
import loader from './loader';
import login from './login';
import register from './register';

import { createReducers } from '../utils/createReducers';

const reducers = {
  loader,
  login,
  register
};

const rootReducer = combineReducers(createReducers(reducers));

export default rootReducer;

// https://github.com/dosandk/eleks-camp-2017-react-chat-client/blob/master/js