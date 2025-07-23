import React, { useEffect } from "react";
import Testimonials from "../components/Testimonials";
import LatestCreations from "../components/LatestCreations";
import ShortsGallery from "../components/ShortsGallery";
import BackToHomeBtn from "../components/BackToHomeBtn";

function TestimonialsPage() {
  useEffect(() => {
   window.scrollTo({ top: 0, behavior: "smooth" });
  }, )
  
  return (
    <>
      <div className="bg-gradient-to-br from-black to-red-950 flex flex-col items-center pt-16  px-4 perspective-[1000px]">
        <Testimonials showBtn={true} />
        <LatestCreations />
        <ShortsGallery />
        <BackToHomeBtn />
      </div>
    </>
  );
}

export default TestimonialsPage;
