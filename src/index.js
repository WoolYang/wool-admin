import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Routes from './routes/routes';

import registerServiceWorker from './registerServiceWorker';

import './styles/base.less';

const render = Component => {
    ReactDOM.render(
        <Provider store={store} >
            <Component />
        </Provider>
        , document.getElementById('app')
    );
};

render(Routes);

registerServiceWorker();