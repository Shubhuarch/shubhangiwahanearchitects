import React from "react";
import banner1 from "../assets/banner1.png";
import Connect from "./Connect";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="mt-5 m-2">
      <div className="flex justify-evenly">
        <div className="w-[40%]  h-[80vh] flex justify-center flex-col items-end">
          <h1 className="text-left text-[3rem] font-cormorant w-[70%]">
            ABOUT US
          </h1>
          <div className="text-left w-[70%]">
            <p>
              Shubhangi Wahane Architects — Designing Spaces That Inspire. At
              Shubhangi Wahane Architects, we believe that architecture is more
              than just constructing buildings — it's about creating meaningful
              spaces that reflect your personality, lifestyle, and vision. Every
              project we design is a unique blend of creativity, functionality,
              and timeless design, tailored specifically to meet the needs of
              our clients.
            </p>
              <br/>
            <p>
              Founded by Shubhangi Wahane, our firm is built on a strong
              foundation of passion for design, deep understanding of space, and
              a commitment to excellence. Whether it’s architecture, interior
              design, or town planning, we strive to design environments that
              feel authentic, comfortable, and aesthetically stunning.
            </p>
            <br/>
            <p>
              Our approach to design is simple — listen, understand, and create.
              We work closely with our clients, understanding their vision,
              lifestyle, and expectations to bring their dream spaces to life.
              With every project, our goal is to strike the perfect balance
              between beauty, functionality, and sustainability, ensuring that
              the end result not only looks stunning but also feels purposeful
              and meaningful.
            </p>
          </div>
        </div>
        <div className="w-[45%] h-[90vh] ml-2 bg-gree ">
          <img src='https://img.freepik.com/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263537.jpg?t=st=1741613517~exp=1741617117~hmac=d8d8d735fdb8c83e3ac34b1a98d8b25b3a21ca56905abb2e1684bb156e6811f4&w=740' className="h-full w-full" alt="banner" />
        </div>
      </div>

      <Connect />

      <Footer />
    </div>
  );
};

export default About;
