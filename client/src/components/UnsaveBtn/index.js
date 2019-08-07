import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function UnsaveBtn(props) {
  return (
    <span className="unsave-btn" {...props} role="button" tabIndex="0">
     <h3> ✗ </h3>
    </span>
  );
}

export default UnsaveBtn;
