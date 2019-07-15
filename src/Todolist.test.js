import * as actions from './store/actionCreators'
import * as types from './store/actionTypes'

describe('actions', () => {
  test('should create an action equal', () => {
    const value = '我要改变input value'
    const expectdAction = {
      type: types.CHANGE_INPUT_VALUE,
      value
    }
    expect(actions.getInputChangeAction(value)).toEqual(expectdAction)
  });
});