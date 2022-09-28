import React from "react";
import { Routes, Route } from "react-router-dom";
import Mounting from "./mounting";
import Updating from "./updating"
import UnMounting from "./unmounting"

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<Mounting />} />
      <Route path="/updating" element={<Updating />} />
      <Route path="/unmounting" element={<UnMounting />} />
    </Routes>
  </main>
);

export default Main;