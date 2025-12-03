import React from "react";
import DreamCard from "../Components/DreamCard";

function ProfilePage() {
  const dummyDreams = [
    { id: 1, title: "My Dream 1", description: "My first dream." },
    { id: 2, title: "My Dream 2", description: "My second dream." },
  ];

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <div className="dream-grid">
        {dummyDreams.map((dream) => (
          <DreamCard key={dream.id} dream={dream} />
        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
