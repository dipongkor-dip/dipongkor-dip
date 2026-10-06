import About from "@/src/components/modules/about/About";
import ContactForm from "@/src/components/modules/contact/ContactForm";
import Hero from "@/src/components/modules/hero/Hero";
import Projects from "@/src/components/modules/projects/Projects";
import Stack from "@/src/components/modules/stack/Stack";
import WorksWithEverything from "@/src/components/modules/stack/TechStack";

export default function Home() {
  return (
    <section>
      <Hero />
      <div>
        <div id="about">
          <About />
        </div>

        <div id="stack">
          <Stack />
        </div>

        <div id="projects">
          <Projects />
          <WorksWithEverything />
        </div>

        <div id="contact">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
