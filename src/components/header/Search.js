import React from "react";
import { Magnifier } from "../../assets";

export default function Search() {
  return (
    <div className="qla-search">
      <Magnifier />
      <input type="text" placeholder="Search Quora" />
    </div>
  );
}
