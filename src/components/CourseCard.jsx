import React from "react";
import { motion } from "framer-motion";

function CourseCard() {
  return (
    <section
      className="py-6 max-w-5xl mx-auto px-2"
      aria-labelledby="pricing-heading"
    >
      <h1
        id="pricing-heading"
        className="text-center text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl text-white"
      >
        Pricing
      </h1>
      <p className="text-center text-gray-500 text-sm md:text-base mt-1">
        Use it for free for yourself, upgrade when your team needs advanced
        control.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-6">
        {/* Performance Marketing Course */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-xl border border-red-500 bg-[#111111] p-4"
          aria-label="Performance Marketing Course"
        >
          <motion.h2
            className="text-lg font-bold text-center text-red-500 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            PERFORMANCE MARKETING COURSE
          </motion.h2>

          <div className="flex flex-col items-center border-b border-orange-300 pb-3">
            <span className=" text-lg line-through font-semibold text-red-500">
              ₹9,999
            </span>
            <span className="mb-2 text-2xl  font-semibold text-red-500">
              ₹4,999
            </span>
          </div>

          <ul className="space-y-2 py-4" aria-label="Course Features">
            {[
              "Meta + Google Ads Step-by-Step",
              "Creative, Copy & Funnel Building",
              "Hook Psychology + Scaling System",
              "Interview Prep + Job-Ready CV Format",
              "Priority support",
              "Lifetime Access + Real Campaign Breakdowns",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="grid size-4 place-content-center rounded-full bg-red-500 text-base text-white">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-base text-orange-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="relative inline-block p-0.5 rounded-full my-3 overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#E7000B,_#FFFFFF,_#E7000B)] button-wrapper">
            <a href="https://payments.cashfree.com/forms/empirexcourse">
              <button
                className="relative z-10 bg-gray-800 text-red-500 text-base rounded-full px-6 py-2 font-medium cursor-pointer"
                aria-label="Buy Performance Marketing Course"
              >
                Buy Now
              </button>
            </a>
          </div>
        </motion.article>

        {/* Live Webinar */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="rounded-xl border border-red-500 bg-[#111111] p-4"
          aria-label="Live Webinar"
        >
          <motion.h2
            className="text-lg font-bold text-center text-red-500 mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            LIVE WEBINAR
          </motion.h2>

          <div className="flex flex-col items-center border-b border-orange-300 pb-3">
            <span className="mb-2 text-2xl font-semibold text-red-500">
              ₹147
            </span>
            <span className="text-red-500 text-base font-medium">
              How to Drop <span className="text-white">CPL</span> &{" "}
              <span className="text-white">CPM</span> fast
            </span>
          </div>

          <ul className="space-y-2 py-4" aria-label="Webinar Features">
            {[
              "Creative formula to boost Hook Rate",
              "Ad psychology that bring down CPC",
              "Omni Presence Strategy to increase ROAS",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="grid size-4 place-content-center rounded-full bg-red-500 text-base text-white">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                <span className="text-base text-orange-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
            <a
              href="https://payments.cashfree.com/forms/webinar147"
              aria-label="Enroll in Webinar"
              className="relative inline-block p-0.5 rounded-full overflow-hidden hover:scale-105 transition duration-300 active:scale-100 before:content-[''] before:absolute before:inset-0 before:bg-[conic-gradient(from_0deg,_#E7000B,_#FFFFFF,_#E7000B)] button-wrapper"
            >
              <button className="relative z-10 bg-gray-800 cursor-pointer text-red-500 text-base rounded-full px-6 py-2 font-medium">
                Enroll Now
              </button>
            </a>
            <div className="relative z-10 bg-gray-800 text-red-500 text-base rounded-full px-6 py-2 font-medium mt-2 sm:mt-0">
              Date : 5-Aug-2025
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}

export default CourseCard;
