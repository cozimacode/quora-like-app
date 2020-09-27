import React from "react";
import { QuoraLogo } from "../../assets";
import Navigation from "./Navigation";
import Search from "./Search";
import Profile from "./Profile";
import AddQuestionButton from "./AddQuestionButton";
import { Link } from "react-router-dom";
import "../styles/header/header.css";

export default function Header() {
  return (
    <div className="qla-header">
      <Link to="/">
        <QuoraLogo />
      </Link>
      <Navigation />
      <Search />
      <Profile />
      <AddQuestionButton />
    </div>
  );
}
