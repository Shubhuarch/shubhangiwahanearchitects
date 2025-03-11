import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

// Custom hook to handle clicks outside of the specified element
const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const menuRef = useOutsideClick(handleClickOutside);

  return (
    <div className="hidden md:flex sticky top-0 left-0 h-[15vh] md:h-[100vh] w-full bg-white-500 z-50">
      <div>
        <div>
          <div className="w-[80%] mt-2 flex justify-center">
            <img src={logo} alt="logo" />
          </div>

          {/* Links */}
          <div className="flex justify-center mt-[8vh]">
            <ul className=" w-[90%] text-left space-y-4 ">
              <li className="hover:bg-gray-50">
                <Link
                  to="/"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  Home
                </Link>
              </li>
              <li className="hover:hover:bg-gray-50">
                <Link
                  to="/work"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  Work
                </Link>
              </li>
              <li className="hover:hover:bg-gray-50">
                <Link
                  to="/about-us"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  About
                </Link>
              </li>
              <li className="hover:hover:bg-gray-50">
                <Link
                  to="/team"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  Team
                </Link>
              </li>
              <li className="hover:hover:bg-gray-50">
                <Link
                  to="/careers"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  Careers
                </Link>
              </li>
              <li className="hover:hover:bg-gray-50">
                <Link
                  to="/contact"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  Contact
                </Link>
              </li>
              <li className="hover:hover:bg-gray-50">
                <Link
                  to="/blogs"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          {/* works filter */}
          <div className="flex w-full flex-col mt-[8vh]">
            <p className="text-sm text-left text-gray-400 mb-2 ml-2">
              Works Filter
            </p>
            <div className="flex justify-center">
              <ul className=" w-[90%] text-left space-y-1 ">
                <li className="hover:hover:bg-gray-50">
                  <Link
                    onClick={toggleModal}
                    className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                  >
                    Book a Consultation
                  </Link>
                </li>
                <li className="hover:hover:bg-gray-50">
                  <Link
                    to="/"
                    className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                  >
                    AI Corner
                  </Link>
                </li>
                <li className="hover:hover:bg-gray-50">
                  <Link
                    to="/team"
                    className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                  >
                    Interior Design
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
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

      <div className="md:hidden flex justify-between items-center bg-red-400">
        <img src="logo.png" alt="Logo" className="w-16" />
        <button onClick={toggleNavbar} className="text-black text-3xl">
          <FiMenu />
        </button>
      </div>

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <button
          className="absolute top-4 right-4 text-3xl"
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
          <li>
            <Link to="/work" className="text-black" onClick={toggleNavbar}>
              Work
            </Link>
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
    </div>
  );
};

export default Navbar2;
