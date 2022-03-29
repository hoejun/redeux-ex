import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

//2.리듀서 : 데이터를 변화시키는 함수
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
