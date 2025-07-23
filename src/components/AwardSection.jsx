import React from "react";
import { Award, CheckCircle, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    icon: <Award className="w-8 h-8 text-red-500" aria-hidden="true" />,
    subtitle: "Trusted by IVF, Skin, Dental & Ortho Clinics",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-red-500" aria-hidden="true" />,
    subtitle: "Proven results: 10X ROAS, 20-25 patient inquiries/day",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-red-500" aria-hidden="true" />,
    subtitle:
      "Book a free strategy call — only if you’re serious about scaling",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
  hover: { scale: 1.07, boxShadow: "0 8px 32px 0 rgba(231,0,11,0.25)" },
};

const AwardsSection = () => {
  return (
    <>
      <section
        className="relative py-16 px-4 bg-[#0e0e0e] overflow-hidden"
        aria-labelledby="awards-heading"
      >
        {/* Radial Background Animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-red-700/5 to-transparent opacity-40 rounded-xl blur-3xl z-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h2
            id="awards-heading"
            className="text-3xl md:text-4xl font-medium text-red-500 mb-4"
          >
            Oh BTW, We Run an Agency Too
          </h2>
          <p
            className="text-gray-500 text-sm mt-2 mb-12"
            aria-label="Agency Description"
          >
            Our performance marketing agency at EmpireX specializes in lead
            generation for service brands &amp; doctors.
          </p>

          <motion.ul
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            aria-label="EmpireX Achievements"
          >
            {achievements.map((item, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="bg-[#1a1a1a] border border-red-900 rounded-xl shadow-sm p-6 flex flex-col items-center text-center transition-transform duration-300 focus-within:ring-2 focus-within:ring-red-500"
                tabIndex={0}
                aria-label={item.subtitle}
              >
                <motion.div
                  className="mb-3 bg-red-900/20 p-4 rounded-full shadow-md shadow-red-700/40"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 120,
                  }}
                >
                  {item.icon}
                </motion.div>
                <motion.p
                  className="text-gray-300 text-xs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  {item.subtitle}
                </motion.p>
              </motion.li>
            ))}
          </motion.ul>
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
};

export default AwardsSection;
