import React from "react";
import Image from "next/image";

const Footer = ({ theme }) => {
  return (
    <footer className={`footer border z-10 ${theme === "dark" ? "border-t-[#33353F] border-l-transparent border-r-transparent" : "border-t-gray-200 border-l-transparent border-r-transparent"} ${theme === "dark" ? "text-white" : "text-black"}`}>
      <div className="container p-12 flex justify-between">
        <span>
          <Image src="/4.jpeg" alt="Logo" width={40} height={40} />
        </span>
        <p className={`${theme === "dark" ? "text-slate-600" : "text-gray-600"}`}>
          All rights reserved Kampalli Sohith
        </p>
      </div>
    </footer>
  );
};

export default Footer;