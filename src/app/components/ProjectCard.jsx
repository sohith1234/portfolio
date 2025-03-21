import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, theme }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className={`overlay items-center justify-center absolute top-0 left-0 w-full h-full ${theme === "dark" ? "bg-[#181818]" : "bg-gray-100"} bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500`}>
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className={`h-10 w-10 ${theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white`} />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className={`h-10 w-10 ${theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white`} />
          </Link>
        </div>
      </div>
      <div className={`rounded-b-xl mt-3 ${theme === "dark" ? "bg-[#181818]" : "bg-gray-100"} py-6 px-4`}>
        <h5 className={`text-xl font-semibold mb-2 ${theme === "dark" ? "text-white" : "text-black"}`}>{title}</h5>
        <p className={`${theme === "dark" ? "text-[#ADB7BE]" : "text-gray-700"}`}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;