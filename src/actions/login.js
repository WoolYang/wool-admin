export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = (params) => {
    return {
        type: LOGIN_REQUEST,
        payload: params
    };
};

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    };
};

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    };
};
