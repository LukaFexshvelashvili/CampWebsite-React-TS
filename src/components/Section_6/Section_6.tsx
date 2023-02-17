import "./Section_6.css";

export default function Section_6() {
  return (
    <div className="Section6">
      <div className="container">
        <div className="context">
          <img
            className="crawls"
            src={require("../../images/Section6.png")}
            alt='"'
          />
          <h2>
            We are serious about providing our best service to all the customers
            we help. Customers satisfaction is our number one priority.
          </h2>
          <div className="bk1">Mark Garfield</div>
          <div className="bk2">CEO & Head of Product</div>

          <div className="sider">
            <div className="side actside"></div>
            <div className="side"></div>
            <div className="side"></div>
            <div className="side"></div>
          </div>

          <div className="lefter">
            <img
              src={require("../../images/Arrow-Left.png")}
              alt="left-arrow"
            />
          </div>

          <div className="righter">
            <img
              src={require("../../images/Arrow-Right.png")}
              alt="right-arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
