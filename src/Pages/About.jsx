import React from "react";
import banner1 from "../assets/banner1.png";

const About = () => {
  return (
    <div className="mt-5 m-2">
      <h1 className="text-left ml-5 text-[3rem]">About </h1>

      <div>
        <p className="text-left ml-5 text-[0.9rem] mt-7 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          orci nec felis sollicitudin commodo. Donec at arcu id nunc bibendum
          bibendum. Aliquam erat volutpat. Aliquam erat volutpat. Donec at arcu
          id nunc bibendum bibendum. Aliquam erat volutpat. sdas
        </p>
      </div>

      <div className=" flex justify-center mt-10">
        <div className="w-[80%] bg-red-300 h-[50vh] overflow-hidden">
          <img
            className="w-full h-full object-cover scale-125"
            src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <h1 className="text-left ml-5 text-[3rem] mt-[5vh]">
        SHUBHANGI WAHANE ARCHITECTS{" "}
      </h1>

      <div>
        <p className="text-left ml-5 text-[0.9rem] mt-7 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          orci nec felis sollicitudin commodo. Donec at arcu id nunc bibendum
          bibendum. Aliquam erat volutpat. Aliquam erat volutpat. Donec at arcu
          id nunc bibendum bibendum. Aliquam erat volutpat. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed vitae orci nec felis
          sollicitudin commodo. Donec at arcu id nunc bibendum bibendum. Aliquam
          erat volutpat. Aliquam erat volutpat. Donec at arcu id nunc bibendum
          bibendum. Aliquam erat volutpat.
        </p>
      </div>

      <div className=" flex justify-center mt-10">
        <div className="w-[80%] bg-red-300 h-[30vh] overflow-hidden">
          <img
            className="w-full h-full object-cover scale-125"
            src="https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>

      <h1 className="text-left ml-5 text-[3rem] mt-[5vh]">Our Approach</h1>

      <div>
        <p className="text-left ml-5 text-[0.9rem] mt-7 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          orci nec felis sollicitudin commodo. Donec at arcu id nunc bibendum
          bibendum. Aliquam erat volutpat. Aliquam erat volutpat. Donec at arcu
          id nunc bibendum bibendum. Aliquam erat volutpat. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed vitae orci nec felis
          sollicitudin commodo. Donec at arcu id nunc bibendum bibendum. Aliquam
          erat volutpat. Aliquam erat volutpat. Donec at arcu id nunc bibendum
          bibendum. Aliquam erat volutpat.
        </p>
      </div>

      <div className=" flex justify-center mt-10 mb-16">
        <div className="w-[80%] bg-red-300 h-[30vh] overflow-hidden">
          <img
            className="w-full h-full object-cover scale-125"
            src={banner1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
