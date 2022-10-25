import React from "react";
import Typed from "react-typed";
import wrx from "../image/wrx.jpg";

const Main = () => {

  return (
    <div className="main">
      <div className="main-cntr">
        <div className="main-box">
          <div className="left-heading">
            <h1>Welcome to my resume website</h1>
          </div>
          <div className="left-animation">
            <div className="animation">
              <h1>I enjoy</h1>
              <h1><Typed strings={["Coding", "Traveling", "Playing Video Games"]} typeSpeed={150} backSpeed={100} loop /></h1>
            </div>
          </div>
        </div>
        <div className="main-box">
          <div className="image">
            <img src={wrx} alt="wrx" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Main;

