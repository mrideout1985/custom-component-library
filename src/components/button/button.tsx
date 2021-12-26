import React from "react";
import "./button.css";

export interface ButtonProps {
  text: string;
  backgroundColor: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
}

const Button = ({ text, backgroundColor, size, textColor }: ButtonProps) => {
  return (
    <button
      className={["btn", `btn--${size}`].join(" ")}
      style={{ backgroundColor, color: `${textColor ? textColor : "#FFF"}` }}
    >
      <span className="btn_span">{text}</span>
    </button>
  );
};

export default Button;
