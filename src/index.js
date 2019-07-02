import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import store from './store'

import TodoList from './TodoList'
import * as serviceWorker from './serviceWorker';


//自定义App组件  Provider组件将store全部提供给被它包裹的组件。 Provider内部的组件都可以获得store里的数据。
const App = (
  <Provider store={store}>
    <TodoList/>
  </Provider>
)


ReactDOM.render(App, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
