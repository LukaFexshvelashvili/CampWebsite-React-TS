import "./Quest.css";
export default function Quest(props: {
  num: number;
  change: any;
  iscor: number;

  question: string;
  answer: string;
}) {
  let active = false;

  if (props.iscor === props.num) {
    active = true;
  } else {
    active = false;
  }

  return (
    <div
      onClick={() => {
        if (active === false) {
          props.change(props.num);
        } else {
          props.change(0);
        }
      }}
      className={`Question ${active ? "questActive" : ""}`}
    >
      <div className="start">
        {props.question}
        <img
          src={
            active
              ? require("../../images/openArrow.png")
              : require("../../images/downArrow.png")
          }
          alt="downArrow"
        />
      </div>
      <div className="line"></div>

      <div className="questAnswer">{props.answer}</div>
    </div>
  );
}
