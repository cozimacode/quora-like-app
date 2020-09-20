import React from "react";
import { userAvatar } from "../../assets";

export default function Profile() {
  return (
    <div className="qla-profile">
      <img src={userAvatar} alt="user avatar" />
    </div>
  );
}
