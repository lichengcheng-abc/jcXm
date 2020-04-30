import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {
  BrowserRouter as Router,
} from 'react-router-dom'

import store from './store'
import {
  Provider
} from 'react-redux'

import axios from 'axios'

// 引入全局的样式
import './assets/css/index.css'

// 移动端适配
import "lib-flexible"


// 拦截
axios.interceptors.request.use(config=>{
  config.url = '/api' + config.url
  return config
})
axios.interceptors.response.use(({data})=>{
 
  return data
})




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
