import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import App from './App';
// TODO Reducer ##DONE
// import rootReducer from './reducers'
import './index.css';
// const store = createStore(
//   rootReducer, 
//   applyMiddleware(thunk)
// )
injectTapEventPlugin()
ReactDOM.render(
  // <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  // </Provider>
  ,
  document.getElementById('root')
);