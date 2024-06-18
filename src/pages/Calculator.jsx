import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, sub } from "./redux/calcReducer";
const Calculator = () => {
  const { calculator } = useSelector((a) => a);

  const dispatch = useDispatch();
  const handlePlus = () => {
    dispatch(add());
  };
  const handleMinus = () => {
    dispatch(sub());
  };
  return (
    <div>
      <h1 style={{ margin: 20, padding: 10 }}>
        <button onClick={handlePlus}>+</button>
        <span>{calculator.value}</span>
        <button onClick={handleMinus}>-</button>
      </h1>
    </div>
  );
};

export default Calculator;
