## redux学习笔记



createStore  可以帮助我们创建一个store

store.dispatch  帮助我们派发action 这个action会传递给store

store.getState  获取到store里面所有的数据内容

store.subscribe  可以让我们订阅(监听) store的改变 只要store发生改变， 这个方法的回调函数就会执行。



## react-redux

[Redux](https://github.com/reactjs/redux) 官方提供的 React 绑定库。 具有高效且灵活的特性。

### 安装

React Redux 依赖 **React 0.14 或更新版本。**

```
npm install --save react-redux
```

```
yarn add react-redux
```

