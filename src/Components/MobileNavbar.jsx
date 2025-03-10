import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleWorkDropdown = () => setIsWorkDropdownOpen(!isWorkDropdownOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden flex fixed top-0 left-0 w-full h-[5vh] z-[1050] bg-white">
        <button
          onClick={toggleNavbar}
          className="text-black text-[1.5rem] z-[1051] ml-1"
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar with Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[1049]"
          onClick={toggleNavbar}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-[1051]`}
      >
        <button
          className="absolute top-4 right-4 text-3xl z-[1052]"
          onClick={toggleNavbar}
        >
          <IoClose />
        </button>
        <ul className="mt-16 space-y-4 p-4">
          <li>
            <Link to="/" className="text-black" onClick={toggleNavbar}>
              Home
            </Link>
          </li>

          {/* Work Dropdown */}
          <li>
            <button onClick={toggleWorkDropdown} className="w-full text-left text-black">
              Portfolio {isWorkDropdownOpen ? "▲" : "▼"}
            </button>
            {isWorkDropdownOpen && (
              <ul className="mt-2 pl-4 space-y-2 text-gray-600">
                <li>
                  <Link to="/architecture" className="block hover:text-gray-500" onClick={toggleNavbar}>
                    Architecture
                  </Link>
                </li>
                <li>
                  <Link to="/interior-design" className="block hover:text-gray-500" onClick={toggleNavbar}>
                    Interior Design
                  </Link>
                </li>
                <li>
                  <Link to="/town-planning" className="block hover:text-gray-500" onClick={toggleNavbar}>
                    Town Planning
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link to="/about-us" className="text-black" onClick={toggleNavbar}>
              About
            </Link>
          </li>
          <li>
            <Link to="/team" className="text-black" onClick={toggleNavbar}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/careers" className="text-black" onClick={toggleNavbar}>
              Careers
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-black" onClick={toggleNavbar}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="text-black" onClick={toggleNavbar}>
              Blogs
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
