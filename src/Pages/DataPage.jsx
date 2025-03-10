import React from "react";
import { data } from "../Utils/boxPhoto";
import HowItWorks from "./HowItWorks";

const DataPage = () => {
  return (
    <div className=" mt-[8vh] bg-[#ebeae6] w-[95%] md:w-full flex flex-col items-center">
      <h1 className="text-[#584039] flex justify-center text-[1.5rem] md:text-[2rem] font-cormorant">
        A Data-driven and Personalized Service That You Can Trust
      </h1>
      <div className="mt-6 p-1 text-[0.7rem] md:text-[1.2rem]">
        Sick of the unclear timelines, vague pricing and mediocre execution that
        often come with interior design? <br /> Hipcouch is here to change that.
        We go the extra mile to give you a service that’s delightfully smooth.
      </div>
      {/* OLD design */}
      <div className="hidden md:flex flex-wrap justify-evenly  mt-[6vh] w-full ">
        {data.map((info, i) => (
          <div className="hidden md:flex flex-col w-[25%] md:w-[22%] mt-2 ">
            <div className="w-[full] h-[10vh] md:h-[40vh] bg-red-300 m-2">
              <img src={info.img} className="h-full w-full " />
            </div>
            <div className=" md:mt-[6vh] text-[0.7rem] text-[#584039] md:text-[1.2rem]">
              {info.title}
            </div>
            <div className="mt-[4vh]  text-black text-[1rem]">{info.info}</div>
          </div>
        ))}
      </div>
      <HowItWorks />

      <div className="text-[#584039] mt-[9vh] mb-[5vh] text-[2rem] font-cormorant">
        Our Services
      </div>
      {/* <h1>New Design</h1> */}
      <div className="hidden md:flex flex-wrap justify-center  w-full">
        {data.map((info, i) => (
          <div
            key={i}
            className={`flex h-[60vh] justify-evenly w-[89%] mt-2 ${
              i % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-[30%] h-full">
              <div className="w-full h-[80%] bg-red-300 m-2">
                <img
                  src={info.img}
                  className="h-full w-full"
                  alt={info.title}
                />
              </div>
              <div className="w-full text-[1.2rem]">{info.title}</div>
            </div>
            <div
              className={`mt-[4vh]  w-[65%] text-black text-[1rem] ${
                i % 2 === 0 ? "text-left pl-4" : "text-right pr-4"
              }`}
            >
              {info.info}
            </div>
          </div>
        ))}
      </div>

      {/* mobile view */}
      <div className="md:hidden flex  flex-wrap justify-evenly mt-[6vh] w-full">
        {data.map((info, i) => (
          <div className={`flex flex-col items-center m-2 w-full `} key={i}>
            <div className="w-full p-2 h-[50vh] md:h-[30vh] m-2">
              <img
                src={info.img}
                className="w-full h-full object-cover drop-shadow-2xl"
                alt={info.title}
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <div className="mt-4 text-[0.7rem] text-[#584039] md:text-[0.7rem]">
                {info.title}
              </div>
              <div className="mt-2 text-black text-[0.7rem]">{info.info}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPage;
