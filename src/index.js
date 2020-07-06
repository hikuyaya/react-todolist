import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todolist from './Todolist';
import * as serviceWorker from './serviceWorker';

// PWA：Progressive web application
// 将服务部署在 https 协议的服务器上，用户断网之后仍然可以访问到

ReactDOM.render(
  <React.StrictMode>
    <Todolist />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
