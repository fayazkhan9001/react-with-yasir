import React from "react";
import { deposit, withdraw } from "./redux/bankReducer";
import { useSelector, useDispatch } from "react-redux";
const About = () => {
  const dispatch = useDispatch();
  const { bank } = useSelector((a) => a);

  const depositAmount = () => {
    dispatch(deposit());
  };

  const withdrawAmount = () => {
    dispatch(withdraw());
  };
  return (
    <div>
      <div
        style={{
          margin: 10,
          textAlign: "center",
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        <button style={{ marginRight: 10 }} onClick={depositAmount}>
          Deposit
        </button>
        <button onClick={withdrawAmount}>Withdraw</button>
        <p>{bank.value}</p>
      </div>
    </div>
  );
};

export default About;
