import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, PlayCircle, BadgeCheck } from "lucide-react";

function CourseWorking() {
    const steps = [
  {
    title: "Step 1 – Choose your course",
    desc: "Explore and pick the one that matches your goals — job, freelancing, scaling ads.",
    icon: <BookOpen className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Step 2 – Enroll and start learning instantly",
    desc: "You’ll get lifetime access + bonus templates + recorded breakdowns.",
    icon: <PlayCircle className="w-8 h-8 text-red-500" />,
  },
  {
    title: "Step 3 – Get skilled, confident & job/client-ready",
    desc: "Use our systems to apply, build portfolios, or run campaigns that get results.",
    icon: <BadgeCheck className="w-8 h-8 text-red-500" />,
  },
];

const TiltCard = ({ children }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const threshold = 10;

  const handleMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * threshold;
    const y = ((e.clientY - top) / height - 0.5) * -threshold;
    setTilt({ x, y });
  };

  const resetTilt = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={resetTilt}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="bg-[#1a1a1a] border border-red-900/50 rounded-xl p-6 shadow-xl transition-transform duration-300"
    >
      {children}
    </motion.div>
  );
};

  return (
     <section className="bg-[#0d0d0d] py-16 px-4">
        <div>
            <h1 className="text-red-500 text-center text-3xl md:text-4xl  font-medium pb-16">How It Works</h1>
        </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <TiltCard key={index}>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 bg-red-900/30 p-4 rounded-full shadow-red-700/30 shadow-md">
                {step.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  )
}

export default CourseWorking