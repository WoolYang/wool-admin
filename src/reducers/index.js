import { combineReducers } from 'redux';
import login from './login';
import dashboard from './dashboard';

const reducer = combineReducers({
    login,
    dashboard
});

export default reducer;
