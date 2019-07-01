const defaultState = {
  inputValue: 'defaultValue',
  list: ['wsdfio', 'jsiodfj', ' 563415634']

}

// reducer 可以接受state， 但是绝对不能修改state
// reducer 必须是纯函数  纯函数指的是，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {  //state指的应该是上次传过来的previousState， action就是dispatch传过来的那句话
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))  //对之前的state做一次深拷贝
    newState.inputValue = action.value
    return newState;
  }
  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.value) // newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState;
  }
  if (action.type === 'delete_todo_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState;
  }
  if (action.type === 'init_list_action') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.data)
  }
    return state;
}