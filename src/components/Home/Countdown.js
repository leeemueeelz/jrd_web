import React, { useEffect, useState } from "react";
import "../../resources/Countdown.css";
import logo from "../../resources/images/jrd_zzz.png";
import { useLocation } from "react-router-dom";
import { Oval } from '@agney/react-loading';
import { US, CO, BR, AR, CL, GB, ES } from 'country-flag-icons/react/3x2';
import Select from 'react-select';
import useCountdownTimer from '../../helpers/useCountdownTimer';

const Countdown = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(true);
  const [closing, setClosing] = useState(false);
  const [selectedTime, setSelectedTime] = useState("");

  const { timeLeft, progress, loading } = useCountdownTimer({
    launchDateUTC: "2025-09-13T05:00:00Z",
    startDateUTC: "2025-09-05T05:00:00Z",
  });

  const countryOptions = [
    { value: "15:00", label: <><AR style={{ width: 24 }} /> <span className="ms-2">Argentina</span></> },
    { value: "15:00", label: <><BR style={{ width: 24 }} /> <span className="ms-2">Brasil</span></> },
    { value: "13:00", label: <><CO style={{ width: 24 }} /> <span className="ms-2">Colombia</span></> }, 
    { value: "14:00", label: <><CL style={{ width: 24 }} /> <span className="ms-2">Chile</span></> },
    { value: "19:00", label: <><ES style={{ width: 24 }} /> <span className="ms-2">España (Madrid)</span></> },
    { value: "13:00", label: <><US style={{ width: 24 }} /> <span className="ms-2">USA ET (NY/Miami)</span></> },
    { value: "10:00", label: <><US style={{ width: 24 }} /> <span className="ms-2">USA PT (LA)</span></> },
    { value: "18:00", label: <><GB style={{ width: 24 }} /> <span className="ms-2">UK (Londres)</span></> },
  ];

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setShowModal(false), 400);
  };

  if (!showModal || location.pathname !== "/") return null;

  return (
    <div className={`countdown-overlay ${closing ? "fade-out" : "fade-in"}`}>
      <div className="countdown-container levitate m-2">
        <button className="close-button text-warning" onClick={handleClose}>×</button>
        <div className="logo">🚀</div>
        <h4>September 13, 2025</h4>
        <p>(GMT-5)</p>
        <img
          src={logo}
          alt="JRD Logo"
          className="mb-1 d-block mx-auto"
          style={{ width: "120px", height: "auto" }}
        />
        {
          loading ?  <Oval width="50" color="#ffc107" className="mt-3" /> : 
        <>
          <div className="mt-4 text-center">
            <p className="form-label text-light fw-bold">🌍 Choose your country</p>
            <div className="mx-auto" style={{ maxWidth: 300 }}>
              <Select
                options={countryOptions}
                onChange={(opt) => setSelectedTime(opt.value)}
                classNamePrefix="react-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    backgroundColor: '#212529', // dark
                    color: '#fff',
                    borderColor: '#6c757d',
                  }),
                  menu: (base) => ({
                    ...base,
                    backgroundColor: '#212529',
                  }),
                  singleValue: (base) => ({
                    ...base,
                    color: '#fff',
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isFocused ? '#343a40' : '#212529',
                    color: '#fff',
                    cursor: 'pointer',
                  }),
                }}
              />
            </div>

            {selectedTime && (
              <p className="mt-2 text-light">
                🕒 Launch time in your country: <span className="fw-bold text-warning">{selectedTime}</span>
              </p>
            )}
          </div>

          <div className="countdown-timer">
            <div>
              <span>{timeLeft.days || 0}</span>
              <small>days</small>
            </div>
            <div>
              <span>{timeLeft.hours || 0}</span>
              <small>hours</small>
            </div>
            <div>
              <span>{timeLeft.minutes || 0}</span>
              <small>minutes</small>
            </div>
            <div>
              <span>{timeLeft.seconds || 0}</span>
              <small>seconds</small>
            </div>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${Math.floor(progress)}%` }}
            ></div>
          </div>
          <div className="percent-text d-flex align-items-center justify-content-center gap-2">
            <span>{Math.floor(progress)}%</span>
            <span className="text-warning">$JRD</span>
          </div>
        </>
        }

      </div>
    </div>
  );
}

export default Countdown;
