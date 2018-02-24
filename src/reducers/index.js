/**
 * Created by Administrator on 2017/5/12.
 */
import { combineReducers } from 'redux'
import count from './count'
import cart from './cart'
import history from './history'
import background from './background'

const counts = combineReducers({
  count,
  cart,
  history,
  background
});

export default counts;
