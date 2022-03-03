import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const useAuth = () => {
  const user = localStorage.getItem("USER_INFO");
  if (user) {
    return true;
  } else {
    return false;
  }
};

export default function ProtectedRoutes() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/SignIn" />;
}
