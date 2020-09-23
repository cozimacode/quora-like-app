import React, { Component } from "react";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./main-content/MainContent";
import "../styles/homepage/homepage.css";

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
