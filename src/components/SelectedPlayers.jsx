import React from "react";
import PropTypes from "prop-types";

const SelectedPlayers = ({ players, onRemove }) => {
  if (players.length === 0) {
    return <div className="text-gray-500">No players selected yet.</div>;
  }

  return (
    <div className="space-y-4">
      {players.map((p) => (
        <div key={p.playerId} className="bg-white p-4 rounded-xl flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center">Img</div>
            <div>
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-500">{p.role}</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="font-semibold">{p.price}</div>
            <button onClick={() => onRemove(p.playerId)} className="px-3 py-1 rounded-md border text-red-600">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

SelectedPlayers.propTypes = {
  players: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default SelectedPlayers;
