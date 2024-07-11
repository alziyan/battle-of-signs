// useGameBoard.js
import { useState } from "react";

export const useGameBoard = () => {
  const initialBoardState = Array(7)
    .fill(null)
    .map(() => Array(7).fill(null));
  const [board, setBoard] = useState(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [players, setPlayers] = useState({
    red: { color: "red", sign: "" },
    blue: { color: "blue", sign: "" },
  });
  const [signSelected, setSignSelected] = useState(false);
  const [battleMode, setBattleMode] = useState(false);
  const [selectedBattlePositions, setSelectedBattlePositions] = useState({
    player: null,
    opponent: null,
  });
  const [diceResult, setDiceResult] = useState({ red: null, blue: null });

  const handleCellClick = (rowIndex, colIndex) => {
    if (!signSelected || board[rowIndex][colIndex] !== null || battleMode) {
      return; // Cell is already filled or sign is not selected or battle mode is on
    }

    const newBoard = board.map((row, rIndex) =>
      row.map((cell, cIndex) => {
        if (rIndex === rowIndex && cIndex === colIndex) {
          return {
            sign: players[currentPlayer].sign,
            color: currentPlayer,
          };
        }
        return cell;
      })
    );

    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === "red" ? "blue" : "red"); // Toggle players
    setSignSelected(false); // Reset sign selection after placing coin
  };

  const handleBattleCellClick = (rowIndex, colIndex) => {
    if (!battleMode) return;

    const currentCoin = board[rowIndex][colIndex];

    if (!selectedBattlePositions.player) {
      // Select player's own coin
      if (currentCoin && currentCoin.color === currentPlayer) {
        setSelectedBattlePositions({
          ...selectedBattlePositions,
          player: { rowIndex, colIndex },
        });
      }
    } else if (!selectedBattlePositions.opponent) {
      // Select opponent's coin (adjacent only and with opposite sign)
      const { player } = selectedBattlePositions;
      const isAdjacent =
        (rowIndex === player.rowIndex &&
          Math.abs(colIndex - player.colIndex) === 1) ||
        (colIndex === player.colIndex &&
          Math.abs(rowIndex - player.rowIndex) === 1);

      const playerSign = board[player.rowIndex][player.colIndex].sign;
      const opponentSign = playerSign === "+" ? "-" : "+";

      if (
        currentCoin &&
        currentCoin.color !== currentPlayer &&
        currentCoin.sign === opponentSign &&
        isAdjacent
      ) {
        setSelectedBattlePositions({
          ...selectedBattlePositions,
          opponent: { rowIndex, colIndex },
        });
      }
    }
  };

  const handleSignSelect = (sign) => {
    const updatedPlayers = {
      ...players,
      [currentPlayer]: {
        ...players[currentPlayer],
        sign: sign,
      },
    };
    setPlayers(updatedPlayers);
    setSignSelected(true); // Mark sign as selected
  };

  const handleBattleClick = () => {
    setBattleMode(true);
    setDiceResult({ red: null, blue: null });
    setSelectedBattlePositions({ player: null, opponent: null });
  };

  const handleRollDice = (player) => {
    const rollDice = () => Math.floor(Math.random() * 11) + 2;
    const newDiceResult = { ...diceResult, [player]: rollDice() };
    setDiceResult(newDiceResult);

    if (newDiceResult.red !== null && newDiceResult.blue !== null) {
      // Determine the winner
      const winner = newDiceResult.red > newDiceResult.blue ? "red" : "blue";

      // Alert with dice results and winner
      alert(
        `Red Player Dice: ${newDiceResult.red}\nBlue Player Dice: ${
          newDiceResult.blue
        }\nPlayer ${winner.toUpperCase()} wins the battle!`
      );

      // Update board with battle result
      const { player: playerPos, opponent: opponentPos } =
        selectedBattlePositions;

      const winningSign = players[winner].sign;
      const winningColor = players[winner].color;

      const newBoard = board.map((row, rIndex) =>
        row.map((cell, cIndex) => {
          if (
            rIndex === opponentPos.rowIndex &&
            cIndex === opponentPos.colIndex
          ) {
            return { sign: winningSign, color: winningColor };
          }
          if (rIndex === playerPos.rowIndex && cIndex === playerPos.colIndex) {
            return { sign: winningSign, color: winningColor };
          }
          return cell;
        })
      );
      setBoard(newBoard);

      setCurrentPlayer(winner);
      setBattleMode(false);
      setSelectedBattlePositions({ player: null, opponent: null }); // Reset selected battle positions
      setSignSelected(false); // Reset sign selection after battle
      setDiceResult({ red: null, blue: null }); // Clear dice results after battle
    }
  };

  return {
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
  };
};
