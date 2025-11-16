import React from "react";

const Banner = ({ onClaim }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-2xl p-12 bg-gradient-to-r from-gray-900 to-pink-600 text-white shadow-lg">
        <div className="flex flex-col items-center text-center gap-4">
          <img src="/logo192.png" alt="logo" className="w-24" />
          <h1 className="text-3xl md:text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
          <p className="opacity-80">Beyond Boundaries Beyond Limits</p>
          <button onClick={onClaim} className="mt-4 px-6 py-2 rounded-full bg-yellow-300 font-semibold">
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
