"use client";

import {Github, Linkedin, Mail} from "lucide-react";
import smoothScrollTo from "@/src/components/smooth-scroll";
import {Button} from "@/src/components/ui/button";

const Hero = () => {
  return (
    <section className="mx-auto max-w-6xl px-5 pt-28 max-md:pt-20">
      <div className="text-center space-y-4">
        <h2 className="text-md max-md:text-sm bg-gradient-to-r from-primary via-chart-3 to-chart-2 bg-clip-text font-mono uppercase tracking-widest text-transparent">
          Full-Stack Developer
        </h2>
        <h1 className="text-4xl max-md:text-xl font-bold">
          {`>_`} Hi, I&apos;m <span className="text-chart-3">Dipongkor</span>
        </h1>
        <p className="max-w-xl max-md:text-sm mx-auto text-muted-foreground">
          I build end-to-end web applications, from React and Next.js interfaces to backend APIs with Node.js, Python, and Go.
        </p>

        <div className="flex gap-4 justify-center mt-6">
          <Button
            onClick={() => smoothScrollTo("contact")}
            className="cursor-pointer transition-transform duration-500 ease-in-out hover:scale-95 max-md:px-2 max-md:text-sm"
          >
            Contact Me
          </Button>
          <a
            href="https://drive.google.com/file/d/1HY2XB8vgf-Cc81ajXCb6fWRkSq1Hep9W/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="my-auto flex cursor-pointer items-center gap-1 border-none bg-none text-muted-foreground transition-colors hover:text-primary max-md:text-sm"
          >
            Download Resume
          </a>
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
