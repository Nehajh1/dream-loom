import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/DreamCard.css";

function DreamCard({ dream }) {
  const navigate = useNavigate();

  return (
    <div className="dream-card">
      <h3>{dream.title}</h3>
      <p>{dream.description}</p>

      <button
        className="view-btn"
        onClick={() => navigate(`/dream/${dream.id}`)}
      >
        View Dream
      </button>
    </div>
  );
}

export default DreamCard;

