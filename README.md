### 简介

这是一个react-redux做的 todolist 小demo

#### redux学习笔记

createStore  可以帮助我们创建一个store

store.dispatch  帮助我们派发action 这个action会传递给store

store.getState  获取到store里面所有的数据内容

store.subscribe  可以让我们订阅(监听) store的改变 只要store发生改变， 这个方法的回调函数就会执行。



redux-thunk中间件 可以使action返回的不单单只是一个对象，还可以是一个函数

![](https://raw.githubusercontent.com/fuchengjx/Todolist/master/)

#### react学习

1. 尽量将UI组件与容器组件分离开来。 UI组件内部只有一个render函数负责渲染页面。 容器组件负责其它函数及数据的逻辑操作。容器组件(父组件)与UI组件(子组件）通过props传递数据。 

2. 如果UI组件只有render函数 可以把它定义为无状态组件。无状态函数创建的是无状态组件，它只是一种只负责展示的纯组件。

   **使用无状态组件的好处**

   - 无状态组件的简洁性
   - 没有 this「由于使用的是箭头函数事件无需绑定」
   - 便于测试
   - 没有生命周期钩子，速度快。



<<<<<<< HEAD
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
# ReduxDemo
>>>>>>> 183c4272293cfa22db372ebc4e13da6d9f7b76cd
