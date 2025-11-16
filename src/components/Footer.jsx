import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
        <div className="flex justify-center items-center my-4">
            <img src="/public/logo-footer.png" alt="" className="h-32 w-auto" />
        </div>
        
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">About Us</h4>
          <p className="text-sm text-gray-300 mt-2">We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>
        <div>
          <h4 className="font-semibold">Quick Links</h4>
          <ul className="mt-2 text-sm text-gray-300 space-y-1">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Subscribe</h4>
          <p className="text-sm text-gray-300 mt-2">Subscribe to our newsletter for the latest updates.</p>
          <div className="mt-4 flex justify-center gap-2">
            <input placeholder="Enter your email" className="px-4 py-2 rounded-l-lg border" />
            <button className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-pink-400 to-yellow-300">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="text-center py-4 bg-gray-800">©2024 Your Company All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
