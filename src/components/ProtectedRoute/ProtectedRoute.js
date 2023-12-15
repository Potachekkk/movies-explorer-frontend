import React, { useContext } from "react";
import { Navigate } from "react-router-dom/dist";
import { LoggedInContext } from "../context/LoggedInContext";

const ProtectedRoute = ({ children }) => {
  const loggedIn = useContext(LoggedInContext);

  if (!loggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
