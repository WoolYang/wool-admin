import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from 'actions/login';

const initialState = {
    data: null,      //登陆返回信息
    fetching: false,
    fetched: false,
    error: null
};

const login = (state = initialState, action) => {
    switch (action.type) {
    case LOGIN_REQUEST:
        return {
            ...state,
            fetching: true
        };
    case LOGIN_SUCCESS:
        return {
            ...state,
            fetching: false,
            fetched: true,
            data: action.payload
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