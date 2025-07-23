
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
function BackToHomeBtn() {
    
      const [tilt, setTilt] = useState({ x: 0, y: 0 });
      const threshold = 12;
    
      const handleMove = (e) => {
        const { left, top, width, height } =
          e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * threshold;
        const y = ((e.clientY - top) / height - 0.5) * -threshold;
        setTilt({ x, y });
      };
    
      const resetTilt = () => setTilt({ x: 0, y: 0 });
  return (
     <div className="flex justify-center my-10">
      <Link
       to={"/"}
        aria-label="Enroll Now - Secure Payment"
        rel="noopener noreferrer"
       
        className="inline-block"
      >
        <button
          className="relative overflow-hidden group cursor-pointer bg-transparent text-red-500 font-semibold py-4 px-8 rounded-full border-2 border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-400"
          style={{
            perspective: 600,
            transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
          onMouseMove={handleMove}
          onMouseLeave={resetTilt}
          aria-label="Enroll Now"
          type="button"
        >
          {/* Expanding Background */}
          <div className="absolute inset-0 bg-transparent transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full"></div>

          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full transform scale-0 group-hover:scale-110 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>

          <span className="relative z-10 flex items-center gap-2">
            Back To Home
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </span>
        </button>
      </Link>
    </div>
  )
}

export default BackToHomeBtn;