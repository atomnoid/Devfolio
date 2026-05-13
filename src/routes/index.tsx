import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Beyond } from "@/components/portfolio/Beyond";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Developer · Indie Hacker · Product Builder — Portfolio 2026" },
      {
        name: "description",
        content:
          "Portfolio of a developer, indie hacker and product builder shipping SaaS, AI tools, and websites with a founder's mindset.",
      },
      { property: "og:title", content: "Developer · Indie Hacker · Product Builder" },
      {
        property: "og:description",
        content:
          "Building digital products with technology and business thinking — SaaS, AI, automation, growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
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
