import React from 'react'
import ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Main from './components/Main'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

import 'antd/dist/antd.less'

import { getAllProducts } from './actions'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'prod') {
  middleware.push(createLogger())
}

const store = createStore(reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

const render = Component => {
  ReactDOM.render(
    <Provider store={store} >
      <Component />
    </Provider>
    , document.getElementById('app')
  )
}

render(hot(module)(Main))