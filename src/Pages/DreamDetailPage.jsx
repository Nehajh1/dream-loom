import React from "react";
import { useParams } from "react-router-dom";

function DreamDetails() {
  const { id } = useParams();

  const dreams = {
    1: "This is the full text for Dream abc.",
    2: "This is the full text for Dream 2."
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dream Details</h2>
      <p>{dreams[id]}</p>
    </div>
  );
}

export default DreamDetails;
