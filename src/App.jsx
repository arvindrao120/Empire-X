import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import TestimonialsPage from "./pages/TestimonialsPage";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route  path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
