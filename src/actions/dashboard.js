export const DASHBOARD_REQUEST = 'DASHBOARD_REQUEST';
export const DASHBOARD_SUCCESS = 'DASHBOARD_SUCCESS';
export const DASHBOARD_FAILURE = 'DASHBOARD_FAILURE';

export const dashboardRequest = () => {
    return {
        type: DASHBOARD_REQUEST
    };
};

export const dashboardSuccess = (data) => {
    return {
        type: DASHBOARD_SUCCESS,
        payload: data
    };
};

export const dashboardFailure = (error) => {
    return {
        type: DASHBOARD_FAILURE,
        payload: error
    };
};
