import React from "react";
import "./App.css";
import profiles from "./assets/data";
import ProfileCard from "./Components/ProfileCard/ProfileCard";

function App() {
  return (
    <div className="app-container">
      <div className="profile-list">
        {profiles.map((profile, i) => (
          <ProfileCard
            key={i}
            name={profile.name}
            age={profile.age}
            occupation={profile.occupation}
            image={profile.image}
            address={profile.address}
            
          />
        ))}
      </div>
    </div>
  );
}

export default App;
