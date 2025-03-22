import React from "react";

const ProjectTag = ({ name, onClick, isSelected, theme }) => {
  const buttonStyles = isSelected
    ? theme === "dark"
      ? "text-white border-primary-500"
      : "text-black border-blue-500"
    : theme === "dark"
    ? "text-[#ADB7BE] border-slate-600 hover:border-white"
    : "text-gray-700 border-gray-300 hover:border-black";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;