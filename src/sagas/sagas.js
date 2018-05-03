import { takeEvery } from 'redux-saga/effects';

import { loginAsync } from './login';
import { LOGIN_REQUEST } from '../actions/login';

//根saga，监控任务调度
export default function* rootSaga() {
    yield [
        takeEvery(LOGIN_REQUEST, loginAsync)
    ];
}