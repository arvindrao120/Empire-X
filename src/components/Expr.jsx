import React, { useState } from "react";
import { motion } from "framer-motion";

function Expr() {
  // 3D tilt effect for the whole stats grid
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
    <section
      className="bg-[#121212] text-white py-10 expr-section border-b-2 border-red-500/50 shadow-lg"
      aria-labelledby="expr-heading"
    >
      <h2 id="expr-heading" className="sr-only">
        Empire-X Experience Stats
      </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 max-w-7xl mx-auto"
        style={{
          transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        onMouseMove={handleMove}
        onMouseLeave={resetTilt}
        tabIndex={0}
        aria-label="Company Achievements"
      >
        <motion.div
          className="text-center bg-[#181818] rounded-xl shadow-md p-4"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(231,0,11,0.18)" }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          <p className="text-2xl font-semibold py-2 text-red-500" aria-label="37 plus successful projects">
            37 +
          </p>
          <h3 className="text-lg">Successful Projects</h3>
        </motion.div>
        <motion.div
          className="text-center bg-[#181818] rounded-xl shadow-md p-4"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(231,0,11,0.18)" }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          <p className="text-2xl py-2 font-semibold text-red-500" aria-label="97 percent client satisfaction">
            97 %
          </p>
          <h3 className="text-lg">Client Satisfaction</h3>
        </motion.div>
        <motion.div
          className="text-center bg-[#181818] rounded-xl shadow-md p-4"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(231,0,11,0.18)" }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          <p className="text-2xl font-semibold py-2 text-red-500" aria-label="2 plus years experience">
            2 +
          </p>
          <h3 className="text-lg">Years Experience</h3>
        </motion.div>
        <motion.div
          className="text-center bg-[#181818] rounded-xl shadow-md p-4"
          whileHover={{ scale: 1.07, boxShadow: "0 8px 32px 0 rgba(231,0,11,0.18)" }}
          transition={{ type: "spring", stiffness: 120, damping: 12 }}
        >
          <p className="text-2xl font-semibold py-2 text-red-500" aria-label="24/7 support available">
            24/7
          </p>
          <h3 className="text-lg">Support Available</h3>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Expr;