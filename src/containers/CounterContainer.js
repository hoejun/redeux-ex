import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../modules/counter';

//리덕스 스토어와 컴포넌트를 이어주는 매개체를 담는 폴더
const CounterContainer = () => {
  //state 조회
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  //생성한 action을 디스패치를 통해 발생
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

  return <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}></Counter>;
};

export default CounterContainer;
