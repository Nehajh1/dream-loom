import React from "react";
import { Link } from "react-router-dom";
import '../Styles/DreamCard.css';

function DreamCard({ dream }) {
  return (
    <div className="dream-card">
      <h3>{dream.title}</h3>
      <p>{dream.description}</p>
      <Link to={`/dream/${dream.id}`}>View Dream</Link>
    </div>
  );
}

export default DreamCard;
