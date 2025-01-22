import React from "react";

const ProfileHeader = ({ user }) => {
  return (
    <div className="profile-header">
        <img src={user.pfp} alt="Profile"/>
        <h1>{user.name}</h1>
        <p>{user.bio}</p>
    </div>
  );
};

export default ProfileHeader;