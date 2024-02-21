import React from "react";
import Home from "../Common/Home";
import { Route, Router, Routes } from "react-router-dom";

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
