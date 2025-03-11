import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer2 = () => {
  return (
    <div className="bg-white text-gray-900 flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start">
        <header className="flex flex-col w-[90%] md:w-[50%] py-8 px-6 md:px-16 items-center md:items-start">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <img
              src={logo}
              alt="logo"
              className="h-16 md:h-20 mx-auto md:mx-0"
            />
          </div>
          {/* Navigation Links */}
          <nav className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-[1rem] text-center md:text-left w-full md:w-[80%] mt-[5vh] md:mt-[10vh]">
            <Link to="/" className="hover:text-gray-400 transition">
              Home
            </Link>
            <Link to="/architecture" className="hover:text-gray-400 transition">
              Architecture
            </Link>
            <Link to="/interior-design" className="hover:text-gray-400 transition">
              Interior Design
            </Link>
            <Link to="/town-planning" className="hover:text-gray-400 transition">
              Town Planning
            </Link>
            <Link to="/about-us" className="hover:text-gray-400 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-400 transition">
              Contact
            </Link>
            <Link to="/blogs" className="hover:text-gray-400 transition">
              Blogs
            </Link>
            <Link to="/ai-corner" className="hover:text-gray-400 transition">
              AI Corner
            </Link>
            <Link to="/book-consultation" className="hover:text-gray-400 transition">
              Book A Consultation
            </Link>
          </nav>
        </header>

        <div className="w-[90%] md:w-auto">
          {/* Newsletter Section */}
          <section className="py-12 px-6 bg-gray-100 text-center md:text-right w-full">
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              Sign Up For Our Newsletter
            </h2>
            <p className="text-sm md:text-base text-gray-700 mb-6">
              Receive the latest design trends, project updates, and more
              straight to your inbox.
            </p>
            <form className="flex flex-col md:flex-row justify-center md:justify-end space-y-4 md:space-y-0 md:space-x-4 w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-64"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white rounded-md px-6 py-2 hover:bg-gray-700 w-full md:w-auto"
              >
                Sign Up
              </button>
            </form>
          </section>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 w-full">
        {["https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg", "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"].map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="text-center py-8 bg-gray-100 w-full">
        <p>
          © {new Date().getFullYear()} Shubhangi Wahane Architects. All rights
          reserved.
        </p>
        <a
          href="#privacy-policy"
          className="text-sm text-gray-700 hover:underline mt-2 block"
        >
          Privacy Policy
        </a>
      </footer>
    </div>
  );
};

export default Footer2;
