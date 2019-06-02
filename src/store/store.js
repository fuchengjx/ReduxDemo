import { createStore } from 'redux';
import reducer from './reducer'  //reducer 
 
const store = createStore(reducer);  //将reducer传入 创建store  store可以去reducer中查看数据了

export default store;