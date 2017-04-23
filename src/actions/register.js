import { REGISTER } from '../constants/register';

export function signUp(data) {
	const request = new Request('http://eleksfrontendcamp-mockapitron.rhcloud.com/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data)
	});
	console.log(data)
   
	 return dispatch =>{
      fetch(request)
      .then(response => response.json())
      .then(user => { 
          return dispatch({
              type: REGISTER,
              payload: {
                  user
              }
          });
      })
      .catch(err => console.log(err));
    }
  }