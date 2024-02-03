import React from "react";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import CryptoMarket from "./pages/CryptoMarket";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import"./App.css"

function App() {
  return (
    
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<Coin />} />
        <Route path="/crypto-market" element={<CryptoMarket />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
