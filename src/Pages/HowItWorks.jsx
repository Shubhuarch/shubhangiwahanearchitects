import React from "react";
import { howWork } from "../Utils/boxes";
const HowItWorks = () => {
  return (
    <div className="mt-[8vh] bg-[#ebeae6] flex flex-col items-center">
      <div className="text-[#584039] text-[2rem] font-cormorant">
        Our Process
      </div>

      <div className=" flex flex-col md:flex-row  w-[80%] md:justify-center mt-[4vh] items-center">
        {howWork.map((info, i) => (
          <div
            key={i}
            className="text-center flex flex-col items-center w-[80%] md:w-[20%] m-2 "
          >
            <div className=" md:w-[40%] w-[20%] md:h-[12vh]  ">
              <img src={info.loggo} className="h-full w-full" alt="" />
            </div>

            <div className="mt-3">{info.heading}</div>
            <div className="mt-4 text-[0.7rem] w-[70%] text-wrap">{info.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
