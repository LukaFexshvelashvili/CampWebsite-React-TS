import "./Profile.css";

export default function Profile(props: {
  img: string;
  name: string;
  work: string;
  text: string;
  act?: number;
}) {
  const actstyle = {
    img: {
      filter: "drop-shadow(0px 20px 30px rgba(76, 64, 247, 0.2))",
    },
    shadow: {
      boxShadow: "-15px 20px 70px rgba(76, 64, 247, 0.2)",
    },
  };
  return (
    <div
      className="profileBlock come4"
      style={props.act ? actstyle.shadow : undefined}
    >
      <div className="profimg">
        <img
          src={props.img}
          style={props.act ? actstyle.img : undefined}
          alt="profilePic"
        />
      </div>
      <div className="name-work">
        <p className="name">{props.name}</p>
        <div className="work">{props.work}</div>
      </div>
      <div className="prfileDesc">{props.text}</div>
      <div className="stars-row">
        <img src={require("../../images/star.png")} alt="star" />
        <img src={require("../../images/star.png")} alt="star" />
        <img src={require("../../images/star.png")} alt="star" />
        <img src={require("../../images/star.png")} alt="star" />
        <img src={require("../../images/star.png")} alt="star" />
      </div>
    </div>
  );
}
