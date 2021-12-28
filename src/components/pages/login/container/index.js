import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import Login from "../components/Login";

const LoginIndex = () => {
  const { path } = useMatch();
  console.log("path :", path)

  return (
    <Routes>
      <Route path={path} element={<Login />} />
    </Routes>
  );
};

export default LoginIndex;
