import { LOGIN, LOGOUT } from '../constants/login';

export default {
  [LOGIN]: (state, { payload }) => {
    return payload.user;
  },
  [LOGOUT]: () => {
    return {};
  }
};
