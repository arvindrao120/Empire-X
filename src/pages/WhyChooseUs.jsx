import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Lightbulb, BarChartBig } from "lucide-react";

const features = [
  {
    title: "Built on ₹35L+ Real Spend",
    description:
      "We don’t teach theory — we reverse-engineered what actually works.",
    icon: (
      <Target
        size={32}
        className="text-red-500 group-hover:rotate-12 transition-all duration-300"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "Courses + Client Results",
    description:
      "We don’t just teach — we run campaigns too. You learn what we do daily.",
    icon: (
      <Zap
        size={32}
        className="text-yellow-400 group-hover:scale-110 transition-all duration-300"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "No Fluff, Just ROI",
    description:
      "Everything is practical, tested, and job/campaign/agency-ready.",
    icon: (
      <Lightbulb
        size={32}
        className="text-yellow-300 group-hover:rotate-6 transition-all duration-300"
        aria-hidden="true"
      />
    ),
  },
  {
    title: "No Theory, Just Performance",
    description:
      "Everything is metrics-driven, conversion-focused, and profit-ready.",
    icon: (
      <BarChartBig
        size={32}
        className="text-blue-400 group-hover:scale-105 transition-all duration-300"
        aria-hidden="true"
      />
    ),
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95, boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)" },
  animate: { opacity: 1, y: 0, scale: 1, boxShadow: "0 8px 32px 0 rgba(231,0,11,0.10)", transition: { type: "spring", stiffness: 80, damping: 14 } },
  hover: {
    scale: 1.07,
    rotateY: 12,
    boxShadow: "0 16px 48px 0 rgba(231,0,11,0.25), 0 1.5px 12px 0 rgba(255,255,255,0.08)",
    transition: { type: "spring", stiffness: 180, damping: 12 }
  }
};

function WhyChooseUs() {
  return (
    <section
      className="bg-[#111] text-white py-16 px-6"
      aria-labelledby="why-choose-heading"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          id="why-choose-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-medium text-red-500"
        >
          Why Choose Our Agency
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "6rem" }}
          transition={{ duration: 0.6 }}
          className="h-1 mx-auto mt-2 bg-gradient-to-r from-red-500 to-red-700 rounded-full"
        />
      </div>

      <motion.ul
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        aria-label="Why Choose Us Features"
      >
        {features.map((feature, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            whileHover="hover"
            tabIndex={0}
            aria-label={feature.title}
            className="group bg-[#1a1a1a] hover:bg-[#222] transition-all duration-300 border-2 border-red-900 hover:border-t-8 rounded-xl p-6 text-center shadow-lg hover:shadow-red-500/30"
            style={{ perspective: 800 }}
          >
            <motion.div
              className="flex justify-center mb-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 120 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-red-500 font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

export default WhyChooseUs;