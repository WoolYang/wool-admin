import * as types from '../constants/ActionTypes';
import { getCheckLogin } from '../api/api';
/* 登陆信息提交 */
export const login = (loginParams) => {
    return {
        type: types.CHECK_LOGIN,
        payload: getCheckLogin(loginParams)
    };
};
/* export const login = (loginParams) => {
    return (dispatch) => {
        getCheckLogin(loginParams).then(data => dispatch(receiveCheckLogin(data)));
    };
}; */

export const receiveCheckLogin = (data) => ({
    type: types.RECEIVE_CHECK_LOGIN,
    loginData: data
});