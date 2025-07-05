
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./resources/App.css";
import "./resources/animations.css";
import "./resources/JrdBirth.css";
import NavBar from "./components/global/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Gallery from "./components/Gallery/index";

const App = () => {
  return (
    <div className="app-wrapper text-white">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
};

export default App;
