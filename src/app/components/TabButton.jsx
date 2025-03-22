import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children, theme }) => {
  const buttonClasses = active
    ? theme === "dark"
      ? "text-white"
      : "text-black"
    : theme === "dark"
    ? "text-[#ADB7BE]"
    : "text-gray-700";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 ${theme === "dark" ? "bg-primary-500" : "bg-blue-500"} mt-2 mr-3`}
      ></motion.div>
    </button>
  );
};

export default TabButton;