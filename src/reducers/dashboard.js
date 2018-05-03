import { DASHBOARD_REQUEST,DASHBOARD_SUCCESS,DASHBOARD_FAILURE } from 'actions/dashboard';

const initialState = {
    cardList:[],
    error: null
};

const dashboard = (state = initialState, action) => {
    switch (action.type) {

    case DASHBOARD_REQUEST:
        return {
            ...state
        };
    case DASHBOARD_SUCCESS:
        return {
            ...state,
            ...action.payload
        };
    case DASHBOARD_FAILURE:
        return {
            ...state,
            error: action.payload
        };
    default:
        return state;
    }
};

export default dashboard;