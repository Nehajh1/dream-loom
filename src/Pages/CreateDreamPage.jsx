import React, { useState } from "react";
import InteractiveCanvas from "../Components/InteractiveCanvas";
import '../Styles/CreateDreamPage.css';

function CreateDreamPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blocks, setBlocks] = useState([{ content: "Start your dream here..." }]);

  const addBlock = () => {
    setBlocks([...blocks, { content: "New block" }]);
  };

  return (
    <div className="create-dream-page">
      <h2>Create a Dream</h2>
      <input
        type="text"
        placeholder="Dream Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Dream Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>

      <button onClick={addBlock}>Add Story Block</button>
      <InteractiveCanvas blocks={blocks} />

      <button>Save Dream</button>
    </div>
  );
}

export default CreateDreamPage;
