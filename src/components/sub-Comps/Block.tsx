import "./Block.css";
export default function Block(props: {
  col: string;
  nums: string;
  desc: string;
  top: number | null;
}) {
  const styled_cm = {
    col: {
      color: props.col,
    },
  };

  return (
    <div className={`block-Mod  ${props.top ? "goup" : null} come4`}>
      <p className="nums" style={styled_cm.col}>
        {props.nums}
      </p>
      <p className="desc">{props.desc}</p>
    </div>
  );
}
