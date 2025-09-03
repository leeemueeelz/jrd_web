
import React, { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./resources/App.css";
import "./resources/animations.css";
import "./resources/JrdBirth.css";
import NavBar from "./components/global/NavBar";
import { Routes, Route } from "react-router-dom";
import "./resources/Lore.css";
import Footer from "./components/global/Footer";
import LoadingSkeleton from "./helpers/LoadingSkeleton";

const Home = lazy(() => import("./components/Home/index"));
const Gallery = lazy(() => import("./components/Gallery/index"));
const About = lazy(() => import("./components/About/index"));

const App = () => {
  return (
    <div className="text-white">
      <NavBar />
      <br/><br/>
      <Suspense fallback={<LoadingSkeleton />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
