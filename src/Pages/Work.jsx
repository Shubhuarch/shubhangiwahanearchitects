import React from "react";
import { ourWork, ourWork2 } from "../Utils/boxPhoto";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 }, // Start hidden and move up
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const Work = () => {
  return (
    <div className="">
      <div className="mt-10">
        <h1>Our Recent Works</h1>
      </div>
      <h1 className="mt-10 mb-10">DESIGN ONE</h1>
      <div className="flex flex-wrap w-full justify-evenly h-[70vh] md:h-[100vh]">
        {ourWork.map((work, i) => (
          <motion.div
            key={i}
            className="w-[30%] md:h-[30%] h-[20vh] relative group overflow-hidden bg-red-500"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: i * 0.2 }} // Staggered animation
          >
            <div className="w-full md:w-full h-full md:h-full relative bg-red-500 hover:cursor-pointer">
              <img
                src={work.tile_image}
                alt=""
                className="object-cover h-full w-full transition-all duration-300 group-hover:brightness-110"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white text-lg font-semibold">
                  {work.tile_text}
                </p>
                <hr className="w-1/2 border-white my-1" />
                <p className="text-white text-lg font-semibold">
                  {work.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <h1 className="mt-10 mb-10">DESIGN TWO</h1>

      <div>
        <div className="md:flex md:flex-row flex flex-col items-center md:flex-wrap w-full justify-center md:justify-evenly ">
          {ourWork2.map((work, i) => (
            <motion.div
              key={i}
              className="md:w-[45%] w-[95%] flex justify-center h-[80vh] relative group overflow-hidden mt-2 mb-2"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ delay: i * 0.2 }} // Staggered animation
            >
              <div className="w-full md:w-full h-full relative hover:cursor-pointer">
                <img
                  src={work.tile_image}
                  alt=""
                  className="object-cover h-full w-full transition-all duration-300 group-hover:brightness-75"
                />
                <div className="absolute inset-0 flex flex-col items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4">
                  <p className="text-white text-lg font-semibold mt-5 text-center">
                    {work.tile_text}
                  </p>
                  <hr className="w-1/2 border-white my-1" />
                  <p className="text-white text-lg font-semibold">
                    {work.location}
                  </p>

                  {/* Scrolling Text Effect */}
                  <div className="w-full overflow-hidden mt-2">
                    <div className="animate-marquee text-white text-sm font-light whitespace-pre-line">
                      {work.desc1}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
