import React from "react";
import { QuoraLogo } from "../../assets";
import Navigation from "./Navigation";
import Search from "./Search";
import Profile from "./Profile";
import AddQuestion from "./AddQuestion";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="qla-header">
      <Link to="/">
        <QuoraLogo />
      </Link>
      <Navigation />
      <Search />
      <Profile />
      <AddQuestion />
    </div>
  );
}
