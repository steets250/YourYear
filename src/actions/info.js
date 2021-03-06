export const getColleges = async (callback) => {
  const response = await fetch('http://csgetdegrees.herokuapp.com/info/colleges', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!data) throw new Error('Empty response from server');
  if (data.error) throw new Error(data.error.message);

  callback({
    data: data,
  });
}

export const getMajors = async (uuid, callback) => {
  const response = await fetch('http://csgetdegrees.herokuapp.com/info/colleges/' + uuid + '/majors', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  if (!data) throw new Error('Empty response from server');
  if (data.error) throw new Error(data.error.message);

  callback({
    data: data,
  });
}








// export const loginUser = (values) => async (dispatch) => {
//   try {
//     const response = await fetch(Config.API_URL + Config.routes.auth.login, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: values.email,
//         password: values.password,
//       }),
//     });

//     const data = await response.json();
//     if (!data) throw new Error('Empty response from server');
//     if (data.error) throw new Error(data.error.message);

//     Storage.set('token', data.token);
//     const userData = tokenGetClaims(data.token);
//     dispatch({
//       type: AUTH_USER,
//       isAdmin: userData.admin,
//     });

//     // Redirect to home on login.
//     dispatch(replace('/'));
//   } catch (error) {
//     notify('Unable to login!', error.message);
//     dispatch({
//       type: AUTH_ERROR,
//       error,
//     });
//   }
// };

// export const verifyToken = (dispatch) => async () => {
//   return async (resolve, reject) => {
//     const token = Storage.get('token');
//     if (token) {
//       try {
//         const response = await fetch(
//           Config.API_URL + Config.routes.auth.verification,
//           {
//             method: 'POST',
//             headers: {
//               Accept: 'application/json',
//               'Content-Type': 'application/json',
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         const data = await response.json();
//         if (!data) throw new Error('Empty response from server');
//         if (data.error) {
//           throw new Error(data.error.message);
//         }

//         if (!data.authenticated) {
//           // not authenticated? log out user
//           dispatch({
//             type: UNAUTH_USER,
//           });
//           notify('Login expired', 'Please sign in again');
//           // redirect to /login
//           dispatch(replace('/login'));
//           resolve(data);
//           return;
//         }
//         const userData = tokenGetClaims(token);
//         dispatch({
//           type: AUTH_USER,
//           isAdmin: userData.admin,
//         });
//         resolve(data);
//       } catch (error) {
//         notify(
//           'Unable to verify token!',
//           error.message || 'Try logging in again'
//         );

//         dispatch({
//           type: AUTH_ERROR,
//           error,
//         });

//         // log out user due to probably faulty token
//         dispatch({
//           type: UNAUTH_USER,
//         });
//         // redirerct to /login
//         dispatch(replace('/login'));
//         reject(error);
//       }
//     } else {
//       // log out user due to no token
//       dispatch({
//         type: UNAUTH_USER,
//       });
//       // redirerct to /login
//       dispatch(replace('/login'));
//       resolve();
//     }
//   };
// };

// export const logoutUser = () => (dispatch) => {
//   dispatch({
//     type: UNAUTH_USER,
//   });
//   Storage.remove('token');
//   dispatch(replace('/login'));
// };

// export const passwordReset = (email) => async (dispatch) => {
//   try {
//     const response = await fetch(
//       `${Config.API_URL + Config.routes.auth.resetPassword}/${email}`,
//       {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     const data = await response.json();
//     if (!data) throw new Error('Empty response from server');
//     if (data.error) throw new Error(data.error.message);
//     notify(
//       'Success! Check your email shortly',
//       `Email has been sent to ${email}`
//     );
//     dispatch({
//       type: PASSWORD_SUCCESS,
//     });
//   } catch (error) {
//     notify('Error with email!', error.message);
//     dispatch({
//       type: PASSWORD_FAIL,
//       payload: error.message,
//     });
//   }
// };

// export const updatePassword = (user) => async (dispatch) => {
//   try {
//     const response = await fetch(
//       `${Config.API_URL + Config.routes.auth.resetPassword}/${user.code}`,
//       {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ user }),
//       }
//     );

//     const data = await response.json();

//     if (!data) throw new Error('Empty response from server');
//     if (data.error) throw new Error(data.error.message);

//     dispatch(replace('/'));
//   } catch (error) {
//     notify('Unable to reset password!', error.message);
//   }
// };

// // Verifies an email using a info object with email field and code field
// export const verifyEmail = async (info) => {
//   try {
//     const response = await fetch(
//       `${`${Config.API_URL + Config.routes.auth.emailVerification}/${
//       info.code
//       }`}`,
//       {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ ...info }),
//       }
//     );

//     const data = await response.json();

//     if (!data) throw new Error('Empty response from server');
//     if (data.error) throw new Error(data.error.message);
//     notify('Verified email!');
//   } catch (error) {
//     notify('Unable to verify email!', error.message);
//   }
// };

// export const sendEmailVerification = async (email) => {
//   try {
//     const response = await fetch(
//       `${`${Config.API_URL + Config.routes.auth.emailVerification}/${email}`}`,
//       {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//       }
//     );

//     const data = await response.json();

//     if (!data) throw new Error('Empty response from server');
//     if (data.error) throw new Error(data.error.message);
//     notify('Sent verification email!');
//   } catch (error) {
//     notify('Unable to send verification email!', error.message);
//   }
// };
