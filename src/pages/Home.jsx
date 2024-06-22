import React from "react";

const Home = () => {
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((response) => response.json())
    .then((data) => console.log(data));
  return <div>Home </div>;
};

export default Home;
