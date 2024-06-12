import React, { useEffect, useRef } from "react";

const Home = () => {
  const refElement = useRef();

  const handleRef = () => {
    refElement.current.focus();
    refElement.current.value = "Gul khan";
    refElement.current.style.color = "red";
  };
  return (
    <div>
      <h1>useRef() HOOK</h1>
      <div>
        <input ref={refElement} type="text" />
        <button onClick={handleRef}>focusInput</button>
      </div>
    </div>
  );
};

export default Home;
