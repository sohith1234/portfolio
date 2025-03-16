import React from "react";
import Image from "next/image"; // Add this import for the Image component

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>
          <Image src="/4.jpeg" alt="Logo" width={40} height={40} />
        </span>
        <p className="text-slate-600">All rights reserved Kampalli Sohith</p>
      </div>
    </footer>
  );
};

export default Footer;
