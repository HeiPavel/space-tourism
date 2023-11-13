import React from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { Root } from "../Root/Root";
import { Home } from "../Home/Home";
import { Destination } from "../Destination/Destination";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>} />
    <Route path="destination" element={<Destination/>} />
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;