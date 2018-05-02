import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE, RECEIVE_CHECK_LOGIN } from '../constants/ActionTypes';

const initialState = {
    loginData: null,      //登陆返回信息
    fetching: false,
    fetched: false,
    error: null
};

const login = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_START:
        return {
            ...state,
            fetching: true
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            fetching: false,
            fetched: true,
            loginData: action.payload
        };
    case LOGIN_FAILURE:
        return {
            ...state,
            fetching: false,
            error: action.payload
        };
    default:
        return state;
    }
};

export default login;