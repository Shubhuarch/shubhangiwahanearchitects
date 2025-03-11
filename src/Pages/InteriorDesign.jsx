import React, { useState } from "react";
import dummy1 from "../assets/dummy1.jpeg";

const InteriorDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Define images for each category
  const images = {
    Residential: [
      { img: dummy1, title: "Modern Villa", desc: "A luxurious residential villa with modern architecture." },
      { img: dummy1, title: "Classic Home", desc: "A classic style home with a contemporary touch." },
      { img: dummy1, title: "Eco-Friendly House", desc: "A sustainable house with eco-friendly materials." },
      { img: dummy1, title: "Luxury Bungalow", desc: "A high-end bungalow with stunning interiors." },
    ],
    Commercial: [
      { img: dummy1, title: "Corporate Tower", desc: "A high-rise corporate office with cutting-edge design." },
      { img: dummy1, title: "Shopping Mall", desc: "A modern shopping mall with spacious interiors." },
      { img: dummy1, title: "Business Center", desc: "A hub for businesses with co-working spaces." },
      { img: dummy1, title: "Industrial Warehouse", desc: "A large warehouse with advanced logistics facilities." },
    ],
    // 'Hotels/Villa/Resorts': [
    //   { img: dummy1, title: "Luxury Resort", desc: "A premium resort offering breathtaking views." },
    //   { img: dummy1, title: "Boutique Hotel", desc: "A small yet elegant hotel with personalized services." },
    //   { img: dummy1, title: "Beachfront Villa", desc: "A tropical paradise facing the ocean." },
    //   { img: dummy1, title: "City Hotel", desc: "A stylish urban hotel for business travelers." },
    // ],
    // Township: [
    //   { img: dummy1, title: "Smart City", desc: "A futuristic township with smart infrastructure." },
    //   { img: dummy1, title: "Gated Community", desc: "A secure residential community with all amenities." },
    //   { img: dummy1, title: "Green Township", desc: "An eco-conscious township surrounded by nature." },
    //   { img: dummy1, title: "Urban Living", desc: "A modern township designed for a premium lifestyle." },
    // ],
  };

  // Get images based on selected category or show all
  const displayedImages = selectedCategory
    ? images[selectedCategory]
    : Object.values(images).flat();

    return (
      <div className="flex flex-col w-full items-center mt-[10vh]  md:mt-[10vh]">
        <h1 className="text-2xl font-bold uppercase mt-5 font-cormorant">Our Work</h1>
        <div className="w-[70vh]  mt-5 mb-5">Designing Spaces, Crafting Experiences</div>
        {/* <h1 className="text-2xl font-bold uppercase mt-5 font-cormorant">Our Work</h1> */}
        
        <div className="flex justify-center md:w-full">
          <div className="flex flex-wrap w-full md:w-[55%] mt-10 justify-evenly uppercase">
            {Object.keys(images).map((category) => (
              <button
                key={category}
                className={`bg-[#A29D8E] w-[80%] md:w-[48%] flex justify-center m-1 md:m-0 items-center text-white uppercase ${
                  selectedCategory === category ? "opacity-80" : "opacity-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
  
        {/* Image Section */}
        <div className="flex w-full md:w-[75%]  flex-wrap mt-10 justify-between">
          {displayedImages.map((item, index) => (
            <div
              key={index}
              className="p-4 w-[95%] md:w-[46%] m-2 mt-10 h-[60vh] md:h-[100vh] transition-transform hover:scale-105"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[80%] object-cover"
              />
              <h2 className="text-lg font-semibold mt-3">{item.title}</h2>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default InteriorDesign;
