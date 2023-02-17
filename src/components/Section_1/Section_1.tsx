import styles from "./Section_1.module.css";
import "./Section_1.css";
import { M_ScrollLoad } from "../../ModernScrolls";
import { useEffect } from "react";

export default function Section_1() {
  useEffect(() => {
    M_ScrollLoad("#conthere", 250, "come4");
  });

  return (
    <div id="conthere" className={styles.corSplitter + " come4"}>
      <div className={[styles.cor_1, styles.cors, "cor__1"].join(" ")}>
        <h1>
          Make your business
          <span> more powerful</span>
          <br /> with us
        </h1>
        <p>
          We provide various services to make your business grow and get bigger.
          Your satisfaction is our first priority.
        </p>
        <button>
          Get Started
          <img
            src={require("../../images/icons/ArrowButton.png")}
            alt="arrow"
          />
        </button>
      </div>
      <div className={[styles.cor_2, styles.cors].join(" ")}>
        <img
          className={styles.cor1_img}
          src={require("../../images/starter.png")}
          alt="starter"
        />
      </div>
    </div>
  );
}
