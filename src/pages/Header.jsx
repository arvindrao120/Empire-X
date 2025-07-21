import { Plane } from "lucide-react";
import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import GetStartBtn from "../components/GetStartBtn";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function Header() {
  // 3D tilt effect for main card
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX / 8);
    y.set(posY / 8);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <header
      id="home"
      aria-labelledby="main-heading"
      className="py-28 text-white px-4 header md:px-16 lg:px-48 bg-gradient-to-b from-[#0e0e0e] to-black"
    >
      {/* Floating Badge */}
      <motion.span
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xs md:text-sm w-fit flex items-center gap-3 border-2 py-4 px-4 md:font-semibold rounded-full border-red-300 shadow-lg shadow-red-400/20 animate-pulse"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-yellow-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"></path>
        </svg>
        India’s Fastest Growing Performance Marketing Education
      </motion.span>

      {/* Main 3D Card */}
      <motion.section
        ref={cardRef}
        className="mt-8"
        style={{ rotateX, rotateY, perspective: 1200 }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        aria-labelledby="main-heading"
      >
        {/* Main Heading */}
        <motion.h1
          id="main-heading"
          className="text-3xl md:text-4xl font-semibold xl:max-w-4xl py-6 leading-tight"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          We Build Top-Tier{" "}
          <span className="grad bg-gradient-to-r from-[#ff6b6b] to-[#ffc371] text-transparent bg-clip-text">
            Performance Marketers
          </span>{" "}
          &amp; Help Brands Scale with Real Results.
        </motion.h1>

        {/* Animated Line */}
        <motion.div
          className="w-24 h-[2px] bg-gradient-to-r from-[#ff6b6b] to-[#ffc371] mb-6"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* YouTube Embed */}
        <motion.div
          className="flex justify-center items-center p-6"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <div className="w-full max-w-xl aspect-video rounded-xl shadow-lg hover:scale-[1.02] transition-all duration-300 shadow-red-500/40 border border-red-500/20">
            <iframe
              className="w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/IltsOcCj1Ak?si=_or4K8vKYU-9Qv2z"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="w-full md:w-full md:mx-auto flex flex-col items-start justify-center text-left border-red-400/50 border-2 rounded-2xl p-6 text-white bg-gradient-to-br from-[#1f1f1f] to-[#2e2e2e] shadow-lg hover:shadow-red-300/20 transition-shadow"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          whileHover={{
            scale: 1.01,
            rotateX: 6,
            boxShadow: "0 8px 32px 0 rgba(255,193,113,0.18)",
          }}
        >
          <h2 className="text-2xl md:text-[46px] md:leading-[60px] py-4 font-semibold bg-gradient-to-r from-white to-[#ffd1ab] text-transparent bg-clip-text">
            Ready to launch your performance marketing career?
          </h2>
          <p className="bg-gradient-to-r from-white to-[#CAABFF] text-transparent bg-clip-text text-md">
            Or ready to scale your business to the next level?
          </p>
          <div className="py-4">
            <GetStartBtn />
          </div>
        </motion.div>
      </motion.section>
    </header>
  );
}

export default Header;