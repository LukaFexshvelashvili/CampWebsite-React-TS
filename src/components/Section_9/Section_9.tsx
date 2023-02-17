import "./Section_9.css";
import { useEffect } from "react";

import { M_ScrollDelay } from "../../ModernScrolls";

export default function Section_9() {
  useEffect(() => {
    M_ScrollDelay(".Section9", ".first-pop", 100, 150, "come2");
    M_ScrollDelay(".Section9", ".second-pop", 100, 150, "come1");
  });
  return (
    <div className="Section9">
      <img
        className="bg-img"
        src={require("../../images/bgline.png")}
        alt="bgline"
      />
      <div className="container">
        <div className="block-pop first-pop come2">
          <div className="pop-content">
            <div className="starter">Are You Ready For</div>
            <div className="main">Start a New Project</div>
            <button>
              Start Now
              <img
                src={require("../../images/icons/ArrowButton.png")}
                alt="arrow"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="container abcont">
        <div className="block-pop second-pop come1">
          <div className="pop-content">
            <div className="starter">Get Notified About Project</div>
            <div className="main">Subscribe Now</div>
            <div className="inp-blocker">
              <input placeholder="Email" type="text" className="subscribe" />
              <img src={require("../../images/Send.png")} alt="send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
