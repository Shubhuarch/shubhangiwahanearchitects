import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Modal from "react-modal";
import Home from "./Pages/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Chat from "./Components/Chat";
import Work from "./Pages/Work";
import Team from "./Pages/Team";
import Blogs from "./Pages/Blogs";

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="w-full flex justify-center ">
        <div className="App flex w-[80%] justify-center">
          {/* Sidebar / Navbar with fixed width */}
          <div className="w-[20%]">
            <Navbar />
          </div>

          {/* Main Content Area (flex-grow to take remaining space) */}
          <div className=" flex flex-grow w-[50%] flex-col">
            <div className="w-full">
              {/* Uncomment Routes when needed */}
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/work" element={<Work />} />
                <Route path="/team" element={<Team />} />
                <Route path="/blogs" element={<Blogs />} />
              </Routes>
            </div>
          </div>

          {/* Chat Component */}
          <Chat />
        </div>
      </div>
    </Router>
  );
}

export default App;
