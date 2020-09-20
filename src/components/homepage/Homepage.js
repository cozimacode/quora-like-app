import React, { Component } from "react";
import LeftSidebar from "./LeftSidebar";
import "../styles/homepage.css";
import MainContent from "./MainContent";

export default class Homepage extends Component {
  render() {
    return (
      <div className="qla-homepage">
        <LeftSidebar />
        <MainContent />
      </div>
    );
  }
}
