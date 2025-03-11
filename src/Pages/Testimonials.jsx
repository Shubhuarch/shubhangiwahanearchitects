import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    project: "Luxury Villa Design",
    feedback:
      "Absolutely thrilled with the design! The attention to detail and creativity exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Emily Smith",
    project: "Modern Office Space",
    feedback:
      "Professional and efficient! They transformed our office into a sleek, functional space.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    project: "Urban Townhouse",
    feedback:
      "Their expertise in urban planning is unmatched. We now have a stylish yet practical living space.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <section className=" w-full">
      <div className="w-[80%] mx-auto px-6 ">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Clients Say
        </h2>

        {/* Testimonial Cards */}
        <div className="flex flex-wrap justify-evenly w-full">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="w-full md:max-w-sm bg-white shadow-lg rounded-xl p-6 m-4 md:m-0 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="text-4xl text-gray-400 mb-4" />
              <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full border-2 border-gray-300 mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.project}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
