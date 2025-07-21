import React, { useState } from "react";
import { assets } from "../assets/assests";
import { MenuIcon, XIcon } from "lucide-react";
import GetStartBtn from "./GetStartBtn";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler for all nav links
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsOpen(false);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 z-50 w-full flex items-center text-white justify-between px-6 md:px-16  lg:px-36 py-4 backdrop-blur-lg  shadow-lg"
        aria-label="Main Navigation"
      >
        <a href="#home" className="max-md:flex-1" aria-label="Empire-X Home">
          <img className="w-36 h-auto" src={assets.logo} alt="Empire-X Marketing Logo" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden border-red-500/50 border-b-2 rounded-full px-6 py-2 md:flex flex-row items-center gap-8 font-medium text-lg">
          <li>
            <a
              href="#home"
              className="animated-underline py-1 text-white"
              onClick={e => handleSmoothScroll(e, "home")}
              aria-label="Go to Home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="animated-underline py-1 text-white"
              onClick={e => handleSmoothScroll(e, "about")}
              aria-label="Go to About Us"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#course"
              className="animated-underline py-1 text-white"
              onClick={e => handleSmoothScroll(e, "course")}
              aria-label="Go to Courses"
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="animated-underline py-1 text-white"
              onClick={e => handleSmoothScroll(e, "testimonials")}
              aria-label="Go to Testimonials"
            >
              Testimonials
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-8">
          <GetStartBtn />
        </div>

        {/* Mobile Nav Toggle */}
        <MenuIcon
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 md:hidden cursor-pointer max-md:ml-4 text-white"
          aria-label="Open Menu"
        />
      </nav>

      {/* Mobile Nav Drawer with Framer Motion animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            className="fixed top-0 left-0 w-8/12	 h-screen backdrop-blur-lg bg-transparent  z-[100] flex flex-col items-center justify-center"
            aria-label="Mobile Navigation"
          >
            <XIcon
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 absolute top-6 right-6 cursor-pointer text-white"
              aria-label="Close Menu"
            />
            <ul className="flex flex-col items-center gap-8 font-semibold text-2xl">
              <li>
                <a
                  href="#home"
                  className="animated-underline py-1 text-white"
                  onClick={e => handleSmoothScroll(e, "home")}
                  aria-label="Go to Home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="animated-underline py-1 text-white"
                  onClick={e => handleSmoothScroll(e, "about")}
                  aria-label="Go to About Us"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#course"
                  className="animated-underline py-1 text-white"
                  onClick={e => handleSmoothScroll(e, "course")}
                  aria-label="Go to Courses"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="animated-underline py-1 text-white"
                  onClick={e => handleSmoothScroll(e, "testimonials")}
                  aria-label="Go to Testimonials"
                >
                  Testimonials
                </a>
              </li>
            </ul>
            <div className="mt-10">
              <GetStartBtn />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;