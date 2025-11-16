import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import PlayersGrid from "./components/PlayersGrid";
import SelectedPlayers from "./components/SelectedPlayers";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import playersData from "./data/players.json";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [coins, setCoins] = useState(0);
  const [view, setView] = useState("available"); // 'available' or 'selected'
  const [availablePlayers, setAvailablePlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  useEffect(() => {
    // load players (from players.json)
    setAvailablePlayers(playersData);
    document.title = "DreamTeam Cricket Selector";
  }, []);

  const claimCoins = (amount = 500000) => {
    setCoins((c) => c + amount);
    toast.success(`You received ${amount} coins!`);
  };

  const choosePlayer = (player) => {
    // validations
    if (selectedPlayers.some((p) => p.playerId === player.playerId)) {
      toast.error("Player already selected");
      return;
    }
    if (selectedPlayers.length >= 6) {
      toast.error("You can select up to 6 players only");
      return;
    }
    if (coins < player.price) {
      toast.error("Not enough coins. Claim more coins from the banner.");
      return;
    }
    setSelectedPlayers((prev) => [...prev, player]);
    setCoins((c) => c - player.price);
    toast.success(`${player.name} added to your team`);
  };

  const removePlayer = (playerId) => {
    const toRemove = selectedPlayers.find((p) => p.playerId === playerId);
    if (!toRemove) return;
    setSelectedPlayers((prev) => prev.filter((p) => p.playerId !== playerId));
    setCoins((c) => c + toRemove.price); // refund price
    toast.info(`${toRemove.name} removed and price refunded`);
  };

  const handleAddMore = () => setView("available");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar coins={coins} />
      <Banner onClaim={() => claimCoins(500000)} />
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">
            {view === "available"
              ? "Available Players"
              : `Selected Player (${selectedPlayers.length}/6)`}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setView("available")}
              className={`px-4 py-2 rounded-full border ${view === "available" ? "bg-yellow-300" : "bg-white"}`}
            >
              Available
            </button>
            <button
              onClick={() => setView("selected")}
              className={`px-4 py-2 rounded-full border ${view === "selected" ? "bg-yellow-300" : "bg-white"}`}
            >
              Selected ({selectedPlayers.length})
            </button>
          </div>
        </div>

        {view === "available" ? (
          <PlayersGrid players={availablePlayers} onChoose={choosePlayer} />
        ) : (
          <>
            <SelectedPlayers players={selectedPlayers} onRemove={removePlayer} />
            <div className="mt-6">
              <button onClick={handleAddMore} className="px-4 py-2 rounded-lg border bg-yellow-100">
                Add More Player
              </button>
            </div>
          </>
        )}
      </main>

      <Newsletter />
      <Footer />
      <ToastContainer position="top-right" autoClose={2500} />
    </div>
  );
}

export default App;
