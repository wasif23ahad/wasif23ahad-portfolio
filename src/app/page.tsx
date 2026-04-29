import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Other sections will be added here */}
      <section id="about" className="py-20 h-screen flex items-center justify-center bg-slate-900/50">
        <h2 className="text-3xl text-text-secondary">About Section Placeholder</h2>
      </section>
      <section id="skills" className="py-20 h-screen flex items-center justify-center">
        <h2 className="text-3xl text-text-secondary">Skills Section Placeholder</h2>
      </section>
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
