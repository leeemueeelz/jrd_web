import React, { useState } from "react";
import img1 from "../resources/images/jrd_1.jpeg";
import img2 from "../resources/images/jrd_2.jpeg";
import img3 from "../resources/images/jrd_3.jpeg";
import img4 from "../resources/images/jrd_4.jpeg";
import img5 from "../resources/images/jrd_5.jpeg";
import img6 from "../resources/images/jrd_6.jpeg";
import img7 from "../resources/images/jrd_7.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

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
        <div className="col-md-4 d-none d-md-block">
          <div className="text-white p-3 bg-dark rounded shadow">
            <h5>Raccoon Lore</h5>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non fermentum odio. Sed fringilla velit vel sapien ornare.
            </p>
          </div>
        </div>

        {/* COMIC */}
        <div className="col-12 col-md-6 d-flex flex-column align-items-center position-relative">
          {/* LORE MOBILE */}
          <div className="d-md-none text-white mb-3 p-2 bg-dark rounded shadow w-100">
            <h5>Raccoon Lore</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

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