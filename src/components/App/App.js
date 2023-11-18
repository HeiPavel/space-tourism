import React from "react";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { Root } from "../Root/Root";
import { Home } from "../Home/Home";
import { Destination } from "../Destination/Destination";
import { Planet } from "../Planet/Planet";
import { Crew } from "../Crew/Crew";
import { Person } from "../Person/Person";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>} />
    <Route path="destination" element={<Destination/>}>
      <Route path=":object" element={<Planet/>} />
    </Route>
    <Route path="crew" element={<Crew/>}>
      <Route path=":person" element={<Person/>} />
    </Route>
  </Route>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;