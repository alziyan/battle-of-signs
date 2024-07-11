// Coin.js
import React from "react";

const Coin = ({ sign, color }) => {
  const coinColor = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    black: "bg-black",
    pink: "bg-pink-500",
    orange: "bg-orange-500",
  };

  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center ${coinColor[color]} text-white text-2xl`}
    >
      {sign}
    </div>
  );
};

export default Coin;
