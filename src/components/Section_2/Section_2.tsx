import "./Section_2.css";
import { MS_Scroll } from "../../ModernScrolls";

export default function Section_2() {
  MS_Scroll(".img-vv", ".img-vv", 400, "come4");
  return (
    <div className="img-block">
      <img
        className="img-vv come4"
        src={require("../../images/vid.png")}
        alt="vid"
      />
      <div className="blck1"></div>
      <div className="blck2"></div>
    </div>
  );
}
