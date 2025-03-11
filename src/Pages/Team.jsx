import React from "react";
import { ourTeam } from "../Utils/boxPhoto";

const Team = () => {
  return (
    <div>
      <h1 className="text-left text-[3rem] mt-4">Our Team</h1>
      <div className="m-2 mt-5 mb-5">
        <p className="text-left md:text-[1rem] text-[0.7rem] m-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          orci nec felis sollicitudin commodo. Donec at arcu id nunc bibendum
          tristique. Curabitur consectetur, ipsum eget feugiat suscipit, justo
          risus dignissim purus, et facilisis mi arcu in velit. Sed vel
          condimentum velit. Nulla facilisi. Nulla facilisi. Donec tristique,
          lectus sed consectetur congue, neque felis rutrum lectus, a
          scelerisque justo lectus id massa. Integer sit amet turpis ut neque
          bibendum consectetur. Nulla facilisi. Sed vel condimentum velit. Nulla
          facilisi. Donec tristique, lectus sed consectetur congue, neque felis
          rutrum lectus, a scelerisque justo lectus id massa. Integer sit amet
          turpis ut neque bibendum consectetur. Nulla facilisi. Sed vel
          condimentum velit. Nulla
        </p>
      </div>

      <div className="w-full md:h-[60vh] md:m-0">
        <img
          src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg"
          className="h-full w-full"
          alt="team"
        />
      </div>

      <h1 className="text-[2rem] mt-10">Our family</h1>

      <div className="flex flex-wrap justify-evenly mb-10">
        {ourTeam.map((info, i) => (
          <div
            key={i}
            className="flex flex-col items-center m-2 w-[80%] md:w-[20%]"
          >
            <div className="w-full p-2 h-[20vh] md:h-[20vh] m-2 flex justify-center ">
              {/* Image Wrapper with Group */}
              <div className="relative group">
                {/* Profile Image */}
                <img
                  src={info.image}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-full drop-shadow-2xl transition-all duration-300 group-hover:brightness-50"
                  alt={info.name}
                />
                {/* Hover Overlay with Position */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 w-32 h-32 md:w-40 md:h-40 ">
                  <p className="text-white text-[1rem] font-semibold">
                    {info.role}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <h3 className="font-semibold">{info.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
