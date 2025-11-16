import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ coins }) => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-400 flex items-center justify-center text-white font-bold">
            C
          </div>
          <div className="text-lg font-semibold">Cricket</div>
        </div>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-gray-700">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>
          <div className="px-4 py-2 rounded-full border flex items-center gap-2">
            <span className="font-semibold">{coins}</span>
            <span>Coin</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  coins: PropTypes.number.isRequired,
};

export default Navbar;
