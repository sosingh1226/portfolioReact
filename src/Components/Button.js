import React from "react";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type="button"
      className={`btn btn-${props.color}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
