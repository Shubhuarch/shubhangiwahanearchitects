import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import Home from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Link } from "react-router-dom";
import Chat from "./Components/Chat";
import Work from "./Pages/Work";
import Team from "./Pages/Team";
import Blogs from "./Pages/Blogs";
import Careers from "./Pages/Careers";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import React, { useState, useRef, useEffect } from "react";
import Architecture from "./Pages/Architecture";
import InteriorDesign from "./Pages/InteriorDesign";
import TownPlanning from "./Pages/TownPlanning";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Mobile Menu Button */}
      <div className="md:hidden flex  fixed top-0 left-0 w-full h-[5vh] z-[1050] bg-white">
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

      <div className="w-full flex justify-center ">
        <div className="App w-full flex-col items-center justify-center ">
          {/* Sidebar / Navbar with fixed width */}
          <div className="w-full hidden md:flex ">
            <Navbar />
          </div>
          {/* Main Content Area (flex-grow to take remaining space) */}
          <div className=" flex justify-center flex-grow w-full flex-col">
            <div className="w-full flex justify-center">
              {/* Uncomment Routes when needed */}
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/work" element={<Work />} />
                <Route path="/team" element={<Team />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/architecture" element={<Architecture />} />
                <Route path="/interior-design" element={<InteriorDesign />} />
                <Route path="/town-planning" element={<TownPlanning />} />
              </Routes>
            </div>
          </div>

          {/* Chat Component */}
          <Chat />
        </div>
      </div>
    </Router>
  );
}

export default App;
