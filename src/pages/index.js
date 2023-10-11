import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./reducers/counterSlice";
import MyHeader from "./components/MyHeader";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
    <MyHeader />
      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={() => {dispatch(increment())}}>INCREMENT</button>
      </div>
      <div>
        <button onClick={() => {dispatch(decrement())}}>DECREMENT</button>
      </div>
    </>
  );
}
