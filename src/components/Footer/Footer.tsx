import "./Footer.css";
import { useEffect } from "react";

import { M_Scroll } from "../../ModernScrolls";

export default function Footer() {
  useEffect(() => {
    M_Scroll(".first-foot", ".end-cols", 100, "come4");
  });
  return (
    <div className="Footer">
      <div className="container">
        <div className="first-foot">
          <div className="end-cols descer come4 col-sm-12 col-lg-3">
            <div className="mp-hd logo">
              <img src={require("../../images/logoicon.png")} alt="logoicon" />
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </div>
          </div>

          <div className="end-cols mapper come4 col-sm-12 col-lg-4">
            <div className="mp-hd head">Our Office</div>
            <div className="map">
              <img src={require("../../images/Map.png")} alt="logoicon" />
            </div>
          </div>

          <div className="end-cols ender come4 col-sm-12 col-lg-3">
            <div className="mp-hd head">Contact</div>
            <div className="option">
              Jl KH Samanhudi Metro Atom Plaza Bl AKS 1/11, Dki Jakarta
            </div>
            <div className="option">info@yourdomain.com</div>
            <div className="option">+62 (0) 000 0000 00</div>
          </div>
        </div>
        <div className="footer-line end-cols come4"></div>
        <div className="foot-second end-cols come4">
          <div className="start">© 2021 Creative Agency</div>
          <div className="middle">
            <div className="opt">Works</div>
            <div className="opt">About</div>
            <div className="opt">Pricing</div>
            <div className="opt">About</div>
          </div>
          <div className="socs">
            <div className="soc-card">
              <img
                src={require("../../images/social/Facebook.png")}
                alt="social-icon"
              />
            </div>
            <div className="soc-card">
              <img
                src={require("../../images/social/Instagram.png")}
                alt="social-icon"
              />
            </div>
            <div className="soc-card">
              <img
                src={require("../../images/social/Linkedin.png")}
                alt="social-icon"
              />
            </div>
            <div className="soc-card">
              <img
                src={require("../../images/social/Twitter.png")}
                alt="social-icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
