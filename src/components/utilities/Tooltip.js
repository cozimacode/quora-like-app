import React from "react";

export default function Tooltip({ text, marginLeft, children }) {
  return (
    <div className="qla-tooltip">
      <span style={{ marginLeft }}>{text}</span>
      {children}
    </div>
  );
}
