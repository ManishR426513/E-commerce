import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = ({ activeToggleSidebar, handleToggleDeactive }) => {
  return (
    <>
      <aside
        className={`bg-gray-700 text-gray-50 w-52 flex-shrink-0 h-screen  `}
      >
        <Link
          to="/"
          className="flex items-center justify-center mt-24 h-14 mb-10 font-bold text-lg"
        >
          <span className="italic font-serif bg-gray-50 text-gray-700 py-1 px-1  rounded-1-sm">
            Home
          </span>
          Page
        </Link>
        <ul className="px-1">
          <li className="px-3 py-2 flex gap-[5px] items-center transition-colors duration-200 relative hover:text-gray-50 text-gray-100">
            <MdDashboard />
            Dashboard
          </li>

          <Link to="/products">
            {" "}
            <li className="px-3 py-2 flex gap-[5px] items-center transition-colors duration-200 relative hover:text-gray-50 text-gray-100">
              <FaFileInvoiceDollar />
              Products
            </li>
          </Link>

          <li className="px-3 py-2 flex gap-[5px] items-center transition-colors duration-200 relative hover:text-gray-50 text-gray-100">
            <FaUserAlt />
            Users
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
