import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import InnerContent from "./InnerContent";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import Home from "./../pages/Home";
import Contact from "../pages/Contact";
import SignIn from "./../pages/SignIn";
import Notfound from "./../pages/Notfound";

const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}

    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="Home" />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Route>

    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path="SignIn" element={<PublicRoutes />}>
      <Route path="/SignIn" element={<SignIn />} />
    </Route>
  </Routes>
);

export default MainRoutes;
