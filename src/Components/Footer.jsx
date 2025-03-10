import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#fafafa] text-black py-10 px-5 md:px-20">
      {/* Top Section: Logo and Links */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-600 pb-8">
        {/* Logo Section */}
        <div className="mb-6 md:mb-0">
          <img src={logo} alt="logo" className="h-16 md:h-20" />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm md:text-base">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/architecture" className="hover:text-gray-400 transition">Architecture</Link>
          <Link to="/interior-design" className="hover:text-gray-400 transition">Interior Design</Link>
          <Link to="/town-planning" className="hover:text-gray-400 transition">Town Planning</Link>
          <Link to="/about-us" className="hover:text-gray-400 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
          <Link to="/blogs" className="hover:text-gray-400 transition">Blogs</Link>
          <Link to="/ai-corner" className="hover:text-gray-400 transition">AI Corner</Link>
          <Link to="/book-consultation" className="hover:text-gray-400 transition">Book A Consultation</Link>
        </div>
      </div>

      {/* Bottom Section: Social Media and Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-400">
        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=61559404326535" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-400 transition text-lg" />
          </a>
          <a href="https://www.instagram.com/shubhangiwahanearchitects/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-600 transition text-lg" />
          </a>
          <a href="https://wa.me/+917738700860?text=Hi I want to book a Consultation"
          target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-black transition text-lg" />
          </a>
          <a href="https://www.linkedin.com/in/shubhangi-wahane/" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-green-600 transition text-lg" />
          </a>
        </div>

        {/* Copyright */}
        <p className="mt-4 md:mt-0">© {new Date().getFullYear()} Shubhangi Wahane Architects. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
