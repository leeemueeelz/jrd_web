
import { React, useState } from "react";
import telegramIcon from "../resources/images/tlgmy.png";
import telegramHoverIcon  from "../resources/images/tlgmb.png";

const CTA = () => {
  const [icon, setIcon] = useState(telegramIcon);

  return (
    <section className="text-center section bg-black p-4 bg-opacity-75">
      <h2 className="mb-3">Ready to unlock your AI content engine?</h2>
      <p>Join the movement. Build content. Earn with JRD.</p>
      <a
        href="https://t.me/jrdtoken"
        target="_blank"
        rel="noreferrer"
        className="btn btn-outline-warning btn-lg mt-3 d-inline-flex align-items-center gap-2"
        onMouseEnter={() => setIcon(telegramHoverIcon)}
        onMouseLeave={() => setIcon(telegramIcon)}
      >
        Join Telegram Group <img src={icon} alt="Telegram Icon" style={{ width: "24px", height: "24px" }} />
      </a>
    </section>
  );
};

export default CTA;
