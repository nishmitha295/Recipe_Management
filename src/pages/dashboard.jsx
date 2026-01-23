import { Link } from "react-router-dom";
import { FaHome, FaBook, FaHeart, FaSignOutAlt } from "react-icons/fa";

export default function Dashboard() {
  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between bg-gray-900 px-6 py-4 text-white">
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

      {/* Page Content */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Welcome to Dashboard</h2>
      </div>
    </>
  );
}
