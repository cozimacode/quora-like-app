import React, { useEffect, useRef } from "react";
import "../styles/utilities/menu.css";

export default function Menu({ width, position, items, toggle }) {
  const menuRef = useRef();

  const handleClose = (e) => {
    if (menuRef.current.contains(e.target)) {
      return;
    }
    toggle();
  };

  useEffect(() => {
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <ul
      ref={menuRef}
      style={{ width, bottom: position.bottom, right: position.right }}
      className="qla-options-list"
    >
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
}
