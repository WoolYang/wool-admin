


/**
 * Created by Administrator on 2018-2.
 */
import { CHECK_LOGIN } from '../constants/ActionTypes';

const initialState = {
    isLogin: false
}; 

const background = (state = initialState, action) => {
    switch (action.type) {
    case CHECK_LOGIN:
        return {
            ...state,
            isLogin: true
        };
    default:
        return state;
    }
};
export default background;