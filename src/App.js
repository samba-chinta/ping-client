import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/auth/register" element={<RegisterPage />} exact />
        <Route path="/auth/login" element={<LoginPage />} exact />
        <Route path="*" element={<h1>This page not exists</h1>} />
      </Routes>
    </div>
  );
}

export default App;
