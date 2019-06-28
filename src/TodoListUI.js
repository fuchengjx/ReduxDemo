import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {Input, Button, List} from 'antd';

class TodoListUI extends Component {
  render() {
    return (
      <div style={{marginTop: '10px', marginLeft:'10px'}}>
        <div>
          <Input value={this.props.inputValue} placeholder='todo info' style={{width: '300px'}}
                 onChange={this.props.handleInputChange}
          ></Input>
          <Button type='primary' onClick={this.props.handleBtnClick}>提交</Button>
        </div>
        <List
          style={{marginTop: '10px', width:'300px'}}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}>
        </List>
      </div>
    )
  }
}

export default TodoListUI;