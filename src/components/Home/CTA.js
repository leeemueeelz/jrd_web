
import { React, useState } from "react";
import telegramIcon from "../../resources/images/tlgmy.png";
import telegramHoverIcon  from "../../resources/images/tlgmb.png";
import xIcon from "../../resources/images/iconxb.png";
import xHoverIcon from "../../resources/images/iconxy.png";
import ytbAds from "../../resources/images/ytbads.png";

const CTA = () => {
  const [iconT, setIconT] = useState(telegramIcon);
  const [iconX, setIconX] = useState(xIcon);

  return (
<section className="text-center section bg-black p-4" id="CTA">
  <h2 className="mb-3">Join our community</h2>
  <p>Be a part of &gt; Build content &gt; Earn with JRD.</p>

  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 mt-3">
    <a
      href="https://x.com/raccoworld"
      target="_blank"
      rel="noreferrer"
      className="btn btn-outline-warning btn-lg d-inline-flex align-items-center gap-2"
      onMouseEnter={() => setIconX(xIcon)}
      onMouseLeave={() => setIconX(xHoverIcon)}
    >
      Follow us!{" "}
      <img src={iconX} alt="X Icon" style={{ width: "24px", height: "24px" }} />
    </a>

    <a
      href="https://t.me/+WCYpMOutJigyOTU5"
      target="_blank"
      rel="noreferrer"
      className="btn btn-outline-warning btn-lg d-inline-flex align-items-center gap-2"
      onMouseEnter={() => setIconT(telegramHoverIcon)}
      onMouseLeave={() => setIconT(telegramIcon)}
    >
      Join Telegram Group{" "}
      <img src={iconT} alt="Telegram Icon" style={{ width: "24px", height: "24px" }} />
    </a>
  </div>
  <h2 className="mb-3">___________</h2>
  <h2 className="mb-3 text-center d-flex justify-content-center align-items-center gap-2">
    Youtube Ads
    <img
      src={ytbAds}
      alt="YouTube Ads Logo"
      style={{ width: "24px", height: "24px", borderRadius: "4px" }}
    />
  </h2>

  <div className="container">
    <div className="row g-3 justify-content-center">
      <div className="col-12 col-md-6 col-lg-5">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/ucaU18nU_MU?si=w-5K4kwzCpeHUk48"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-5">
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/Ly4TAB0VDb0?si=58a4i1zapNrxbIhI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default CTA;
