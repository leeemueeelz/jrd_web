import React, { useRef } from "react";
import logo from "../../resources/images/jrd_wb.png";
import { FaCoins, FaRocket, FaSyncAlt, FaMagic } from 'react-icons/fa';

const Hero = () => {
  const bookRef = useRef();
  
  return (
<section className="section bg-dark bg-opacity-75 text-light py-5">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 mb-5 mb-lg-0">
        <h1 className="display-4 fw-bold mt-4">Turns Prompts Into Profit!</h1>
        <img
          src={logo}
          alt="JRD Logo"
          className="mb-2 levitate d-block mx-auto"
          style={{ width: "170px", height: "auto" }}
        />
        <p className="lead mt-1 text-justify-mobile">
            Welcome to the World of <b>JRD</b><br/><br/>

            In a world where AI is within everyone’s reach, the opportunity to earn from home has never been more real.

            Imagine creating original, impactful, and monetizable content in minutes — no experience needed, just your idea.

            At the heart of it all is Raccoon, the spirit of the project. A mischievous visionary with one goal: to help you turn creativity into real value.

            Join the new revolution in content creation.
        </p>
      </div>
      <div className="col-lg-6 text-center">
        <div className="row justify-content-center">
          <div
            className="p-5 shadow-sm page-flip"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              border: '2px solid #ffc107',
              borderRadius: '1rem',
              color: '#fff',
            }}
          >
            <h2 className="mb-4 text-warning levitate">Dual-Token Ecosystem: JRD + JRDT</h2>
            <p style={{ fontSize: '1.1rem' }}>
              Our ecosystem is powered by two complementary tokens: <strong className="text-warning">JRD</strong> and <strong className="text-warning">JRDT</strong>, each with a distinct role that creates a sustainable, user-driven economy.
            </p>
            <ul className="mb-4" style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li><FaCoins className="text-warning me-2" /> <strong>JRD</strong>: The meme coin with community value — used to acquire JRDT.</li>
              <li><FaMagic className="text-warning me-2" /> <strong>JRDT</strong>: The utility token to generate content, unlock features, and fuel creativity.</li>
            </ul>
            <p style={{ fontSize: '1.1rem' }}>
              This system encourages constant circulation: holders acquire <strong className="text-warning">JRD</strong>, convert it into <strong className="text-warning">JRDT</strong>, and use it for AI-generated scenes, characters, or full storylines. As <strong>JRDT</strong> is spent, demand for <strong>JRD</strong> increases — creating a loop that rewards participation.
            </p>

            <h4 className="mt-4 text-warning levitate">Benefits</h4>
            <div className="row mt-3">
              <div className="col-md-6 mb-3 d-flex align-items-stretch">
                <div className="step-box w-100">
                  <FaRocket className="me-2" /> Clear separation of speculation and utility
                </div>
              </div>
              <div className="col-md-6 mb-3 d-flex align-items-stretch">
                <div className="step-box w-100">
                  <FaSyncAlt className="me-2" /> Encourages re-entry into the system
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6 mb-3 d-flex align-items-stretch">
                <div className="step-box w-100">
                  <FaRocket className="me-2" /> Clear separation of speculation and utility
                </div>
              </div>
              <div className="col-md-6 mb-3 d-flex align-items-stretch">
                <div className="step-box w-100">
                  <FaSyncAlt className="me-2" /> Encourages re-entry into the system
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;