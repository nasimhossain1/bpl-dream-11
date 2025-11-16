import React from "react";

const Newsletter = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="rounded-xl p-8 bg-gradient-to-r from-blue-50 to-pink-50 shadow-lg">
        <div className="text-center">
          <h3 className="text-xl font-bold">Subscribe to our Newsletter</h3>
          <p className="text-gray-600">Get the latest updates and news right in your inbox!</p>
          <div className="mt-4 flex justify-center gap-2">
            <input placeholder="Enter your email" className="px-4 py-2 rounded-l-lg border" />
            <button className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-pink-400 to-yellow-300">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
