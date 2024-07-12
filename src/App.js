// App.js
import React, { useState } from "react";
import Board from "./components/Board";
import InstructionsModal from "./components/InstructionsModal";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [showInstructions, setShowInstructions] = useState(true);

  const handleShowInstructions = () => setShowInstructions(true);
  const handleCloseInstructions = () => setShowInstructions(false);

  return (
    <div className="App">
      <h1 className="text-center text-3xl font-bold mb-2">Battle of Signs</h1>
      <Board />
      <button
        className="absolute top-4 right-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleShowInstructions}
      >
        Help
      </button>
      <InstructionsModal
        show={showInstructions}
        handleClose={handleCloseInstructions}
      />
    </div>
  );
};

export default App;
