import React, { useRef, useEffect, useState } from "react";
import { Modal } from "bootstrap";
import { FaRegCopy } from 'react-icons/fa';
import DexScreenerIcon from "../../resources/icons/dexscreener.png";
import JupagIcon from "../../resources/icons/jupag-logo.png";
import useCountdownTimer from '../../helpers/useCountdownTimer';
import { Oval } from '@agney/react-loading';

const ModalContractAddress = ({ onClose }) => {
  const modalRef = useRef(null);
  const ca = "We are working on the launch" //'Launch: September 13, 2025'
  const [ContractAddressCopied, setContractAddressCopied] = useState("Copy")
  const textAreaRef = useRef(null);

useEffect(() => {
  if (!modalRef.current) return;

  if (document.querySelector(".modal.show")) return;

  const modal = new Modal(modalRef.current);

  setTimeout(() => {
    try {
      modal.show();
    } catch (error) {
      console.warn(error);
    }
  }, 50);

  const handleHide = () => {
    onClose?.();

    // clean backdrop
    const backdrop = document.querySelector(".modal-backdrop");
    if (backdrop) backdrop.remove();
    document.body.classList.remove("modal-open");
    document.body.style.paddingRight = null;
  };

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
        textAreaRef.current && textAreaRef.current.focus();
      }
    });
  };

  /*calcuiate launch for set in textarea while...*/
  const { timeLeft, progress, loading } = useCountdownTimer({
    launchDateUTC: "2025-09-13T05:00:00Z",
    startDateUTC: "2025-09-02T05:00:00Z",
  });

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
                    {/*
                      loading ?  <Oval width="50" color="#ffc107" className="mt-3" /> :*/
                      <>
                        <textarea
                          ref={textAreaRef}
                          id="TextContractAddress"
                          className="form-control contract-textarea text-center"
                          defaultValue={ca}
                          readOnly
                        ></textarea>
                        {/*<p className="small fw-light text-white-50 mt-2">
                          {`days: ${ timeLeft.days || 0 }, hours: ${timeLeft.hours || 0}, minutes ${timeLeft.minutes || 0}, seconds: ${timeLeft.seconds || 0}`}
                        </p>*/}
                      </>
                    }
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
