import React from "react";
import "./button.css";

const Button = (props) => {
  const { type, title, onClick, disable } = props;
  return (
    <button
    disabled={disable}
      className={`btn ${
        (type === "add" && "add") ||
        (type === "remove" && "remove") ||
        (type === "checkout" && "checkout")
      }`} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
