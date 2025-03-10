import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="hidden md:flex justify-between  top-0 left-0 h-[15vh] w-full bg-white-500 z-50 bg-[#F0EFEC] sticky">
      <div className="flex w-full h-full justify-between">
        <div className="flex items-center justify-between h-full w-full">
          <div className="w-[14%] h-full flex items-center pl-[7vh]">
            <motion.img
              src={logo}
              alt="logo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex w-[65%] items-center h-full justify-center">
            <ul className="flex justify-evenly items-center w-[100%] text-left text-[1rem] uppercase">
              <li className="hover:bg-gray-50">
                <Link
                  to="/"
                  className="text-[#584039] font-semibold hover:text-[#C89A74]"
                >
                  Home
                </Link>
              </li>

              {/* Portfolio Dropdown */}
              <li
                className="relative hover:bg-gray-50"
                onMouseEnter={() => setIsPortfolioOpen(true)}
                onMouseLeave={() => setIsPortfolioOpen(false)}
              >
                <Link className="text-[#584039] font-semibold hover:text-[#C89A74]">
                  Portfolio
                </Link>
                {/* Dropdown Menu */}
                {isPortfolioOpen && (
                  <ul className="absolute left-0 mt-0 w-[250px] bg-white bg-opacity-30 shadow-lg uppercase text-[1rem]">
                    <li className="p-2 hover:bg-[#F0EFEC]">
                      <Link to="/architecture" className="text-black">
                        Architecture
                      </Link>
                    </li>
                    <li className="p-2 hover:bg-[#F0EFEC]">
                      <Link to="/interior-design" className="text-black">
                        Interior Design
                      </Link>
                    </li>
                    <li className="p-2 hover:bg-[#F0EFEC]">
                      <Link to="/town-planning" className="text-black">
                        Town Planning
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="hover:bg-gray-50">
                <Link
                  to="/about-us"
                  className="text-[#584039] font-semibold hover:text-[#C89A74]"
                >
                  About
                </Link>
              </li>

              <li className="hover:bg-gray-50">
                <Link
                  to="/contact"
                  className="text-[#584039] font-semibold hover:text-[#C89A74]"
                >
                  Contact
                </Link>
              </li>

              <li className="hover:bg-gray-50">
                <Link
                  to="/blogs"
                  className="text-[#584039] font-semibold hover:text-[#C89A74]"
                >
                  Blogs
                </Link>
              </li>

              <li className="hover:bg-gray-50">
                <Link
                  to="/ai-corner"
                  className="text-[#584039] font-semibold hover:text-[#C89A74]"
                >
                  AI Corner
                </Link>
              </li>

              <li className="hover:bg-gray-50 border-2 border-[#C89A74] p-2">
                <Link
                  to="/book-consultation"
                  onClick={toggleModal}
                  className="hover:text-[#584039] font-semibold text-[#C89A74]"
                >
                  Book A Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-4 rounded-lg w-3/4 h-3/4 relative">
              <button
                className="absolute top-2 right-2 text-xl font-bold"
                onClick={toggleModal}
              >
                &times;
              </button>
              <iframe
                src="https://calendly.com/shubhangiwahane/free-vastu-consultation-call"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
