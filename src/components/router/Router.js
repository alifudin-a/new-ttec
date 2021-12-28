import React, { lazy, Suspense, useContext } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { AuthContext } from "../pages/login/context/LoginContext";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

const Login = lazy(() => import("../pages/login/components/Login"));
const Loss = lazy(() => import("../pages/loss/components/Loss"));

const Router = () => {
  const [user] = useContext(AuthContext);

  const PrivateRoute = ({ user, ...props }) => {
    if (user) {
      return <Outlet {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  // const LoginRoute = ({ user, ...props }) =>
  //   user ? <Navigate to="/" /> : <Route {...props} />;

  const LoginRoute = ({ user, ...props }) => {
    return user ? <Navigate to="/" /> : <Outlet {...props} />;
  };

  return (
    <Suspense
      fallback={
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      }
    >
      <Routes>
        <Route exact path="/login" element={<LoginRoute user={user} />}>
          <Route exact path="/login" element={<Login />} />
        </Route>
        <Route exact path="/" element={<PrivateRoute user={user} />}>
          <Route exact path="/" element={<Loss />} />
        </Route>
        <Route element={<div>Not Found</div>} />
      </Routes>
    </Suspense>
  );
};

export default Router;
