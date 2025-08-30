import React, {useState} from "react";
import "../../resources/About.css";
import imgIphone from "../../resources/icons/appleavaliable.png";
import imgAndroid from "../../resources/icons/googleplaygetiton.png";
import badgeAppStore from "../../resources/images/racconbotphone.png";
import IconSol from "../../resources/icons/solicon.png"
import imgJRDLogo from "../../resources/icons/jrdtokenicon3.png";
import imgJRDTLogo from "../../resources/icons/jrdticon.png";

export default function EcosistemaJRDSection() {
  // RUTAS SUGERIDAS (cámbialas por tus assets reales)

  const [showMoreJrd, setShowMoreJrd] = useState(false);
  const [showMoreJrdt, setShowMoreJrdt] = useState(false);

  return (
    <div className="container py-5 about-wrapper text-white bg-opacity-75">
        {/* TITULOS */}
        <div className="row align-items-start g-4">
          <div className="col-lg-7">
            <h1 className="display-4 fw-bold mb-2 text-warning levitate">Ecosystem $JRD</h1>
            <h3 className="fs-4 text-light-50 mb-4">Dual-Token Ecosystem: <b className="text-warning">$JRD</b> + <b className="text-jrdt">JRDT</b>, one community</h3>
            <p>Our ecosystem is powered by two complementary tokens: JRD and JRDT, each with a distinct role that creates a sustainable, user-driven economy:</p>
            {/* CARDS TOKENS */}
            <div className="row g-4">
              {/* JRD */}
              <div className="col-md-6">
                <div className="card card-dark h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <img src={imgJRDLogo} alt="JRD"style={{ width: "200px", height: "200px" }}/>
                      <h3 className="h4 m-0">JRD</h3>
                    </div>
                    <p className="text-light-65 mb-4 d-inline-flex align-items-center gap-2">
                        The main token of the community and access to the ecosystem
                        <img 
                        src={IconSol} 
                        alt="Solana" 
                        style={{ width: "50px", height: "50px" }} 
                        />
                    </p>
                    <p className={`text-light mb-4 fade-detail-jrd ${showMoreJrd ? 'show' : 'hide'}`}>
                        <b className="text-warning">$JRD</b> is the main token — a meme coin with community value. It’s used to acquire <b className="text-warning">$JRDT</b>,
                         making it the gateway to real utility.
                    </p>
                    <button className="btn btn-dark-subtle w-100" onClick={() => setShowMoreJrd(!showMoreJrd)}>
                    {showMoreJrd ? '...Less' : '...More'}
                    </button>
                  </div>
                </div>
              </div>

              {/* JRDT */}
              <div className="col-md-6">
                <div className="card card-dark h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <img src={imgJRDTLogo} alt="JRDT"style={{ width: "200px", height: "200px" }}/>
                      <h3 className="h4 m-0">JRDT</h3>
                    </div>
                    <p className="text-light-65 mb-4">
                      The utility token for in-app credits.
                    </p>
                   <p className={`text-light mb-4 fade-detail-jrd ${showMoreJrdt ? 'show' : 'hide'}`}>
                        <b className="text-jrdt">JRDT</b> is the utility token — the one users spend inside the bot to generate content, unlock features, and fuel creativity.
                    </p>
                    <button className="btn btn-dark-subtle w-100" onClick={() => setShowMoreJrdt(!showMoreJrdt)}>
                        {showMoreJrdt ? '...Less' : '...More'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOCKUPS APP */}
          <div className="col-lg-5">
            <div className="position-relative d-flex justify-content-center align-items-end mt-4 mt-lg-0">
              {/* iPhone detrás */}
              <img
                src={imgIphone}
                className="device device-iphone shadow-lg"
                loading="lazy"
              />
              {/* Android delante */}
              <img
                src={imgAndroid}
                className="device device-android shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Badges stores */}
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start mt-4 flex-wrap">
                <img src={badgeAppStore} alt="Available on App Store" height="42" />
            </div>
          </div>
        </div>

        <div className="text-center mt-3">
        This system encourages constant circulation: holders acquire <b className="text-warning">$JRD</b>, convert it into <b className="text-jrdt">JRDT</b>, and use it for AI-generated scenes, characters, or full storylines. As <b className="text-jrdt">JRDT</b> is spent, demand for <b className="text-warning">$JRD</b> increases — creating a natural loop that rewards participation and keeps the ecosystem alive.
        </div>

        {/* FRASE INFERIOR */}
        <div className="text-center mt-3" style={{'list-style-type': 'none'}}>
            <h1 className="text-warning levitate">Benefits:</h1><br/>
            <li>🪙 Clear separation of speculation (JRD) and utility (JRDT)</li>
            <li>📊 Prevents inflation of the functional token</li>
            <li>♻️ Encourages holding, spending, and re-entry into the system</li>
            <li>✨ Designed for creators, traders, and dreamers alike</li>
            <h1 className="lead m-0 text-warning border-bottom border-warning mt-3">We are building the future of the $JRD ecosystem together.</h1>
        </div>
      </div>
  );
}
