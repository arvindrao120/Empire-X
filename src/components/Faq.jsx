import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Are these courses beginner-friendly?",
    answer:
      "Yes — whether you’re a fresher, student, or switcher, we start from scratch.",
  },
  {
    question: "Is this live or recorded?",
    answer:
      "Our core course includes live + recorded. Other courses are instant access recorded modules.",
  },
  {
    question: "Do I get support?",
    answer:
      "Yes. Email + group support with doubt resolution available.",
  },
  {
    question: "Will I get a certificate?",
    answer:
      "Yes — a verified EmpireX Completion Certificate.",
  },
  {
    question: "Do you help with jobs or clients?",
    answer:
      "Yes — the course prepares you for both. Plus, we sometimes hire top students too.",
  },
];

const FaqCard = ({ faq, isOpen, onClick, idx }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * threshold;
    const y = ((e.clientY - top) / height - 0.5) * -threshold;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.article
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 14, delay: idx * 0.08 }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 16px 48px 0 rgba(231,0,11,0.18), 0 1.5px 12px 0 rgba(255,255,255,0.08)",
        zIndex: 2,
      }}
      tabIndex={0}
      aria-labelledby={`faq-question-${idx}`}
      className="bg-[#1a1a1a] rounded-b-xl p-5 border shadow-md transition-all duration-300 outline-none focus:ring-2 focus:ring-red-500"
    >
      <div
        onClick={onClick}
        className="flex justify-between items-center cursor-pointer text-white"
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${idx}`}
        onKeyPress={e => (e.key === "Enter" || e.key === " ") && onClick()}
      >
        <div className="flex items-start gap-3">
          <HelpCircle className="text-red-500 mt-1" aria-hidden="true" />
          <h3 id={`faq-question-${idx}`} className="text-sm font-semibold">
            {faq.question}
          </h3>
        </div>
        {isOpen ? (
          <ChevronUp className="text-red-400" aria-hidden="true" />
        ) : (
          <ChevronDown className="text-red-400" aria-hidden="true" />
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${idx}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-400 text-sm mt-3 pl-7"
            aria-live="polite"
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      className="bg-gradient-to-b from-black via-[#1a1a1a] to-[#2d0000] px-4 py-20"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2
          id="faq-heading"
          className="text-3xl md:text-4xl font-medium text-red-500 mb-3"
        >
          Performance Marketing FAQs
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Learn how performance marketing drives measurable results using ad strategies, funnels, and data-backed optimization.
        </p>
      </div>

      <ul className="space-y-6 max-w-3xl mx-auto" aria-label="Frequently Asked Questions">
        {faqs.map((faq, i) => (
          <li key={i}>
            <FaqCard
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => toggleOpen(i)}
              idx={i}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faq;