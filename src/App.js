import React from "react";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import ScrollToTop from "./Components/ScrollToTop";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";

/* main component */
function App() {
  return (
    <div className="font-poppins dark:bg-darkprimary dark:text-white bg-ghostWhite">
      <Navbar></Navbar>
      <Home></Home>
      <Projects />
      <Services />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
