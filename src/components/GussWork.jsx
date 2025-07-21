import React from "react";
import { motion } from "framer-motion";
import { Brain, Activity, Flame, UserCheck } from "lucide-react";
import { assets } from "../assets/assests";
import EnrollBtn from "./EnrollBtn";

const cardData = [
  {
    icon: <Brain className="text-red-400 w-6 h-6" />,
    text: `Tired of learning "marketing" that never goes beyond definitions?`,
  },
  {
    icon: <Flame className="text-red-400 w-6 h-6" />,
    text: `Tried running ads but burnt your budget without returns?`,
  },
  {
    icon: <Activity className="text-red-400 w-6 h-6" />,
    text: `Feeling stuck with outdated scaling advice like “increase 30% every 3 days”?`,
  },
  {
    icon: <UserCheck className="text-red-400 w-6 h-6" />,
    text: `Want to finally get job-ready, campaign-ready, and client-ready?`,
  },
];

const GussWork = () => {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });
  const threshold = 12;

  const handleMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setTilt({ x: y * -threshold, y: x * threshold });
  };

  return (
    <section className=" px-4 py-10 bg-gradient-to-br from-red-900 via-[#211414] to-black overflow-hidden">
      <div className="text-center pb-10 font-medium w-full text-3xl md:text-4xl text-white">
        <h1 className="flex justify-center text-3xl md:text-4xl text-red-500 items-center gap-2 flex-wrap px-4">
          Your Growth Deserves Better Than Just Theory or Guesswork
        </h1>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 md:gap-20 px-4">
        {/* Left: Cards */}
        <div className="grid grid-cols-1 gap-6 w-full max-w-lg">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              onMouseMove={handleMove}
              onMouseLeave={() => setTilt({ x: 0, y: 0 })}
              style={{
                transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-xl p-6 border border-red-700/50 bg-gradient-to-br from-red-800 via-black to-black text-white hover:shadow-red-700/40 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                {card.icon}
                <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
        >
          <img
            src={assets.webPic}
            alt="Team working together"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
          />
        </motion.div>
      </div>
      <EnrollBtn/>
    </section>
  );
};

export default GussWork;
