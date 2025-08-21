import React, { useState } from "react";
import logo from "../resources/images/jrd_wb.png";
import prtd from "../resources/images/prtd.jpeg";
import cnprtdprtd from "../resources/images/cnprtd.jpeg";
import img1 from "../resources/images/jrd_1.jpeg";
import img2 from "../resources/images/jrd_2.jpeg";
import img3 from "../resources/images/jrd_3.jpeg";
import img4 from "../resources/images/jrd_4.jpeg";
import img5 from "../resources/images/jrd_5.jpeg";
import img6 from "../resources/images/jrd_6.jpeg";
import img7 from "../resources/images/jrd_7.jpeg";

const images = [prtd, cnprtdprtd, img1, img2, img3, img4, img5, img6, img7];

const Lore = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipDirection, setFlipDirection] = useState("");

  const goNext = () => {
    if (currentPage < images.length - 1) {
      setFlipDirection("flip-right");
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setFlipDirection("");
      }, 300);
    }
  };

  const goPrev = () => {
    if (currentPage > 0) {
      setFlipDirection("flip-left");
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setFlipDirection("");
      }, 300);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-start position-relative">
        {/* LORE SOLO EN PC */}
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h2 className="text-center">Japanese Raccon Dog - 狸</h2>
          <div className="d-flex justify-content-center align-items-center position-relative mb-3">
            <div
              className="text-warning position-absolute start-0 translate-middle-y"
              style={{ top: "50%" }}
              onClick={() => document.getElementById("JRD birth")?.scrollIntoView({ behavior: "smooth" })}
            >
              <h2 className="text-glow-light">JRD Birth</h2>
            </div>

            <img
              src={logo}
              alt="JRD Logo"
              className="mb-1 levitate d-block mx-auto"
              style={{ width: "170px", height: "auto" }}
            />

            <div
              className="lore-card position-absolute end-0 translate-middle-y"
              style={{ top: "50%" }}
              onClick={() => document.getElementById("Roadmap")?.scrollIntoView({ behavior: "smooth" })}
            >
              <h2 className="text-glow-light">Roadmap</h2>
            </div>
          </div>


          <div
            className="lore-card text-center mx-auto"
            onClick={() => document.getElementById("CTA")?.scrollIntoView({ behavior: "smooth" })}
          >
            <h2 className="text-glow-light">Community</h2>
          </div>
          <p className="mt-1 text-justify-mobile">
              <span className="text-warning">_______________________________________________<br/>
                Welcome to the World of <b>JRD</b></span><br/><br/>

              In a world where AI is within everyone’s reach, the opportunity to earn from home has never been more real.

              Imagine creating original, impactful, and monetizable content in minutes — no experience needed, just your idea.

              At the heart of it all is Raccoon, the spirit of the project. A mischievous visionary with one goal: to help you turn creativity into real value.

              Join the new revolution in content creation.
          </p>
        </div>
        {/* COMIC */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center position-relative"
        >
          <div className="flip-wrapper">
            <div className={`flip-page ${flipDirection}`}>
              <img
                src={images[currentPage]}
                alt={`comic-page-${currentPage}`}
                className="img-fluid rounded"
              />
            </div>

            {/* Botón izquierda */}
            {currentPage > 0 && (
              <button className="flip-btn left" onClick={goPrev} aria-label="Anterior" />
            )}

            {/* Botón derecha */}
            {currentPage < images.length - 1 && (
              <button className="flip-btn right" onClick={goNext} aria-label="Siguiente" />
            )}
          </div>

          <div className="mt-3 text-white">
            Page ({currentPage + 1} / {images.length})
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lore;