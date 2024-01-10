import React from "react";
import PAvatar from "../../assets/profile-avatar.png";

export default function Avatar() {
  return (
    <div className="avatar-block">
      <img src={PAvatar} alt="profile avatar" />
    </div>
  );
}
