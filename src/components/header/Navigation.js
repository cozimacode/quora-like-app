import React from "react";
import { Home, Answer, Spaces, Notifications } from "../../assets";
import { useLocation, useHistory } from "react-router-dom";
import "../styles/header/navigation.css";

export default function Navigation() {
  let location = useLocation();
  let history = useHistory();
  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <ul className="qla-navigation">
      <li
        onClick={() => handleClick("/")}
        className={location.pathname.length <= 1 ? "qla-active-tab" : undefined}
      >
        <Home />
        Home
      </li>
      <li
        onClick={() => handleClick("/answer")}
        className={
          location.pathname.indexOf("answer") > -1
            ? "qla-active-tab"
            : undefined
        }
      >
        <Answer />
        Answer
      </li>
      <li
        onClick={() => handleClick("/spaces")}
        className={
          location.pathname.indexOf("spaces") > -1
            ? "qla-active-tab"
            : undefined
        }
      >
        <Spaces />
        Spaces
      </li>
      <li
        onClick={() => handleClick("/notifications")}
        className={
          location.pathname.indexOf("notifications") > -1
            ? "qla-active-tab"
            : undefined
        }
      >
        <Notifications />
        Notifications
      </li>
    </ul>
  );
}
