import { LOGIN, LOGOUT } from '../constants/login';
import { post } from '../utils/post';

export {
    loginUser,
    logoutUser
};

function loginUser(data) {
    return dispatch => {
    return post('http://eleksfrontendcamp-mockapitron.rhcloud.com/login', data).then(response => {
      return response.json()
        .then(user => {
          return dispatch({
            type: LOGIN,
            payload: {
              user
            }
          });
        })
        .catch(err => console.log(err));
    });
  };
    // const request = new Request('http://eleksfrontendcamp-mockapitron.rhcloud.com/login', {
    //     method: 'POST',
    //     headers: { 'Content-type': 'application/json' },
    //     body: JSON.stringify(data)
    // })
    // // console.log(this.state.credentials)
    // // console.log(request.credentials)
    // return dispatch => {
    //     fetch(request)
    //         .then(response => {
    //             return response.json()
    //                 .then(user => {
    //                     localStorage.setItem('token', user.token)
    //                     return dispatch({
    //                         type: LOGIN,
    //                         payload: {
    //                             user
    //                         }
    //                     });
    //                 })
    //                 .catch(err => console.log(err));
    //         })
    // }
}

function logoutUser() {
    return {
        type: LOGOUT
    };
}