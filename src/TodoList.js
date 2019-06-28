import React, { Component } from 'react';

import store from './store/store';
import TodolistUI from './TodoListUI';
// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'

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