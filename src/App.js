
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./resources/App.css";
import "./resources/animations.css";
import "./resources/JrdBirth.css";
import NavBar from "./components/global/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Gallery from "./components/Gallery/index";
import "./resources/Lore.css";
import Footer from "./components/global/Footer";

const App = () => {
  return (
    <div className="app-wrapper text-white">
      <NavBar />
      <br/><br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
