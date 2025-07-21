import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assests";

const cardData = [
  {
    title: "Performance marketing",
    desc: "Optimize spend, maximize business growth.",
  },
  {
    title: "Web Development",
    desc: "Design, develop, and launch your own websites.",
  },
  {
    title: "Content Marketing",
    desc: "Engaging content that converts",
  },
  {
    title: "Learn Marketing",
    desc: "Learn to market, connect, and grow income.",
  },
];
function About() {
  return (
    <>
      <section
        id="about"
        className="bg-black text-white py-10 px-4 md:px-12 lg:px-24"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl  md:4xl font-medium text-red-600 mb-10">
              Our Expertise & Skills
              <motion.div
                className="h-1 mt-3 rounded-r-xl  bg-gradient-to-r from-red-500 to-red-700"
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </h1>

            <h2 className="text-xl font-semibold text-red-600 mb-6">
              EmpireX Is Where India’s Future Marketers Are Built
            </h2>
            <p className="text-base text-gray-200 mb-4">
              Hi, I’m{" "}
              <span className="text-red-600 font-semibold italic">Himanshu Yadav</span>{" "}
              , founder of EmpireX — India’s go-to brand for practical marketing
              education & performance-led ad services.
            </p>
            <p className="text-base   text-gray-300 mb-8">
              With
              <span className="text-red-600 italic font-semibold ">
                {" "}
                ₹ 35L+ in Meta ad spend managed this year
              </span>{" "}
              , we didn’t just “learn” marketing — we tested, failed, optimized,
              and won across real campaigns
            </p>
            <p className="text-base sm:text-base text-gray-300 mb-8">
              And now we’ve taken that experience and turned it into{" "}
              <span className="text-red-600  font-semibold italic ">
                India’s most job-ready, ROI-driven performance marketing courses{" "}
              </span>{" "}
              — created for people who want{" "}
              <span className="text-red-600 italic font-semibold ">
                {" "}
                skills that pay bills.{" "}
              </span>
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {cardData.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative group bg-gradient-to-tr from-red-600 to-transparent p-[2px] rounded-xl hover:from-red-500 hover:to-red-300 transition-all duration-500"
                >
                  <div className="bg-[#111] rounded-xl p-6 h-full transition-all duration-300 ease-in-out group-hover:bg-[#1a1a1a]  group-hover:shadow-xl">
                    <h3 className="text-red-600 font-semibold text-md mb-2 transition-colors duration-300 group-hover:text-red-400">
                      {card.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{card.desc}</p>
                  </div>

                  {/* Glowing Animation Border (Optional) */}
                  <div className="absolute inset-0 rounded-xl z-[-1] blur-md opacity-0 group-hover:opacity-100 transition duration-700 bg-gradient-to-tr from-red-500 to-red-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={assets.mainPhoto} // <-- Replace with correct path
              alt="Team working together"
              className="rounded-2xl shadow-lg w-full max-w-xl object-cover"
            />
          </motion.div>
        </div>
      </section>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="origin-left h-[2px] w-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 shadow-[0_0_8px_2px_rgba(255,0,0,0.4)]"
      ></motion.div>
    </>
  );
}

export default About;
