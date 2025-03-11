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
import MobileNavbar from "./Components/MobileNavbar";
import AiCorner from "./Pages/AiCorner";
import Navbar2 from "./Components/Navbar2";
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
      <MobileNavbar />
      {/* Mobile Menu Button */}
     

      <div className="w-full flex justify-center ">
        <div className="App w-full flex-col items-center justify-center ">
          {/* Sidebar / Navbar with fixed width */}
          <div className="w-full hidden md:flex ">
            <Navbar />
          </div>
          {/* <div className="w-full hidden md:flex mt-[15vh]">
            <Navbar2 />
          </div> */}
          {/* Main Content Area (flex-grow to take remaining space) */}
          <div className=" flex justify-center flex-grow md:w-full flex-col">
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
                <Route path="/ai-corner" element={<AiCorner />} />
                
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
