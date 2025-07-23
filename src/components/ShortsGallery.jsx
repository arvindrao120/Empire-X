import React from "react";

const shortsData = ["BtqGTuGGWOM", "7iR-hGpY0L0", "N6x_U5QeGWA"];

const ShortsGallery = () => {
  return (
    <div className="bg-gradient-to-br  py-10 px-4">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-red-500 mb-2">
        Client Work Highlights
      </h2>
      <p className="text-center text-gray-300 max-w-xl mx-auto mb-8 text-sm md:text-base">
        Real campaigns. Real results. See how our performance marketing
        strategies helped clients scale fast and convert better.
      </p>
      <div className="grid gap-6 md:grid-cols-3 justify-items-center">
        {shortsData.map((id, index) => (
          <div
            key={index}
            className="w-[250px] md:w-[280px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg shadow-red-800 hover:scale-105 transition duration-300 border border-red-700"
          >
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&showinfo=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsGallery;
