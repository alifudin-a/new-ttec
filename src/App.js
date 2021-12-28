import React, { useEffect } from "react";
// import logo from './logo.svg';
// import './App.css';
import Wrapper from "./components/layout/Wrapper";
import { LoginProvider } from "./components/pages/login/context/LoginContext";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  useEffect(() => {
    const elem = document.getElementById("wrapper");
    window.onload = () => {
      if (elem) {
        elem.remove();
      }
    };
  });

  return (
    <Router>
      <LoginProvider>
        <Wrapper />
      </LoginProvider>
    </Router>
  );
}

export default App;
