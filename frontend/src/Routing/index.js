import React from "react";
import Home from "../Common/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Common/Login";
import Signup from "../Common/Signup";
import PrivateUserRoute from "./PrivateUserRoute";
import Wishlist from "../Components/User/Wishlist/Wishlist";
import Cart from "../Components/User/Cart/Cart";

export const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateUserRoute>
              <Home />
            </PrivateUserRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateUserRoute>
              <Wishlist />
            </PrivateUserRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateUserRoute>
              <Cart />
            </PrivateUserRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};
