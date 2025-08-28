import React, { useRef, useEffect, useState } from "react";
import { Modal } from "bootstrap";
import { FaRegCopy } from 'react-icons/fa';
import DexScreenerIcon from "../../resources/icons/dexscreener.png";
import JupagIcon from "../../resources/icons/jupag-logo.png";

const ModalContractAddress = ({ onClose }) => {
  const modalRef = useRef(null);
  const ca = "6GC2a8DMenrEiZV6ngY8dq4GHsxhCgf9z38BS7sZN8tG"
  const [ContractAddressCopied, setContractAddressCopied] = useState("Copy")
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (!modalRef.current) return;

    const modal = new Modal(modalRef.current);
    modal.show();

    const handleHide = () => onClose?.();
    modalRef.current.addEventListener("hidden.bs.modal", handleHide);

    return () => {
      modalRef.current?.removeEventListener("hidden.bs.modal", handleHide);
      modal.dispose();
    };
  }, [onClose]);


  const closeModal = () => {
    document.activeElement.blur();
  }

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(ca).then(() => {
      setContractAddressCopied("C.A copied");

      if (textAreaRef.current) {
        textAreaRef.current.focus();
      }
    });
  };


  return (
    <div
      ref={modalRef}
      className="modal fade"
      id="ContractAddress"
      tabIndex="-1"
      aria-labelledby="ContractAddressLabel"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-dark text-white">
          <div className="modal-body text-center">
            <h1 className="text-center mb-4 text-center text-warning levitate">Contract Address</h1>
            Buy the $JRD token through the following decentralized DEXs:<br/><br/>
            <div className="d-flex justify-content-center gap-3">
              <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src={DexScreenerIcon} 
                  alt="DexScreener" 
                  style={{ width: "60px", height: "60px", cursor: "pointer" }} 
                />
              </a>

              <a href="https://jup.ag" target="_blank" rel="noopener noreferrer">
                <img 
                  src={JupagIcon} 
                  alt="Jupiter" 
                  style={{ width: "60px", height: "60px", cursor: "pointer" }} 
                />
              </a>
            </div>
            <div className="container my-2">
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                  <div className="mb-3 text-center">
                    <p className="form-label text-light fw-bold">
                      ...Or copy Contract Address:
                    </p>
                    <textarea 
                      ref={textAreaRef}
                      className="form-control contract-textarea text-center"
                      defaultValue={ca}
                      readOnly
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer border-0 d-flex justify-content-center">
              <button className="btn btn-dark px-4" onClick={handleCopyAddress}>
                <FaRegCopy className="me-2" /> <span className="text-warning">{ContractAddressCopied}</span>
              </button>
            <div className="d-flex gap-2 flex-wrap justify-content-center">
              <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContractAddress;
