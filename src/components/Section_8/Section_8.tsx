import "./Section_8.css";
import Titler from "../../components/Titler";
import Profile from "../sub-Comps/Profile";
import { useEffect } from "react";

import { M_ScrollDelay } from "../../ModernScrolls";

export default function Section_8() {
  useEffect(() => {
    M_ScrollDelay(".profile-rows", ".profileBlock", 100, 150, "come4");
  });
  return (
    <div className="Section8">
      <Titler
        title="Testimonials"
        content="Some testimonials from our customers"
      />
      <div className="container">
        <div className="profile-rows">
          <Profile
            img={require("../../images/avatars/Ellipse.png")}
            name="Ronald Richards"
            work="Google inc."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt."
            act={1}
          />
          <Profile
            img={require("../../images/avatars/Ellipse-1.png")}
            name="Guy Hawkins"
            work="Paypal inc."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt."
          />
          <Profile
            img={require("../../images/avatars/Ellipse-2.png")}
            name="Kristin Watson"
            work="Microsoft inc."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt."
          />
          <Profile
            img={require("../../images/avatars/Ellipse-3.png")}
            name="Robert Fox"
            work="Facebook inc."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt."
          />
          <Profile
            img={require("../../images/avatars/Ellipse-4.png")}
            name="Savannah Nguyen"
            work="Twitter inc."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt."
          />
          <Profile
            img={require("../../images/avatars/Ellipse-5.png")}
            name="Courtney Henry"
            work="Apple inc."
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt."
          />
        </div>
      </div>
    </div>
  );
}
