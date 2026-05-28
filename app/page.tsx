import Hero from "@/components/hero";
import About from "@/components/about";
import Expertise from "@/components/expertise";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <About />
      <Expertise />
      <Contact />
    </main>
  );
}
