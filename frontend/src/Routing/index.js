import React from "react";
import Home from "../Common/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Common/Login";
import Signup from "../Common/Signup";
import PrivateUserRoute from "./PrivateUserRoute";
import PrivateAdminRoute from "./PrivateAdminRoute";
import Wishlist from "../Components/User/Wishlist/Wishlist";
import Cart from "../Components/User/Cart/Cart";
import { useSelector } from "react-redux";
import AdminHome from "../Components/Admin/AdminHome";
import AdminProducts from "../Components/Admin/AdminProducts";

export const Routing = () => {
  const userType = useSelector((state) => state.auth.user.role);

  console.log("uyserType", userType);

  return (
    <Router>
      <Routes>
        {userType === "USER" ? (
          <Route
            path="/"
            element={
              <PrivateUserRoute>
                <Home />
              </PrivateUserRoute>
            }
          />
        ) : userType === "ADMIN" ? (
          <Route
            path="/"
            element={
              <PrivateAdminRoute>
                <AdminHome />
              </PrivateAdminRoute>
            }
          />
        ) : (
          <></>
        )}

        <Route
          path="/products"
          element={
            <PrivateAdminRoute>
              <AdminProducts />
            </PrivateAdminRoute>
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
