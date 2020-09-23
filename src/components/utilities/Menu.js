import React from "react";
import "../styles/utilities/menu.css";

export default function Menu({ width, position, items }) {
  return (
    <ul
      style={{ width, bottom: position.bottom, right: position.right }}
      className="qla-options-list"
    >
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
