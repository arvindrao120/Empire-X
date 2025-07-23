import React from 'react'

function PageNotFound() {
return (
    <div className="flex flex-col w-full h-screen items-center justify-center text-sm max-md:px-4 py-20 bg-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
        404 Not Found
      </h1>
      <div className="h-px w-80 rounded bg-gradient-to-r from-red-500 to-black my-5 md:my-7"></div>
      <p className="md:text-xl text-red-200 max-w-lg text-center">
        The page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="group flex items-center gap-1 bg-red-600 hover:bg-red-700 px-7 py-2.5 text-white rounded-full mt-10 font-medium active:scale-95 transition-all"
      >
        Back to Home
        <svg
          className="group-hover:translate-x-0.5 transition"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.583 11h12.833m0 0L11 4.584M17.416 11 11 17.417"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};


export default PageNotFound