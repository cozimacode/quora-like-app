import React, { useCallback, useContext } from "react";
import { userAvatar } from "../../assets";
import { MainContext } from "../../context/MainContext";

export default function PostQuestion() {
  const { setModal } = useContext(MainContext);
  const addQuestion = useCallback(() => setModal(true), [setModal]);

  return (
    <div onClick={addQuestion} className="qla-post-question">
      <div className="qla-logged-user">
        <img src={userAvatar} alt="user avatar" />
        Naser Mohd Baig
      </div>
      <span>What is your question or link?</span>
    </div>
  );
}
