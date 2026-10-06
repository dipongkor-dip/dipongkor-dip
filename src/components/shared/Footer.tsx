import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/70 px-5 py-7 text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          Connect With Me
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
          <a
            href="mailto:dipongkorroy000@gmail.com"
            className="inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail size={14} aria-hidden="true" />
            dipongkorroy000@gmail.com
          </a>

          <a
            target="_blank"
            href="https://github.com/dipongkor-dip"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub profile"
            className="inline-flex size-8 items-center justify-center rounded-md border border-border/70 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Github size={16} />
          </a>

          <a
            target="_blank"
            href="https://linkedin.com/in/dipongkor"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn profile"
            className="inline-flex size-8 items-center justify-center rounded-md border border-border/70 text-muted-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      <p className="mx-auto mt-5 max-w-6xl border-t border-border/50 pt-4 text-center text-[11px] text-muted-foreground sm:text-left">
        © {new Date().getFullYear()} Dipongkor
      </p>
    </footer>
  );
}
