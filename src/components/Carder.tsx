import "./Carder.css";
import Card from "./Card";
import { M_ScrollDelay } from "../ModernScrolls";
import { useEffect } from "react";

export default function Carder() {
  useEffect(() => {
    M_ScrollDelay(".Carder", ".Card", 100, 130, "come5alt");
  });
  return (
    <div className="Carder">
      <Card
        logo={require("../images/icons/Vector.png")}
        title="Ideate"
        content="We help you develop creative ideas so that your business can grow more rapidly"
        color="rgba(76, 64, 247)"
        shadow="rgba(55, 45, 188, 1)"
        shadowbg="rgba(76, 64, 247, 0.4)"
        active={1}
      />
      <Card
        logo={require("../images/icons/Pen.png")}
        title="Design"
        content="We provide services with the best designs than our designer team for your business"
        color="rgba(255, 45, 89)"
        shadow="rgba(255, 45, 89, 0.4)"
        shadowbg="rgba(255, 45, 89, 0.4)"
        active={0}
      />
      <Card
        logo={require("../images/icons/desktop.png")}
        title="Web Development"
        content="We help develop company websites to be more professional and attractive"
        color="rgba(74, 219, 97)"
        shadow="rgba(74, 219, 97, 0.4)"
        shadowbg="rgba(74, 219, 97, 0.4)"
        active={0}
      />
      <Card
        logo={require("../images/icons/Mobile.png")}
        title="App Development"
        content="We help develop company mobile apps to be more professional and attractive"
        color="rgba(255, 204, 0)"
        shadow="rgba(255, 204, 0, 0.4)"
        shadowbg="rgba(255, 204, 0, 0.4)"
        active={0}
      />

      <Card
        logo={require("../images/icons/Building.png")}
        title="Business Growth"
        content="We also provide services by providing input for your business growth"
        color="rgba(0, 123, 255)"
        shadow="rgba(0, 123, 255, 0.4)"
        shadowbg="rgba(0, 123, 255, 0.4)"
        active={0}
      />
      <Card
        logo={require("../images/icons/Chart.png")}
        title="Digital marketing"
        content="We also help you market your products through an online marketplace"
        color="rgba(255, 104, 0)"
        shadow="rgba(255, 104, 0, 0.4)"
        shadowbg="rgba(255, 104, 0, 0.4)"
        active={0}
      />
    </div>
  );
}
