import "./Titler.css";
import { M_Scroll, M_Random } from "../ModernScrolls";
import { useEffect } from "react";

export default function Titler(props: { title: string; content: string }) {
  let rnd = M_Random();

  useEffect(() => {
    M_Scroll(`#` + rnd, `#` + rnd, 100, "come4");
  });

  return (
    <div id={rnd} className="titler come4">
      <h3>{props.title}</h3>
      <h2>{props.content}</h2>
    </div>
  );
}
