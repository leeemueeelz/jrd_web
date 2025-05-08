import React, { useState } from "react";

import page1 from "../src/images/jrd_1.jpeg";
import page2 from "../src/images/jrd_2.jpeg";
import page3 from "../src/images/jrd_3.jpeg";
import page4 from "../src/images/jrd_4.jpeg";
import page5 from "../src/images/jrd_5.jpeg";
import page6 from "../src/images/jrd_6.jpeg";
import page7 from "../src/images/jrd_7.jpeg";

const pages = [page1, page2, page3, page4, page5, page6, page7];

const Lore = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [animate, setAnimate] = useState(false);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setAnimate(false); // Reinicia
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setAnimate(true);
      }, 10);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setAnimate(false);
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setAnimate(true);
      }, 10);
    }
  };

  return (
    <section className="text-center section bg-black p-4 bg-opacity-75">
      <h2 className="mb-3">Lore</h2>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <div className="book-page shadow-lg mb-3" style={{ width: "90%", maxWidth: "500px", height: "auto" }}>
        <img
          src={pages[currentPage]}
          alt={`Page ${currentPage + 1}`}
          className={`img-fluid rounded page-img ${animate ? "page-flip" : ""}`}
          onClick={nextPage}
        />
        </div>
        <div className="d-flex gap-3 justify-content-center">
          <button className="btn btn-outline-warning" onClick={prevPage} disabled={currentPage === 0}>
            ←
          </button>
          <span className="text-warning fw-bold">{currentPage + 1} / {pages.length}</span>
          <button className="btn btn-outline-warning" onClick={nextPage} disabled={currentPage === pages.length - 1}>
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Lore;
