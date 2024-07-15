// Board.js
import React from "react";
import Coin from "./Coin";
import { useGameBoard } from "../hooks/useGameBoard";

const Board = () => {
  const {
    board,
    currentPlayer,
    signSelected,
    battleMode,
    selectedBattlePositions,
    diceResult,
    handleCellClick,
    handleBattleCellClick,
    handleSignSelect,
    handleBattleClick,
    handleRollDice,
  } = useGameBoard();

  return (
    <div className="relative bg-wood-pattern mx-auto max-w-max p-2">
      <div className="grid grid-cols-7 grid-rows-7 gap-1">
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`relative w-14 h-14 border rounded-full flex items-center justify-center bg-wood-pattern ${
                selectedBattlePositions.player &&
                selectedBattlePositions.player.rowIndex === rowIndex &&
                selectedBattlePositions.player.colIndex === colIndex
                  ? "border-4 border-black"
                  : selectedBattlePositions.opponent &&
                    selectedBattlePositions.opponent.rowIndex === rowIndex &&
                    selectedBattlePositions.opponent.colIndex === colIndex
                  ? "border-4 border-black"
                  : ""
              }`}
              onClick={() =>
                battleMode
                  ? handleBattleCellClick(rowIndex, colIndex)
                  : handleCellClick(rowIndex, colIndex)
              }
            >
              {cell ? <Coin sign={cell.sign} color={cell.color} /> : null}
              {/* {<Coin sign={cell.sign} color={cell.color} /> : null} */}

              <div className="absolute inset-0 border border-dashed rounded-full"></div>
            </div>
          ))
        )}
      </div>

      <div className="mt-2 text-center">
        <p className="mb-2">Current Player: {currentPlayer}</p>
        <div className="flex justify-center">
          {/* <button
            className={`mr-2 w-12 h-12 rounded-full flex items-center justify-center ${
              currentPlayer === "red"
                ? `bg-red-500 text-white ${
                    signSelected ? "border-4 border-black" : ""
                  }`
                : `bg-blue-500 text-white ${
                    signSelected ? "border-4 border-black" : ""
                  }`
            } text-2xl`}
            onClick={() => handleSignSelect("+")}
            disabled={signSelected || battleMode}
          >
            +
          </button>
          <button
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              currentPlayer === "red"
                ? `bg-red-500 text-white ${
                    signSelected ? "border-4 border-black" : ""
                  }`
                : `bg-blue-500 text-white ${
                    signSelected ? "border-4 border-black" : ""
                  }`
            } text-2xl`}
            onClick={() => handleSignSelect("-")}
            disabled={signSelected || battleMode}
          >
            -
          </button> */}

          <button
            className={`mr-2 w-12 h-12 rounded-full flex items-center justify-center ${
              currentPlayer === "red"
                ? `bg-red-500 text-white ${signSelected ? "" : ""}`
                : `bg-blue-500 text-white ${signSelected ? "" : ""}`
            } text-2xl`}
            onClick={() => handleSignSelect("+")}
            disabled={signSelected || battleMode}
          >
            +
          </button>
          <button
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              currentPlayer === "red"
                ? `bg-red-500 text-white ${signSelected ? "" : ""}`
                : `bg-blue-500 text-white ${signSelected ? "" : ""}`
            } text-2xl`}
            onClick={() => handleSignSelect("-")}
            disabled={signSelected || battleMode}
          >
            -
          </button>
        </div>

        <div className="mt-4">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded"
            onClick={handleBattleClick}
            disabled={battleMode}
          >
            Call a Battle
          </button>
        </div>

        {battleMode && (
          <div className="mt-4">
            {selectedBattlePositions.player ? (
              <div>
                <p>Select the opponent's coin (adjacent only)</p>
                {selectedBattlePositions.opponent ? (
                  <div>
                    <p>Red Player Dice: {diceResult.red}</p>
                    <p>Blue Player Dice: {diceResult.blue}</p>
                    <button
                      className="px-4 py-2 bg-red-500 text-white rounded mr-2"
                      onClick={() => handleRollDice("red")}
                      disabled={diceResult.red !== null}
                    >
                      Red Player Roll Dice
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded"
                      onClick={() => handleRollDice("blue")}
                      disabled={diceResult.blue !== null}
                    >
                      Blue Player Roll Dice
                    </button>
                  </div>
                ) : (
                  <p>Select the opponent's coin</p>
                )}
              </div>
            ) : (
              <p>Select your coin for battle</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
