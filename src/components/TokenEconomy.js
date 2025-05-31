// src/components/TokenEconomy.js
import React from 'react';
import { FaCoins, FaRocket, FaSyncAlt, FaMagic } from 'react-icons/fa';

const TokenEconomy = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
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
              <div className="col-md-3 mb-3">
                <div className="step-box">
                  <FaRocket className="me-2" /> Clear separation of speculation and utility
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="step-box">
                  <FaSyncAlt className="me-2" /> Encourages re-entry into the system
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="step-box">
                  💡 Prevents inflation of the functional token
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="step-box">
                  🎨 Designed for creators, traders, and dreamers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenEconomy;
