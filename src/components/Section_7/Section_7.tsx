import "./Section_7.css";
import Titler from "../../components/Titler";
import Quest from "../sub-Comps/Quest";
import { useState, useEffect } from "react";

import { M_ScrollDelay } from "../../ModernScrolls";

export default function Section_7() {
  let [answer, setAnswer] = useState(0);
  useEffect(() => {
    M_ScrollDelay(".quest-row", ".Question", 100, 150, "come4");
  });
  return (
    <div className="Section7">
      <Titler
        title="Frequently Ask Question"
        content="Some of our frequently asked questions"
      />
      <div className="container">
        <div className="quest-row">
          <Quest
            num={1}
            change={setAnswer}
            iscor={answer}
            question="What are the services provided to customers?"
            answer="Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace."
          />
          <Quest
            num={2}
            change={setAnswer}
            iscor={answer}
            question="How can I submit a proposal for cooperation?"
            answer="Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace."
          />
          <Quest
            num={3}
            change={setAnswer}
            iscor={answer}
            question="I come from a faraway place, can you make collaboration applications?"
            answer="Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace."
          />
          <Quest
            num={4}
            change={setAnswer}
            iscor={answer}
            question="How do I get the payment complete?"
            answer="Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace."
          />
          <Quest
            num={5}
            change={setAnswer}
            iscor={answer}
            question="How long can the collaboration last?"
            answer="Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace."
          />
        </div>
      </div>
      <img
        className="bg1"
        src={require("../../images/objects/bgyellow.png")}
        alt="bg-object"
      />
      <img
        className="bg2"
        src={require("../../images/objects/bgpurple.png")}
        alt="bg-object"
      />
    </div>
  );
}
