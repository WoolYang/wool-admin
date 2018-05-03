import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [thunk, sagaMiddleware];

if (process.env.NODE_ENV !== 'prod') {
    middleware.push(createLogger());
}

const store = createStore(reducer,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

export default store;