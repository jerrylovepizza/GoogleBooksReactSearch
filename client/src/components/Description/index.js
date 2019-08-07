import React from "react";
// import { Col } from "../Grid";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Description(props) {
  return (
    <div>
      <img className="col-2" alt="book" src={props.img} />
      <span className="col-8" >{props.des}</span>
    </div>
  );
}

export default Description;
