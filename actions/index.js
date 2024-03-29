import axios from 'axios';
import { history } from 'react-router-dom';
import { EMAIL_CHANGED,
     PASSWORD_CHANGED,
      LOGIN_USER_FAIL,
      LOGIN_USER_SUCCESS,
    LOGIN_USER } from './types';



export const emailChanged = (text) => {
            return {
            type: EMAIL_CHANGED,
            payload: text
            };
};

export const passwordChanged = (text) => {
    return {
    type: PASSWORD_CHANGED,
    payload: text
    };
};

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
       axios.post('https://reqres.in/api/login', {
      email,
      password,
    })
    .then(user => loginUserSuccess(dispatch, user))
   .catch(() => loginUserFail(dispatch));
    };
};

const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
  };
  
   const loginUserSuccess = async (dispatch, user) => {
     if (user.data.error_code === 1) {
       loginUserFail();
     }
    
    dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
    });
  };
