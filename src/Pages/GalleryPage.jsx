import React from "react";
import DreamCard from "../Components/DreamCard";
import '../Styles/GalleryPage.css';

function GalleryPage() {
  const dummyDreams = [
    { id: 1, title: "Dream 1", description: "First dream description." },
    { id: 2, title: "Dream 2", description: "Second dream description." },
  ];

  return (
    <div className="gallery-page">
      <h2>Gallery</h2>
      <div className="dream-grid">
        {dummyDreams.map((dream) => (
          <DreamCard key={dream.id} dream={dream} />
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
