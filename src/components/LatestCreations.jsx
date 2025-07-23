import React from "react";
import { reviews } from "../assets/assests";

const LatestCreations = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b  text-white font-poppins">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');`}
      </style>

      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        Client Success Showcase


      </h1>
      <p className="text-sm text-gray-400 text-center mt-2 max-w-lg mx-auto">
       Explore real moments and collaborations with clients that highlight impactful performance marketing results and partnerships.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-6 h-auto md:h-[400px] w-full max-w-6xl mt-10 mx-auto">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="relative group flex-grow transition-all w-full md:w-56 h-[300px] md:h-full duration-500 hover:w-full overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 to-black/10 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <h2 className="text-2xl font-semibold text-red-400">
                {item.name}
              </h2>
              <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestCreations;
