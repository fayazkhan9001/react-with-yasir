import React from "react";
import { useSelector } from "react-redux";
const Home = () => {
  const { bank } = useSelector((a) => a);
  return <div>Home ${bank.value}</div>;
};

export default Home;
