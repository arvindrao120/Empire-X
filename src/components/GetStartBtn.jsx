import React from "react";

function GetStartBtn() {
  const handleClick = (e) => {
    e.preventDefault();
    const section = document.getElementById("contact-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="perspective-[1000px] inline-block">
      <button
        onClick={handleClick}
        type="button"
        aria-label="Scroll to Contact Form"
        className="px-4 py-1 sm:px-7 sm:py-2 bg-red-700 hover:bg-red-500 text-white font-medium rounded-full transition-transform duration-300 ease-in-out transform cursor-pointer  hover:rotate-x-6 hover:scale-105 shadow-md"
      >
        Get Started
      </button>
    </div>
  );
}

export default GetStartBtn;
