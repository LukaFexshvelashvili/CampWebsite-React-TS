import "./Card.css";
export default function Card(props: {
  logo: string;
  title: string;
  content: string;
  color: string;
  shadow: string;
  shadowbg: string;
  active: number;
}) {
  return (
    <div
      className="Card come5alt"
      style={{
        ...styled.Card,
        ...{
          background: props.active ? props.color : "#FFFFFF",
          boxShadow: props.active
            ? `-10px 30px 60px ${props.shadowbg}`
            : "-10px 30px 60px rgba(219, 222, 225, 0.6)",
        },
      }}
    >
      <div
        className="logo"
        style={{
          ...styled.logo,
          ...{
            background: props.active ? "#FFFFFF" : props.color,
            boxShadow: `0px 15px 30px ${props.shadow}`,
          },
        }}
      >
        <img src={props.logo} alt="" />
      </div>
      <div style={styled.cardText}>
        <div
          style={{
            ...styled.cardTextStarter,
            ...{
              color: props.active ? "#FFFFFF" : "#111029",
            },
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            ...styled.cardTextContent,
            ...{
              color: props.active ? "#FFFFFF" : "#6B6B6B",
            },
          }}
        >
          {props.content}
        </div>
      </div>
      <button style={styled.button}>
        <img
          style={styled.img}
          src={require("../images/icons/Arrow.png")}
          alt=""
        />
      </button>
    </div>
  );
}

const styled = {
  Card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 458,
    width: 352,
    margin: "30px 20px",
    padding: "40px 20px",
    boxShadow: "-10px 30px 60px rgba(219, 222, 225, 0.6)",
    borderRadius: 20,
  },
  logo: {
    height: 95,
    aspectRatio: 1,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    textAlign: "center" as const,
  },
  cardTextStarter: {
    fontFamily: "p-semibold",
    marginBottom: 10,
    fontSize: 20,
  },
  cardTextContent: {
    fontFamily: "p-regular",
    fontSize: 18,
    lineHeight: "30px",
    color: "#6B6B6B",
  },
  button: {
    height: 50,
    aspectRatio: 1,
    borderRadius: "50%",
    background: "#F3F4F6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: 0,
  },
  img: {
    height: 25,
  },
};
