import { createAction, handleActions } from 'redux-actions';

//3-2 액션 타입 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//3-1 액션 생성함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

//2.리듀서:데이터를 변화시키는 함수
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }), //액션을 전달하기 위해서는 디스패치를 이용한다.
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState
);

export default counter;
