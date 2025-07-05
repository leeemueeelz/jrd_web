import React, { useState } from "react";
import "../../resources/Gallery.css";
import ModalViewPic from "./ModalViewPic";

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../resources/gallery', false, /\.(png|jpe?g|webp)$/)).sort((a, b) => a.localeCompare(b));

const index = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container py-5 gallery-wrapper">
      <h1 className="text-center mb-4 mt-5 text-center text-warning levitate">RACCON GALLERY</h1>
      <div className="row g-3">
        {images.map((img, index) => (
          <div className="col-6 col-sm-4 col-md-3" key={index}>
            <div className="gallery-image" onClick={() => openModal(img)}>
              <img src={img} alt={`Raccon ${index}`} className="img-fluid rounded shadow" />
            </div>
          </div>
        ))}
      </div>
      {selectedImage && <ModalViewPic imgSrc={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default index;
