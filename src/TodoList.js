import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store/store';

// import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './store/actionTypes'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)

    store.subscribe(this.handleStoreChange); //监听 当store发生变化的时候 执行handleStoreChange
  }
  render() {
    return (
      <div style={{marginTop: '10px', marginLeft:'10px'}}>
        <div>
          <Input value={this.state.inputValue} placeholder='todo info' style={{width: '300px'}}
                 onChange={this.handleInputChange}
          ></Input>
          <Button type='primary' onClick={this.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)}>
        </List>
      </div>
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