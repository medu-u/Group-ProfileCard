// src/components/ProfileCard.jsx

import React from "react";

function ProfileCard({ name, age, image, occupation, address }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h2 className="profile-name">Name: {name}</h2>
      <p className="profile-age">Age: {age}</p>
      <p className="profile-occupation">Occupation: {occupation}</p>
      {address && <h2 className="profile-name">Address: {address}</h2>}
    </div>
  );
}

export default ProfileCard;

// import React from "react";
// import "./Profile.css";

// const ProfileCard = ({ name, age, occupation, profileImage }) => {
//   return (
//     <div className="profile-card">
//       <img src={profileImage} alt={name} className="profile-image" />
//       <h2 className="profile-name">{name}</h2>
//       <p className="profile-age">Age: {age}</p>
//       <p className="profile-occupation">{occupation}</p>
//     </div>
//   );
// };

// export default ProfileCard;
