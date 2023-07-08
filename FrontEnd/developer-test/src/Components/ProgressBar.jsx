import React from "react";
import "../Styles/ScreenStyle.css";
const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-bar">
      Progress: {progress}%
      <div className="progress" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
