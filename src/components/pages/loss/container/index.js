import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";
import Loss from "../components/Loss";

const LossIndex = () => {
  const { path } = useMatch();

  return (
    <Routes>
      <Route path={path} element={<Loss />} />
    </Routes>
  );
};

export default LossIndex;
