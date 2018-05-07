import { getDashboardData } from '../../api/api';
export default {
    namespace:'dashboard',
    state: {
        cardList:[],
        error: null
    },
    reducer: {
        dashboardSuccess(state, { payload }) {
            return { ...state, ...payload };
        },
        dashboardFailure(state, { payload }) {
            return { ...state,  error: payload };
        }
    },
    effects: {
        *dashboardRequest({ call, put }) {
            try {
                const data = yield call(getDashboardData);
                yield put({ type: 'dashboardSuccess', payload:data });
            } catch (e) {
                yield put({ type: 'dashboardFailure', payload:e });
            }
        }
    }
};
