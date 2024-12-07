import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CiYoutube } from 'react-icons/ci';
import { FaRegUserCircle } from 'react-icons/fa';

const Head = () => {
  return (
    <div className="flex flex-col sm:flex-row p-2 sm:p-5 justify-between items-center shadow-lg">
      {/* Top Section */}
      <div className="flex justify-between items-center w-full sm:w-auto mb-2 sm:mb-0">
        {/* Hamburger Menu */}
        <GiHamburgerMenu size={50} className="sm:hidden" />

        {/* Logo */}
        <div className="flex items-center">
          <CiYoutube size={30} />
          <span className="ml-2 text-lg">chefTube</span>
        </div>

        {/* User Icon */}
        <FaRegUserCircle size={35} className="sm:hidden" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center w-full sm:w-auto">
        <input
          type="text"
          className="h-20 w-full sm:w-64 px-4 border border-gray-300 rounded-l-full sm:rounded-l-full"
          placeholder="Search"
        />
        <button className="h-20 px-4 bg-gray-100 border border-gray-300 rounded-r-full sm:rounded-r-full ml-2 sm:ml-0">
          🔍
        </button>
      </div>

      {/* User Icon */}
      <FaRegUserCircle size={45} className="hidden sm:block" />
    </div>
  );
}

export default Head;