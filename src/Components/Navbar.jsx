import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { GiLadder } from "react-icons/gi";

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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickOutside = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  const menuRef = useOutsideClick(handleClickOutside);

  return (
    <div className="h-[15vh] md:h-[100vh]  w-full bg-white-500">
      <div>
        <div className="w-[80%] mt-2 flex justify-center">
          <img src={logo} alt="logo" />
        </div>

        {/* Links */}
        <div className="flex justify-center mt-[8vh]">
          <ul className=" w-[90%] text-left space-y-4 ">
          <li className="hover:bg-green-100">
              
              <Link
                to="/"
                className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
              >
                Home
              </Link>
            </li>
            <li className="hover:bg-green-100">
              
              <Link
                to="/work"
                className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
              >
                Work
              </Link>
            </li>
            <li className="hover:bg-green-100">
              <Link
                to="/about-us"
                className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
              >
                About
              </Link>
            </li>
            <li className="hover:bg-green-100">
              <Link
                to="/team"
                className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
              >
                Team
              </Link>
            </li>
            <li className="hover:bg-green-100">
              <Link
                to="/careers"
                className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
              >
                Careers
              </Link>
            </li>
            <li className="hover:bg-green-100">
              <Link
                to="/contact"
                className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
              >
                Contact
              </Link>
            </li>
            <li className="hover:bg-green-100">
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
              <li className="hover:bg-green-100">
                <Link
                  onClick={toggleModal}
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  Book a Consultation
                </Link>
              </li>
              <li className="hover:bg-green-100">
                <Link
                  to="/"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  AI Corner
                </Link>
              </li>
              <li className="hover:bg-green-100">
                <Link
                  to="/team"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  Interior Design
                </Link>
              </li>
              <li className="hover:bg-green-100">
                <Link
                  to="/"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  Careers
                </Link>
              </li>
              <li className="hover:bg-green-100">
                <Link
                  to="/"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  Contact
                </Link>
              </li>
              <li className="hover:bg-green-100">
                <Link
                  to="/"
                  className="text-[#584039] text-sm font-semibold hover:text-[#C89A74] p-2 m-2"
                >
                  Blogs
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
  );
};

export default Navbar;
