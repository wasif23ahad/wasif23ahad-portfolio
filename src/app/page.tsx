import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      
      {/* Remaining sections will be added in next phases */}
      <section id="experience" className="py-20 h-screen flex items-center justify-center bg-slate-900/50">
        <h2 className="text-3xl text-text-secondary">Experience Section Placeholder</h2>
      </section>
      <section id="projects" className="py-20 h-screen flex items-center justify-center">
        <h2 className="text-3xl text-text-secondary">Projects Section Placeholder</h2>
      </section>
      <section id="contact" className="py-20 h-screen flex items-center justify-center bg-slate-900/50">
        <h2 className="text-3xl text-text-secondary">Contact Section Placeholder</h2>
      </section>
    </>
  );
}
