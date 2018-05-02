/**
 * Created by Administrator on 2017/5/12.
 */
import { combineReducers } from 'redux';
import count from './count';
import login from './login';

const counts = combineReducers({
    count,
    login
});

export default counts;
