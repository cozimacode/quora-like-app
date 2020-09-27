import React, { useContext, useCallback } from "react";
import { Magnifier } from "../../assets";
import { MainContext } from "../../context/MainContext";
import "../styles/header/search.css";

export default function Search() {
  const { setOverlay } = useContext(MainContext);
  const handleFocus = useCallback(() => setOverlay(true), [setOverlay]);
  const handleBlur = useCallback(() => setOverlay(false), [setOverlay]);

  return (
    <div className="qla-search">
      <Magnifier />
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="text"
        placeholder="Search Quora"
      />
    </div>
  );
}
