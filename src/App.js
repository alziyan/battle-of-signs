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
        className="absolute  top-1 right-1 px-2 py-1  md:top-4 md:right-4 md:px-4 md:py-2 bg-gray-50 text-black border border-blue-200 rounded hover:bg-gray-200"
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
