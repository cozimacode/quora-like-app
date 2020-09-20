import React from "react";
import { userAvatar } from "../../assets";

export default function PostQuestion() {
  return (
    <div className="qla-post-question">
      <div className="qla-logged-user">
        <img src={userAvatar} alt="user avatar" />
        Naser Mohd Baig
      </div>
      <span>What is your question or link?</span>
    </div>
  );
}
