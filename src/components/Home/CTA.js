
import { React, useState } from "react";
import telegramIcon from "../../resources/images/tlgmy.png";
import telegramHoverIcon  from "../../resources/images/tlgmb.png";
import xIcon from "../../resources/images/iconxb.png";
import xHoverIcon from "../../resources/images/iconxy.png";

const CTA = () => {
  const [iconT, setIconT] = useState(telegramIcon);
  const [iconX, setIconX] = useState(xIcon);

  return (
<section className="text-center section bg-black p-4" id="CTA">
  <h2 className="mb-3">Join our community</h2>
  <p>Be a part of &gt; Build content &gt; Earn with JRD.</p>

  <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 mt-3">
    <a
      href="https://x.com/raccoworld?s=11"
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
      href="https://t.me/jrdtoken"
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
</section>

  );
};

export default CTA;
