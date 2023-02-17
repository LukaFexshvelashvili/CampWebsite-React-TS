import NavLink from "./NavLink";
import styles from "./Navbar.module.css";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { M_ScrollLoad } from "../ModernScrolls";

export default function Navbar() {
  const [navActive, setNavActive] = useState(false);
  useEffect(() => {
    M_ScrollLoad("#navbar", 50, "come4");
  });
  return (
    <>
      <div className={styles.logo + " " + styles.onrs}>
        <img src={require("../images/logos/logoicon.png")} alt="LogoIcon" />
      </div>
      <div
        className={" nav-toggler " + (navActive ? "nav-acted" : "")}
        onClick={() => {
          setNavActive(!navActive);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        id="navbar"
        className={
          styles.navbar + " come4 " + (navActive ? styles.navcome : "")
        }
      >
        <div className={styles.logo + " " + styles.onrh}>
          <img src={require("../images/logos/logoicon.png")} alt="LogoIcon" />
        </div>
        <div className={styles.navButtons}>
          <NavLink title="Home" active={1} />
          <NavLink title="Works" active={0} />
          <NavLink title="About" active={0} />
        </div>
        <button className={styles.navContact}>Contact Us</button>
      </div>
    </>
  );
}
