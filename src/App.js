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
        className="absolute top-4 right-4 px-4 py-2 bg-gray-50 text-black border border-blue-200 rounded hover:bg-gray-200"
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
