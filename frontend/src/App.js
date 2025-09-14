import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import PrismProject from "./components/PrismProject";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/prism" element={<PrismProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;