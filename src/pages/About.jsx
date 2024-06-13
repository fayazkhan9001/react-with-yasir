import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./redux/depositeReducer";
const About = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state);

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
        <p>${value}</p>
      </div>
    </div>
  );
};

export default About;
