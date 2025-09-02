import React, { useEffect, useState } from "react";
import "../../resources/Countdown.css";
import logo from "../../resources/images/jrd_zzz.png";
import { useLocation } from "react-router-dom";

function Countdown() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(true);
  const [closing, setClosing] = useState(false);

  const launchDate = new Date("2025-09-13T00:00:00");
  const totalDuration = launchDate.getTime() - new Date().getTime();

  const [timeLeft, setTimeLeft] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      const newProgress = ((totalDuration - distance) / totalDuration) * 100;
      setProgress(newProgress);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(100);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [location.pathname, totalDuration]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => setShowModal(false), 400); // match with animation duration
  };

  if (!showModal || location.pathname !== "/") return null;

  return (
    <div className={`countdown-overlay ${closing ? "fade-out" : "fade-in"}`}>
      <div className="countdown-container levitate">
        <button className="close-button" onClick={handleClose}>×</button>
        <div className="logo">🚀</div>
        <h2>Launch: September 13, 2025</h2>
        <p>(GMT-5)</p>
        <img
          src={logo}
          alt="JRD Logo"
          className="mb-1 d-block mx-auto"
          style={{ width: "170px", height: "auto" }}
        />

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
        <div className="percent-text">{Math.floor(progress)}% DONE</div>
      </div>
    </div>
  );
}

export default Countdown;
