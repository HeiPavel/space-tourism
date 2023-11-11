import React from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { Root } from "../Root/Root";
import { Home } from "../Home/Home";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;