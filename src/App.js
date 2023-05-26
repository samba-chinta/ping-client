import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="*" element={<h1>This page not exists</h1>} />
      </Routes>
    </div>
  );
}

export default App;
