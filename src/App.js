import React from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import PrismProject from "./components/PrismProject";

// 👇 Utility component to reset scroll on route change
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
