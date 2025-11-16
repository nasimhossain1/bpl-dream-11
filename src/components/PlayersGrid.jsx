import React from "react";
import PropTypes from "prop-types";

const PlayersGrid = ({ players, onChoose }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {players.map((p) => (
        <div key={p.playerId} className="bg-white p-4 rounded-xl shadow-sm">
          <div className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center">
            {p.image ? <img src={p.image} alt={p.name} /> : <div className="text-gray-400">Image</div>}
          </div>
          <h3 className="font-semibold">{p.name}</h3>
          <div className="text-sm text-gray-500">{p.country} • {p.role}</div>
          <div className="mt-2 text-sm">
            <div>Bat: {p.battingType}</div>
            <div>Bowling: {p.bowlingType}</div>
            <div className="font-semibold mt-2">Price: {p.price}</div>
          </div>
          <div className="mt-4">
            <button onClick={() => onChoose(p)} className="w-full px-3 py-2 rounded-md border bg-white">
              Choose Player
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

PlayersGrid.propTypes = {
  players: PropTypes.array.isRequired,
  onChoose: PropTypes.func.isRequired,
};

export default PlayersGrid;
