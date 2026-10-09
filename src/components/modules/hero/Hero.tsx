import {Download, Github, Linkedin, Mail} from "lucide-react";
import {Button} from "@/src/components/ui/button";
import ContactButton from "@/src/components/modules/hero/ContactButton";

const Hero = () => {
  const resumeLink = `https://drive.google.com/uc?export=download&id=${process.env.RESUME_LINK_ID}`;

  return (
    <section className="mx-auto max-w-6xl px-5 pt-28 max-md:pt-20">
      <div className="text-center space-y-4">
        <h2 className="text-sm max-md:text-xs bg-linear-to-r from-primary via-chart-3 to-chart-2 bg-clip-text font-mono uppercase tracking-widest text-transparent">
          Full-Stack Developer
        </h2>
        <h1 className="text-3xl max-md:text-lg font-bold">
          {`>_`} Hi, I&apos;m <span className="text-chart-3">Dipongkor</span>
        </h1>
        <p className="max-w-xl text-sm max-md:text-xs mx-auto text-muted-foreground">
          I build end-to-end web applications, from React and Next.js interfaces to backend APIs with Node.js, Python, and Go.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <ContactButton />
          <Button
            asChild
            variant="outline"
            className="h-9 gap-1.5 border-border/70 bg-card/40 px-4 text-xs shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-card/70 max-md:h-8 max-md:px-3"
          >
            <a
              href={resumeLink}
            >
              <Download className="size-3.5" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://github.com/dipongkor-dip"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border/70 bg-card/50 p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/dipongkor"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border/70 bg-card/50 p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:dipongkorroy000@gmail.com"
            target="_blank"
            className="rounded-lg border border-border/70 bg-card/50 p-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
