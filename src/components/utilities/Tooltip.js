import React from "react";
import "../styles/utilities/tooltip.css";

export default function Tooltip({ text, marginLeft, children }) {
  return (
    <div className="qla-tooltip">
      {text && (
        <span className="qla-tooltip-text" style={{ marginLeft }}>
          {text}
        </span>
      )}
      {children}
    </div>
  );
}
