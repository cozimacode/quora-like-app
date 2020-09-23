import React from "react";
import { Magnifier } from "../../assets";
import "../styles/header/search.css";

export default function Search() {
  return (
    <div className="qla-search">
      <Magnifier />
      <input type="text" placeholder="Search Quora" />
    </div>
  );
}
