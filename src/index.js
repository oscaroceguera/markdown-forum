import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import App from './containers/App';
import './styles/index.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import * as reducers from './reducers'
import rootSaga from 'sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({ ...reducers}),
  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

sagaMiddleware.run(rootSaga)

const MyApp = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
)

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
