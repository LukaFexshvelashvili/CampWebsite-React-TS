import "./Task.css";
export default function Task(props: { cont: string }) {
  return (
    <div className="Tasker">
      <div className="log">
        <img
          src={require("../../images/icons/checked.png")}
          alt="checkedicon"
        />
      </div>
      <p>{props.cont}</p>
    </div>
  );
}
