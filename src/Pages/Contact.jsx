import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("number", number);
      formData.append("message", message);
      formData.append("access_key", process.env.REACT_APP_ACCESS_KEY); // move access key to env later
      // console.log({ name, email, number, message });
      console.log("tryiing....");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      console.log("res");

      console.log(response);

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Message sent successfully!");
        // Reset form fields
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again.");
    }
  };

  return (
    <div className="container mx-auto md:px-4 md:py-8 w-full md:mt-0 mt-[5vh]">
      <h1 className="md:mb-6 text-left pl-10 text-[2rem]">Contact Us</h1>
      {/* <button onClick={()=>{toast.success("Message sent successfully!");}} >check</button> */}
      <div className="w-full md:mx-auto flex justify-center items-center md:ml-[10vh] flex-col">
        <div className="md:w-full md:p-4 mt-2 md:mt-0 md:bg-opacity-50 md:rounded-2xl bg-gr md:flex md:flex-row flex flex-col md:justify-evenly items-center ">
          <div className="md:w-[45%] w-[90%] ">
            <h1 className="md:text-[2rem] text-left mb-2">
              Shubhangi Wahane Architects
            </h1>
            <div className="flex flex-wrap w-full text-left">
              For questions, technical assistance, or collaboration
              opportunities via the contact information provided.
            </div>

            {/* <div className="md:w-[70%] mt-10">
              <div className="w-full flex m-2">
                <FaPhoneAlt /> <p className="pl-2">+91 7738700860</p>{" "}
              </div>
              <div className="w-full flex m-2">
                <IoMdMailUnread />
                <p className="pl-2">shubhangiwahanearchitects@gmail.com</p>{" "}
              </div>
              <div className="w-full flex m-2">
                <FaLocationDot />{" "}
                <p className="pl-2 text-left">
                  Address- 25, Red Cross Rd, opposite South Indian Bank, Sadar,
                  Nagpur, Maharashtra 440001
                </p>{" "}
              </div>
            </div> */}
          </div>
          <div className="md:w-[45%] w-[90%]">
            <div className="mt-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.400412104845!2d79.08440247520547!3d21.14663378586586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0c313b06d8b%3A0x8b9294b6b3286504!2s25%2C%20Red%20Cross%20Rd%2C%20opposite%20South%20Indian%20Bank%2C%20Sadar%2C%20Nagpur%2C%20Maharashtra%20440001!5e0!3m2!1sen!2sin!4v1709572720211!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="md:flex md:flex-row md:justify-evenly md:w-full w-[90%] flex flex-col">
          <div className="md:w-[45%] flex flex-col mt-10 ">
            <h1 className="md:text-[1.5rem]">
              We would love to hear from you!
            </h1>
            <p>Email: shubhangiwahanearchitects@gmail.com</p>
            <p>Phone or WhatsApp: +91 7738700860</p>
            <form onSubmit={handleSubmit} className="space-y-4 md:w-full">
              <div className="">
                <label htmlFor="name" className="mb-1 font-medium flex">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-between">
                <div className="w-[45%]">
                  <label htmlFor="email" className="flex mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="w-[45%]">
                  <label htmlFor="number" className="flex mb-1 font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="flex mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="md:w-[45%] w-full md:mb-0 mb-4 mt-4">
            <a
              href="https://wa.me/917738700860?text=Hello%20Shubhangi%20Wahane%20Architects%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 2.01.49 3.96 1.42 5.72L.05 23.94a.75.75 0 0 0 .96.96l6.22-1.37A11.92 11.92 0 0 0 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0Zm0 22.5c-1.94 0-3.82-.5-5.5-1.45l-.4-.23-4.58 1.02 1.02-4.58-.23-.4A10.36 10.36 0 0 1 1.5 12c0-5.82 4.68-10.5 10.5-10.5S22.5 6.18 22.5 12 17.82 22.5 12 22.5Zm4.57-7.6c-.25-.12-1.48-.73-1.7-.81-.23-.08-.4-.12-.57.13-.17.25-.65.81-.8.98-.15.17-.3.2-.55.08-.25-.13-1.07-.39-2.04-1.25a7.69 7.69 0 0 1-1.43-1.76c-.15-.25 0-.38.11-.52.11-.12.25-.3.38-.45.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.5-.4-.42-.57-.42-.17 0-.3 0-.45 0a.86.86 0 0 0-.62.3c-.2.2-.82.8-.82 1.94s.84 2.26.96 2.43c.12.17 1.66 2.54 4.02 3.56 1.46.63 2.03.68 2.76.57.42-.07 1.48-.6 1.69-1.18.2-.58.2-1.08.15-1.18a.86.86 0 0 0-.41-.29Z"></path>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
