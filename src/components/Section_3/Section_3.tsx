import "./Section_3.css";
import Block from "../sub-Comps/Block";
import Task from "../sub-Comps/Task";
import { useEffect } from "react";

import { M_Scroll, M_ScrollDelay } from "../../ModernScrolls";

export default function Section_3() {
  useEffect(() => {
    M_ScrollDelay(".cont__1", ".block-Mod", 100, 150, "come4");
    M_Scroll(".cont__2", ".cont__2", 900, "come4");
  });

  return (
    <div className="Section3">
      <div className="container">
        <div className="flxer">
          <div className="conterss cont__1">
            <Block
              col="#4C40F7"
              nums="70K+"
              desc="We have more than customers"
              top={1}
            />
            <Block
              col="#FF2D59"
              nums="10M+"
              desc="People who are helped because of our hard work"
              top={0}
            />
            <Block
              col="#FF6800"
              nums="100+"
              desc="Projects we have
              completed"
              top={1}
            />
            <Block
              col="#4ADB61"
              nums="200+"
              desc="Support from world-renowned companies"
              top={0}
            />
          </div>
          <div className="conterss cont__2 come4">
            <h2>Customer satisfaction is our first priority</h2>
            <h3>
              We serve many customers, ranging from small businesses, medium
              entrepreneurs, to world-renowned companies. Their satisfaction is
              our pleasure. We strive to provide the best service by:
            </h3>
            <div className="Tasks-row">
              <Task cont="Provide idea support from our creative team" />
              <Task cont="Provide attractive and professional design services" />
              <Task cont="Support for service 24 hours a week" />
              <Task cont="Helping our customers to grow their business" />
              <Task cont="Provide support to market products through online marketplace " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
