import { EMAIL_CHANGED,
     PASSWORD_CHANGED,
     LOGIN_USER_SUCCESS,
     LOGIN_USER,
    LOGIN_USER_FAIL } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', loading: false, user: null, token: null };


export default (state = INITIAL_STATE, action) => {
   
    switch (action.type) {
       
            
            case EMAIL_CHANGED:
            return { ...state, email: action.payload };

            case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

            case LOGIN_USER:
            return { ...state, loading: true, error: '' };

            case LOGIN_USER_SUCCESS:
            console.log(action.payload.data.token);
            return {
            ...state,
            //[action.payload.user]: action.payload,
            user: action.payload,
            error: '',
            loading: false,
            email: '',
            password: '',
            token: action.payload.data.token };

            case LOGIN_USER_FAIL:
           
            return { ...state, error: 'Authentication Failed.', password: '', loading: false, token: null }; 

            default:
            return state;
        }
        };
