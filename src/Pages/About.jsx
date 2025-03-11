import React from "react";
import banner1 from "../assets/banner1.png";
import Connect from "./Connect";
import Footer from "../Components/Footer";
import Footer2 from "../Components/Footer2";
import Footer3 from "../Components/Footer3";

const About = () => {
  return (
    <div className=" mt-[3vh] md:mt-0 ">
      <div className="flex md:flex-row flex-col md:items-center items-center justify-center md:justify-between">
        <div className="md:w-[50%] w-full md:h-[120vh] flex md:justify-start flex-col ">
          <h1 className="text-left text-[3rem] font-cormorant w-full md:w-[80%] mt-10 md:mt-[20vh] ml-3 md:ml-[20vh]">
            ABOUT US
          </h1>
          <br/>
          <div className="text-left text-[0.6rem] md:text-[1rem] w-[98%] md:w-[70%] ml-3 md:ml-[20vh]">
            <p>Shubhangi Wahane Architects — Designing Spaces That Inspire.</p>
            <br />
            <p>
              At Shubhangi Wahane Architects, we believe that architecture is
              more than just constructing buildings — it's about creating
              meaningful spaces that reflect your personality, lifestyle, and
              vision. Every project we design is a unique blend of creativity,
              functionality, and timeless design, tailored specifically to meet
              the needs of our clients.
            </p>
            <br />
            <p>
              Founded by Shubhangi Wahane, our firm is built on a strong
              foundation of passion for design, deep understanding of space, and
              a commitment to excellence.
            </p>
            <br />
            <p>
              Our approach to design is simple: listen, understand, and create.{" "}
            </p>
            <p>
              {" "}
              We work closely with our clients, understanding their vision and
              expectations to bring their dream spaces to life. With every
              project, our goal is to strike the perfect balance between beauty,
              and sustainability, ensuring that the end result not only looks
              stunning but also feels meaningful.
            </p>
          </div>
        </div>
        <div className=" w-[98%] mt-[4vh] md:mt-0 md:w-[45%] h-[50vh] md:h-[120vh] ml-0 bg-gree mr-0 ">
          <img
            src="https://img.freepik.com/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263537.jpg?t=st=1741613517~exp=1741617117~hmac=d8d8d735fdb8c83e3ac34b1a98d8b25b3a21ca56905abb2e1684bb156e6811f4&w=740"
            className="h-[80%] w-full"
            alt="banner"
          />
        </div>
      </div>

      <Connect />

      <Footer2 />
    </div>
  );
};

export default About;
