import React from "react";
import { Link } from "react-router-dom";

const Connect = () => {
  return (
    <div
      className="relative w-full h-[50vh] mt-10 flex flex-col items-center justify-center text-white text-center px-4"
    >
      {/* Background Image with Reduced Brightness */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/armchair-green-living-room-with-copy-space_43614-910.jpg?t=st=1741613743~exp=1741617343~hmac=06f866f331a25f0e4295d699538e041b16af809ebd3b26f10a54352cb40b7296&w=996')",
          filter: "brightness(50%)", // Reduce brightness
        }}
      ></div>

      {/* Text Content - Stays Clear */}
      <div className="relative z-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 font-cormorant">
          Thinking about getting started on your dream home?
        </h1>

        <Link
          to="/contact"
          className="text-white font-semibold bg-[#584039] px-6 py-2 rounded-lg hover:bg-[#C89A74] transition"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Connect;
