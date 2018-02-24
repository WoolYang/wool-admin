import 'core-js/fn/object/assign'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore ,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Main from './components/Main'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

import 'antd/dist/antd.less'

import { getAllProducts } from './actions'

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'prod') {
  middleware.push(createLogger())
}

const store = createStore(reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())
// Render the main component into the dom
const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={ store } >
        <Component />
      </Provider>
    </AppContainer>
    ,document.getElementById('app')
  )
}

render(Main)

if (module.hot) {
  module.hot.accept('./components/Main', () => {
    const nextUpload = require('./components/Main').default;
    render(nextUpload);
  })
}
