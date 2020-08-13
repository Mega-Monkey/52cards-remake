import React from "react";
import "./ProgressBar.css";

export const ProgressBar = (props) => {
  const { counter } = props;

  return (
    <div>
      <div className="outer">
        <div style={{ height: `${counter}rem` }} className="inner"></div>
      </div>
    </div>
  );
};
