import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      
      {/* Remaining sections will be added in final phase */}
      <section id="contact" className="py-20 h-screen flex items-center justify-center bg-slate-900/50">
        <h2 className="text-3xl text-text-secondary">Contact Section Placeholder</h2>
      </section>
    </>
  );
}
