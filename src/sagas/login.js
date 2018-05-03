import { put, call } from 'redux-saga/effects';
import { getCheckLogin } from '../api/api';
import { loginSuccess, loginFailure } from '../actions/login';

//异步调用，传入调度的action
export function* loginAsync(action) {
    try {
        const data = yield call(getCheckLogin, action.payload);
        yield put(yield put(loginSuccess(data.code)));
    } catch (e) {
        yield put(loginFailure(e));
    }
}