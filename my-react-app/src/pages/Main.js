import React from "react";
import { Routes, Route } from "react-router-dom";
import Mounting from "./mounting";
import Updating from "./updating";
import UnMounting from "./unmounting";
import JSX from './jsx';
import Stateandprops from "./StateandProps";
import Reactprops from "./Reactprops";
import ConditionalRendering from "./Conditionalrendering";
import Logical from "./Inlineifwithlogical";
import Ternary from "./inlineifwithternary";
import ListandKeys from './Listandkeys';
import HOC from "./HOC";
import HOCcount from "./HOCcount";

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Mounting />} />
      <Route path="/updating" element={<Updating />} />
      <Route path="/unmounting" element={<UnMounting />} />
      <Route path="/jsx" element={<JSX />} />
      <Route path="/stateandprops" element={<Stateandprops />} />
      <Route path="/reactprops" element={<Reactprops />} />
      <Route path="/conditionalrendering" element={<ConditionalRendering />} />
      <Route path="/inlineifwithlogical" element={<Logical />} />
      <Route path="/inlineifwithternary" element={<Ternary />} />
      <Route path="/listandkeys" element={<ListandKeys />} />
      <Route path="/hoc" element={<HOC />} />
      <Route path="/hocCount" element={<HOCcount />} />
    </Routes>
  </main>
);

export default Main;