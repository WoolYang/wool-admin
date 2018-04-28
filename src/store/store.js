import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const middleware = [thunk];

if (process.env.NODE_ENV !== 'prod') {
    middleware.push(createLogger());
}

const store = createStore(reducer,
    applyMiddleware(...middleware)
);

export default store;