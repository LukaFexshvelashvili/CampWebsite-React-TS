import "./Section_5.css";
import { useEffect } from "react";

import { M_ScrollDelay } from "../../ModernScrolls";

export default function Section_5() {
  useEffect(() => {
    M_ScrollDelay(".Section5", ".img-llg", 100, 100, "come4");
  });
  return (
    <div className="container">
      <div className="Section5">
        <div className="lines">
          <img
            className="img-llg come4"
            src={require("../../images/logos/Group.png")}
            alt="CompanyLogo"
          />
          <img
            className="img-llg come4"
            src={require("../../images/logos/Group-1.png")}
            alt="CompanyLogo"
          />
          <img
            className="img-llg come4"
            src={require("../../images/logos/Group-2.png")}
            alt="CompanyLogo"
          />
          <img
            className="img-llg come4"
            src={require("../../images/logos/Group-3.png")}
            alt="CompanyLogo"
          />
          <img
            className="img-llg come4"
            src={require("../../images/logos/Group-4.png")}
            alt="CompanyLogo"
          />
        </div>
        <div className="lines">
          <img
            className="img-llg come4"
            src={require("../../images/logos/Group-5.png")}
            alt="CompanyLogo"
          />
          <img
            className="img-llg come4"
            src={require("../../images/logos/Group-6.png")}
            alt="CompanyLogo"
          />
          <img
            className="img-llg come4"
            src={require("../../images/logos/Group-7.png")}
            alt="CompanyLogo"
          />
          <img
            className="img-llg come4"
            src={require("../../images/logos/Group-8.png")}
            alt="CompanyLogo"
          />
          <img
            className="img-llg come4"
            src={require("../../images/logos/Group-9.png")}
            alt="CompanyLogo"
          />
        </div>
      </div>
    </div>
  );
}
