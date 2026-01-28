import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaHeart, FaSignOutAlt } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex flex-row justify-between items-center pt-[10px] px-[2%] pb-[3px] bg-white shadow-[0_0_50px_#3f2c272e]">
      <h1 className="text-xl font-bold">Recipe App</h1>

      <ul className="flex gap-6 items-center">
        <li>
          <Link to="/dashboard" className="flex items-center gap-2 hover:text-yellow-400">
            <FaHome /> Home
          </Link>
        </li>

        <li>
          <Link to="/recipes" className="flex items-center gap-2 hover:text-yellow-400">
            <FaBook /> Recipes
          </Link>
        </li>

        <li>
          <Link to="/favorites" className="flex items-center gap-2 hover:text-yellow-400">
            <FaHeart /> Favorites
          </Link>
        </li>

        <li>
          <button className="flex items-center gap-2 text-red-400 hover:text-red-500">
            <FaSignOutAlt /> Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}
