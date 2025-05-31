import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

import page1 from "../resources/images/jrd_1.jpeg";
import page2 from "../resources/images/jrd_2.jpeg";
import page3 from "../resources/images/jrd_3.jpeg";
import page4 from "../resources/images/jrd_4.jpeg";
import page5 from "../resources/images/jrd_5.jpeg";
import page6 from "../resources/images/jrd_6.jpeg";
import page7 from "../resources/images/jrd_7.jpeg";

const pages = [page1, page2, page3, page4, page5, page6, page7];

const Lore = () => {
  const bookRef = useRef();

  return (
    <section className="text-center section bg-black p-4 bg-opacity-75">
      <h2 className="mb-4 text-warning">Lore</h2>

      {/* Aislamos completamente el flipbook del entorno Bootstrap */}
      <div className="my-flipbook-wrapper">
        <HTMLFlipBook
          width={320}
          height={480}
          size="fixed"
          minWidth={320}
          maxWidth={320}
          minHeight={480}
          maxHeight={480}
          showCover={false}
          mobileScrollSupport={true}
          ref={bookRef}
        >
          {pages.map((img, index) => (
            <div key={index} className="page" onClick={() => bookRef.current.pageFlip().flipNext()}>
              <img src={img} alt={`Page ${index + 1}`} />
            </div>
          ))}
        </HTMLFlipBook>
      </div>

      <div className="mt-4 d-flex justify-content-center gap-3">
        <button className="btn btn-outline-warning" onClick={() => bookRef.current.pageFlip().flipPrev()}>
          ←
        </button>
        <button className="btn btn-outline-warning" onClick={() => bookRef.current.pageFlip().flipNext()}>
          →
        </button>
      </div>
    </section>
  );
};

export default Lore;
