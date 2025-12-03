import React from "react";
import StoryBlock from "../Components/StoryBlock";
import '../Styles/IntereactiveCanvas.css';

function InteractiveCanvas({ blocks }) {
  return (
    <div className="interactive-canvas">
      {blocks && blocks.map((block, index) => (
        <StoryBlock key={index} content={block.content} />
      ))}
    </div>
  );
}

export default InteractiveCanvas;
