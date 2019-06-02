import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';
import store from './store/store'

// const data = [
//   'RRRRRR  RRRRRRRRRRR  RRRRRRR',
//   'jjjjjj jj  jjjjjjjjj',
//   'ggggqw sdf jio  uiashdf',
//   'qwejr isodf j ghuiy h uihsdfh',
//   'ql  ioasdhfg jo uiohsfd uis fui9h i fsd'
// ]
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    console.log(this.state)
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
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleStoreChange() {
    console.log("store Change")
    this.setState(store.getState()) //当感知到store发生变化后 重新获取一遍数据(获取到了newState) 然后更新视图
  }

  handleBtnClick() {
    const action = {
      type: 'change_list_value',
      value: this.state.inputValue
    }
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = {
      type: 'delete_todo_item',
      index
    }
    store.dispatch(action)
  }
}

export default TodoList;