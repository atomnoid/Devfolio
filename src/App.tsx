import { About } from "./components/portfolio/About";
import { Achievements } from "./components/portfolio/Achievements";
import { Beyond } from "./components/portfolio/Beyond";
import { Contact } from "./components/portfolio/Contact";
import { Experience } from "./components/portfolio/Experience";
import { Footer } from "./components/portfolio/Footer";
import { Hero } from "./components/portfolio/Hero";
import { Navbar } from "./components/portfolio/Navbar";
import { Projects } from "./components/portfolio/Projects";
import { Skills } from "./components/portfolio/Skills";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Beyond />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
