import React, { useContext, useEffect, useRef } from "react";
import { MainContext } from "../../context/MainContext";
import QuestionModalContent from "../QuestionModalContent.js";
import "../styles/utilities/modal.css";

export default function Modal() {
  const modalRef = useRef();
  const { setModal, shareData } = useContext(MainContext);

  const handleClose = (e) => {
    if (modalRef.current.contains(e.target)) {
      return;
    }
    setModal(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClose);
    return () => {
      document.removeEventListener("click", handleClose);
    };
  }, []);

  return (
    <div className="qla-modal">
      <div ref={modalRef}>{!shareData ? <QuestionModalContent /> : null}</div>
    </div>
  );
}
