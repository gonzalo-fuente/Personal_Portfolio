import { useEffect } from "react";
import { useState } from "react";

import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Services from "../components/Services";

function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${isNavOpen ? "nav-open" : ""}`}>
      <Header />
      <Navbar setIsNavOpen={setIsNavOpen} />
      <Introduction />
      <Services />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
