import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./footer.css";

function Footer() {
  return (
    <p className="footerlink">
      <a
        href="https://github.com/LivyCodes/weather-react-app"
        target="_blank"
        rel="noreferrer noopener"
        id="footer"
      >
        Open-Source Code{" "}
      </a>
      by Olive Wakamwe
    </p>
  );
}
export default Footer;
