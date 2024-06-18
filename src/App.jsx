import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./forms/Contact";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout";
import DataList from "./forms/DataList";
import ContactUpdate from "./forms/ContactUpdate";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contactupdate/:id" element={<ContactUpdate />} />
        <Route path="/about" element={<About />} />
        <Route path="/datalist" element={<DataList />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
