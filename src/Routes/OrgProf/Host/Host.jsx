import React from "react";
import "./Host.css";
import { icon1, icon2, icon3 } from "../../../assets";


const Host = () => {
  return (
    <div className="body">
    <div className="main">
      <h2 className="head">HOST YOUR EVENT WITH US</h2>
      <form onsubmit="showAlert(event)">
        <p className="event">
          <label>
            EVENT NAME:
            <input type="text" className="input1" />
          </label>
        </p>
        <p>
          <div className="clock">
            <img className="icon1" alt="" src= {icon1} />
            <input type="date" id="date" className="date" />
          </div>
        </p>

        <div className="clock">
          <img className="icon2" alt="" src={icon2} />
          <input type="text" className="input2" />
        </div>

        <div className="clock">
          <img className="icon3" alt="" src={icon3} />
          <input type="text" className="input3" />
        </div>

        <p>
          <button type="submit" className="host1">
            Host Event
          </button>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Host;
