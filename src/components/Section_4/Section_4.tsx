import "./Section_4.css";
import { useEffect } from "react";

import { M_ScrollDelay } from "../../ModernScrolls";

export default function Section_4() {
  useEffect(() => {
    M_ScrollDelay("#frn", ".in-img", 100, 150, "come2");
  });
  return (
    <div className="container">
      <div className="Section4">
        <div className="coners">
          <div id="frn" className="in-img come2">
            <img
              src={require("../../images/interior/Image.png")}
              alt="interior"
            />
            <p>Front working space</p>
          </div>

          <div className="in-img come2">
            <img
              src={require("../../images/interior/Image4.png")}
              alt="interior"
            />
            <p>Guest rest room</p>
          </div>
        </div>
        <div className="coners">
          <div className="in-img come2">
            <img
              src={require("../../images/interior/Image2.png")}
              alt="interior"
            />
            <p>Meeting corner</p>
          </div>

          <div className="in-img come2">
            <img
              src={require("../../images/interior/Image1.png")}
              alt="interior"
            />
            <p>Single working space</p>
          </div>
        </div>
        <div className="coners">
          <div className="in-img come2">
            <img
              src={require("../../images/interior/Image3.png")}
              alt="interior"
            />
            <p>Guest meeting room</p>
          </div>

          <div className="in-img come2">
            <img
              src={require("../../images/interior/Image5.png")}
              alt="interior"
            />
            <p>Kitchen room</p>
          </div>
        </div>
      </div>
    </div>
  );
}
