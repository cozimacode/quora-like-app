import React, { createContext, useState } from "react";

export const MainContext = createContext();

export function MainProvider({ children }) {
  let [isOverlayActive, setOverlay] = useState(false);
  let [isModalActive, setModal] = useState(false);
  let [shareData, setShareData] = useState(undefined);

  return (
    <MainContext.Provider
      value={{
        setOverlay,
        isOverlayActive,
        setModal,
        isModalActive,
        setShareData,
        shareData,
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
