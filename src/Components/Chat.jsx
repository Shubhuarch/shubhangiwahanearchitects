import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { BsFillSendFill } from "react-icons/bs";

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    message: "",
  });
  const chatRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsChatOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [chatRef]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", number: "", message: "" });
    setIsChatOpen(false);
  };

  return (
    <div
      ref={chatRef}
      className="fixed bottom-4 right-4 flex flex-col items-end z-50 rounded-3xl"
    >
      {isChatOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-2xl mb-4 w-[50vh] md:h-[80vh] md:w-[50vh] flex flex-col items-center"
        >
          <div className="bg-slate-500 bg-opacity-45 p-4 h-[10%] flex rounded-t-2xl w-full">
            <h1 className="font-bold">SHUBHANGI</h1>
          </div>
          <div className="relative bottom-4 rounded-lg bg-slate-100 w-[80%] p-4">
            <div>
              Hi! We at Shubhangi Wahane Architects Believe that Architecture is
              you,
            </div>
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className=" text-sm font-medium text-gray-700 flex"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full bg-slate-100 border-b border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:outline-none focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="number"
                  className="flex text-sm font-medium text-gray-700"
                >
                  Number
                </label>
                <input
                  type="tel"
                  id="number"
                  name="number"
                  value={formData.number}
                  onChange={handleInputChange}
                  className="mt-1 block w-full bg-slate-100 border-b border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:outline-none focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="message"
                  className="flex text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="mt-1 block w-full bg-slate-100 border-b border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:outline-none focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center md:w-[27%] justify-between bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send <BsFillSendFill className="pl-1" />
              </button>
            </form>
          </div>
        </motion.div>
      )}

      <motion.div
        className="text-[3rem] md:text-[4rem] cursor-pointer"
        onClick={() => setIsChatOpen(!isChatOpen)}
        animate={{ scale: [1, 1.2, 1] }} // Scale animation
        transition={{ duration: 0.2, ease: "easeInOut", repeat: 1 }} // Bouncy effect
        whileHover={{ scale: 1.1, rotate: 10 }} // Hover effect
        whileTap={{ scale: 0.9 }} // Click effect
      >
        <HiChatBubbleLeftRight />
      </motion.div>
    </div>
  );
};

export default Chat;
