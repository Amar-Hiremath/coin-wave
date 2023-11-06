import React from "react";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<Coin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
