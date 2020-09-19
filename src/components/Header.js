import React from "react";
import {
  QuoraLogo,
  Home,
  Answer,
  Spaces,
  Notifications,
  Magnifier,
  userAvatar,
} from "../assets";
import { useLocation, useHistory } from "react-router-dom";
import "./styles/header.css";

export default function Header() {
  let location = useLocation();
  let history = useHistory();
  const handleClick = (path) => {
    history.push(path);
  };

  return (
    <div className="qla-header">
      <QuoraLogo />
      <ul className="qla-navigation">
        <li
          onClick={() => handleClick("/")}
          className={
            location.pathname.length <= 1 ? "qla-active-tab" : undefined
          }
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
      <div className="qla-search">
        <Magnifier />
        <input type="text" placeholder="Search Quora" />
      </div>
      <div className="qla-profile">
        <img src={userAvatar} alt="user avatar" />
      </div>
      <div className="qla-add-question">
        <button>Add Question</button>
      </div>
    </div>
  );
}
