import React, { useRef, useEffect } from "react";
import { Modal } from "bootstrap";
import { FaRegCopy } from 'react-icons/fa';
import xIcon from "../../resources/images/iconx.png";

const ModalViewPic = ({ imgSrc, onClose }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      const modal = new Modal(modalRef.current);
      modal.show();

      const handleHide = () => onClose?.();
      modalRef.current.addEventListener("hidden.bs.modal", handleHide);

      return () => {
        if (modalRef.current) {
          modalRef.current.removeEventListener("hidden.bs.modal", handleHide);
        }
      };
    }
  }, [imgSrc, onClose]);

  const handleCopy = () => {
    const text = `${window.location.origin}${imgSrc} #JRD #JapaneseRacconDog`;
    navigator.clipboard.writeText(text).then(() => {
      alert("URL copiada al portapapeles.");
    });
  };

  const handleTwitterShare = () => {
    const tweetText = encodeURIComponent(`${window.location.origin}${imgSrc} #JRD #JapaneseRacconDog`);
    const twitterURL = `https://x.com/intent/tweet?text=${tweetText}`;
    window.open(twitterURL, '_blank');
  };

  return (
    <div
      ref={modalRef}
      className="modal fade"
      id="galleryModal"
      tabIndex="-1"
      aria-labelledby="galleryModalLabel"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-white">
          <div className="modal-body text-center">
            <img src={imgSrc} alt="Selected" className="img-fluid rounded" />
          </div>
        <div className="modal-footer border-0 d-flex justify-content-center">
          <div className="d-flex gap-2 flex-wrap justify-content-center">
            <button className="btn btn-outline-light" onClick={handleCopy}>
              <FaRegCopy className="me-2" /> Hashtags + URL
            </button>
            <button className="btn btn-dark px-4" onClick={handleTwitterShare}>
              <span className="text-warning">Share on X</span>
            </button>
            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ModalViewPic;
