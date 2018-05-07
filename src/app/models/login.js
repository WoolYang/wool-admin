import { getCheckLogin } from '../../api/api';
export default {
    namespace:'login',
    state:  {
        data: null,      //登陆返回信息
        fetching: false,
        fetched: false,
        error: null
    },
    reducer: {
        loginStart(state) {
            return { ...state, fetching: true };
        },
        loginSuccess(state, { payload }) {
            return { ...state, fetching: false, fetched: true, data: payload };
        },
        loginFailure(state, { payload }) {
            return { ...state, fetching: false, error: payload };
        }
    },
    effects: {
        *loginRequest({ call, put }, { payload }) {
            try {
                yield put({ type: 'loginStart' });
                const data = yield call(getCheckLogin, { ...payload });
                yield put({ type: 'loginSuccess', payload: data });
            } catch (e) {
                yield put({ type: 'loginFailure', payload:e });
            }
        }
    }
};