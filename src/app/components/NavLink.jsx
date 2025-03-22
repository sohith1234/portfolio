import Link from "next/link";

const NavLink = ({ href, title, theme }) => {
  return (
    <Link
      href={href}
      className={`block py-2 pl-3 pr-4 sm:text-xl rounded md:p-0 ${theme === "dark" ? "text-[#ADB7BE] hover:text-white" : "text-gray-700 hover:text-black"}`}
    >
      {title}
    </Link>
  );
};

export default NavLink;