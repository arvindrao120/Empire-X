import React from "react";
import EnrollBtn from "../components/EnrollBtn";
import CourseCard from "../components/CourseCard";
import { motion } from "framer-motion";

function Courses() {
  const courseData = [
    {
      id: 1,
      title: "Complete Performance Marketing Course",
      price: "₹9,999",
      description:
        "Practical + live-recorded course to make you a full-stack media buyer in 45 days.",
    },
    {
      id: 2,
      title: "Meta Ads Scaling Strategy",
      price: "₹999",
      description:
        "Tired of the “scale 30% every 3 days” myth? Learn our Scaling System (EXS) to reduce CPL, CPC, and CPM while increasing ROAS.",
    },
  ];

  return (
    <section
      id="course"
      className="bg-[#211414] text-red-500 py-12"
      aria-labelledby="courses-heading"
    >
      <header>
        <h1
          id="courses-heading"
          className="text-3xl md:text-4xl px-4 md:px-16 lg:px-48 font-medium text-red-600"
        >
          Our Premium Courses
          <div className="h-1 mt-3 rounded-r-xl bg-gradient-to-r from-red-500 to-red-700 w-24 transition-all duration-500" />
        </h1>
      </header>
      <CourseCard />
    </section>
  );
}

export default Courses;
