import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configStore from './root/store';


ReactDOM.render(
  <Provider store={configStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
);