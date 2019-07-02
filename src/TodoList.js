import React, { Component } from 'react';
import { connect } from 'react-redux'  //引用的只是react-redux里的部分，所以要用解构赋值
class TodoList extends Component {
  constructor(props) {
    super(props)
    // this.state = store.getState()
  }
  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={ this.props.changeInputValue }></input>
          <button onClick={this.props.handleBtnClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return ( <li key={index} onClick={ () => {
                this.props.handleDeleteItem(index)
              } }>{item}</li>)
            })
          }
        </ul>
      </div>
    )
  }

 

}



//把store里的数据映射到组件的props里  
const mapStateToProps = (state) => {  //state参数里的数据就是store内的数据
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

// store.dispatch, props 把store.dispatch方法映射到props里  通过props调用dispatch里的方法改变store的值
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },

    handleBtnClick() {
      console.log(this.props.list)
      // console.log(this.props.inputValue)
      const action = {
        type: 'add_todo_item',
        // value: this.props.inputValue
      }
      dispatch(action)
    },

    handleDeleteItem: (index) => {
      const action = {
        type: 'delete_item',
        index
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);  // connect方法与Provider做连接  获取store里的数据