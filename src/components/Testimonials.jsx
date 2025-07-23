import React, { useState, useRef } from "react";
import { Star } from "lucide-react";
import ShowMoreBtn from "./ShowMoreBtn";

const TestimonialCard = ({ name, role, image, rating, desc, title }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <article
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-full max-w-sm h-96 rounded-xl p-0.5 bg-gradient-to-br from-red-800 to-black text-white overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-[1deg] hover:shadow-2xl"
      aria-label={`Testimonial by ${name}`}
    >
      {visible && (
        <div
          className="pointer-events-none blur-xl bg-gradient-to-r from-red-400 via-pink-500 to-black size-60 absolute z-0 opacity-30 transition-opacity duration-300"
          style={{ top: position.y - 120, left: position.x - 120 }}
        />
      )}

      <div className="relative z-10 bg-black/80 p-6 h-full w-full rounded-xl flex flex-col items-center justify-center text-center">
        <figure>
          <img
            src={image}
            alt={`Photo of ${name}`}
            className="w-20 h-20 rounded-full shadow-md mb-4 border-2 border-red-600"
            loading="lazy"
          />
          <figcaption className="text-xl font-semibold text-white">
            {name}
          </figcaption>
        </figure>
        <p className="text-sm text-red-400">{role}</p>
        <h3 className="text-lg font-medium text-red-500 my-3 italic">
          “{title}”
        </h3>
        <p className="text-sm text-gray-300 mb-4 px-2">{desc}</p>
        <div className="flex space-x-1 text-yellow-400">
          {Array.from({ length: rating }).map((_, i) => (
            <Star
              key={i}
              fill="currentColor"
              strokeWidth={0}
              className="w-5 h-5"
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </article>
  );
};

function Testimonials({ showBtn }) {
  console.log(showBtn);

  const testimonials = [
    {
      name: "Rohit",
      role: "Fresher turned Freelancer",
      title: "Finally a course that’s not just talk",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      desc: "Boosted ROI drastically with their advanced strategy. Highly recommended!",
    },
    {
      name: "Mansi",
      role: "Freelancer",
      title: "Got my first 30K/month client after this",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 4,
      desc: "Great course! Learned a lot about funnel building and scaling systems.",
    },
    {
      name: "Pratik",
      role: "Side Hustler",
      title: "Best ₹999 ever spent",
      image: "https://randomuser.me/api/portraits/men/85.jpg",
      rating: 5,
      desc: "Best investment! Real campaign breakdowns made things practical.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gradient-to-br from-black to-red-950 flex flex-col items-center py-20 px-4 perspective-[1000px]"
      aria-label="Student Testimonials Section"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">What Our Clients Say</h2>
        <p className="text-red-300 text-sm mt-2 max-w-xl mx-auto">
          Hear directly from our students who experienced real results through
          our expert-led performance marketing training.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>

      {showBtn === true ? ("")  : <ShowMoreBtn />}
    </section>
  );
}

export default Testimonials;
