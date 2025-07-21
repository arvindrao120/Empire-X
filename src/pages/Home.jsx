import React from "react";
import Navbar from "../components/Navbar";
import Header from "./Header";
import Expr from "../components/Expr";
import About from "./About";
import WhyChooseUs from "./WhyChooseUs";
import Courses from "./Courses";
import GussWork from "../components/GussWork";
import AwardsSection from "../components/AwardSection";
import CourseWorking from "../components/CourseWorking";
import Faq from "../components/FAQ.JSX";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <>
      <Navbar />
    
      <main id="main-content" aria-label="Main Content">
        <Header />
        <Expr />
        <About />
        <WhyChooseUs />
        <Courses />
        <GussWork />
        <AwardsSection />
        <CourseWorking />
        <Faq />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default Home;
