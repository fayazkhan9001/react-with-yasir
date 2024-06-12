import React, { createContext } from "react";
import Home from "./pages/Home";

//What is useContext HOOK
//create, Provider, useContext
//How to use it.

//1-create context
const data = createContext();
const data1 = createContext();

const App = () => {
  const name = "ali";
  const age = 23;
  return (
    <div>
      {/* 2-Contex Provider */}
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <Home />
        </data1.Provider>
      </data.Provider>
    </div>
  );
};

export default App;

//3-export
export { data, data1 };
