import { takeEvery } from 'redux-saga/effects';

import { loginAsync } from './login';
import { getDashboardAsync } from './dashboard';
import { LOGIN_REQUEST } from 'actions/login';
import { DASHBOARD_REQUEST } from 'actions/dashboard';

//根saga，监控任务调度
export default function* rootSaga() {
    yield [
        takeEvery(LOGIN_REQUEST, loginAsync),
        takeEvery(DASHBOARD_REQUEST, getDashboardAsync)
    ];
}