import React, { useContext } from "react";
import { data, data1 } from "../App";
const Child3 = () => {
  const name = useContext(data);
  const age = useContext(data1);
  return (
    <div>
      Child3
      <h1>
        Hi my name is {name} and my age is {age}.
      </h1>
    </div>
  );
};

export default Child3;
