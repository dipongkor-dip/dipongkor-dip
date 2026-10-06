"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useState} from "react";
import smoothScrollTo from "@/src/components/smooth-scroll";
import ThemeToggle from "@/src/components/shared/ThemeToggle";
import {Button} from "@/src/components/ui/button";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY && currentY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 w-full transition-transform duration-500 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="mx-auto max-w-6xl px-5 pt-3 max-md:px-3">
        <nav className="hacker-panel relative flex items-center justify-between rounded-xl px-4 py-2">
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/brand-d.svg" height={36} width={36} alt="Dipongkor Roy logo" className="rounded-lg transition duration-300 hover:scale-105" />
            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-semibold tracking-wide text-foreground">Dipongkor Roy</p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Full Stack Developer</p>
            </div>
          </Link>

          <div className="flex items-center gap-2 text-sm font-medium text-foreground sm:gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => smoothScrollTo("about")}
              className="cursor-pointer rounded-lg px-2.5 text-xs text-foreground/90 transition-all duration-300 hover:scale-[0.98] hover:bg-primary/10 hover:text-primary max-md:px-1.5"
            >
              About
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => smoothScrollTo("projects")}
              className="cursor-pointer rounded-lg px-2.5 text-xs text-foreground/90 transition-all duration-300 hover:scale-[0.98] hover:bg-primary/10 hover:text-primary max-md:px-1.5"
            >
              Projects
            </Button>
            <ThemeToggle />
            <Button
              size="sm"
              onClick={() => smoothScrollTo("contact")}
              className="cursor-pointer rounded-lg bg-primary px-3 text-xs text-primary-foreground transition-all duration-300 hover:scale-[0.98] hover:bg-primary/90 max-md:px-2"
            >
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
