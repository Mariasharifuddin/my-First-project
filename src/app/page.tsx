import Header from "./Components/Header";

import About from "./Components/About";
import Projects from "./Components/Projects";

import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <About />
      
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
