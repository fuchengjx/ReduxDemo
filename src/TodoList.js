import React, { Component } from 'react';

import store from './store/store';
import TodolistUI from './TodoListUI';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
import {getTodoList, getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange); //监听 当store发生变化的时候 执行handleStoreChange
  }
  render() {
    return (
      <TodolistUI 
        inputValue={this.state.inputValue} 
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
        />
    )
  }

  componentDidMount() {
    console.log("DidMount")  //生命周期里放入异步函数  会越来越臃肿   所以引入redux-thunk  action可以返回一个函数 而不单单是一个对象。
    const action = getTodoList();  // 创建一个 action函数
    store.dispatch(action)
    console.log(action)
  }

  handleInputChange(e) {
    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // }
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState()) //当感知到store发生变化后 重新获取一遍数据(获取到了newState) 然后更新视图
  }

  handleBtnClick() {
    // const action = {
    //   type: ADD_TODO_ITEM,
    //   value: this.state.inputValue
    // }
    const action = getAddItemAction(this.state.inputValue)
    store.dispatch(action)
  }

  handleItemDelete(index) {
    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   index
    // }
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;