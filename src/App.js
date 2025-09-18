import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import PrismProject from "./components/PrismProject";
import Contact from "./components/Contact";
import Models from "./components/Models";
import CarModding from "./components/CarModding";


function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/prism" element={<PrismProject />} />
          <Route path="/contact" element={<Contact contactEmail="axivioninstruments@gmail.com" />} />
          <Route path="/models" element={<Models />} />
          <Route path="/car-modding" element={<CarModding />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
