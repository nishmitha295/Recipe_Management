import { Link } from "react-router-dom";
import { FaHome, FaBook, FaHeart, FaSignOutAlt } from "react-icons/fa";
import Navbar from "../components/navbar";

export default function Dashboard() {
  return (
    <>
      {/* Navbar */}
    <Navbar/>

      {/* Page Content */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Welcome to Dashboard</h2>
      </div>
    </>
  );
}
