"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { STACK_DATA, type TechItem } from "./data";

const frontendItems =
  STACK_DATA.find((category) => category.title === "FRONTEND")?.items ?? [];
const backendItems =
  STACK_DATA.find((category) => category.title === "BACKEND")?.items ?? [];

function TechTile({ item, duplicate }: { item: TechItem; duplicate: boolean }) {
  return (
    <div
      role="listitem"
      aria-hidden={duplicate}
      className="flex h-32 w-32 shrink-0 flex-col items-center justify-center gap-3 border-r border-border/70 px-3 sm:h-40 sm:w-40"
      style={{
        transform: "perspective(900px) rotateY(var(--scroll-tilt, 0deg))",
      }}
    >
      <div className="relative h-9 w-9 shrink-0">
        <Image
          src={item.icon}
          alt=""
          fill
          sizes="36px"
          className="object-contain"
          unoptimized
        />
      </div>
      <span className="max-w-full truncate text-center text-sm font-medium">
        {item.name}
      </span>
    </div>
  );
}

function TechLane({
  title,
  items,
  direction,
}: {
  title: string;
  items: TechItem[];
  direction: "left" | "right";
}) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    let currentOffset: number | null = null;
    let currentTilt = 0;
    let previousTime = 0;

    const animate = (time: number) => {
      frame = 0;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const cycleWidth = track.scrollWidth / 2;
      const rect = viewport.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(
          0,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      );
      const targetOffset = reducedMotion
        ? 0
        : direction === "left"
          ? -cycleWidth * progress
          : -cycleWidth * (1 - progress);
      const targetTilt = reducedMotion
        ? 0
        : (direction === "left" ? 1 : -1) * Math.sin(progress * Math.PI) * 1.2;

      if (currentOffset === null) currentOffset = targetOffset;

      const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
      const easing = reducedMotion ? 1 : 1 - Math.exp(-elapsed / 140);
      currentOffset += (targetOffset - currentOffset) * easing;
      currentTilt += (targetTilt - currentTilt) * easing;
      previousTime = time;

      if (Math.abs(targetOffset - currentOffset) < 0.1) {
        currentOffset = targetOffset;
      }
      if (Math.abs(targetTilt - currentTilt) < 0.01) {
        currentTilt = targetTilt;
      }

      track.style.transform = `translate3d(${currentOffset}px, 0, 0)`;
      track.style.setProperty("--scroll-tilt", `${currentTilt}deg`);

      if (
        !reducedMotion &&
        (currentOffset !== targetOffset || currentTilt !== targetTilt)
      ) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const updatePosition = () => {
      if (!frame) frame = window.requestAnimationFrame(animate);
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [direction]);

  return (
    <section aria-label={`${title} technologies`} className="min-w-0">
      <div ref={viewportRef} className="fade-mask overflow-hidden">
        <div
          ref={trackRef}
          role="list"
          className="flex w-max will-change-transform"
        >
          {[...items, ...items].map((item, index) => (
            <TechTile
              key={`${item.name}-${index}`}
              item={item}
              duplicate={index >= items.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WorksWithEverything() {
  const rulerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;

    const updateRuler = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const ruler = rulerRef.current;
        if (!ruler) return;

        const reducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        ruler.style.backgroundPositionX = `${reducedMotion ? 0 : window.scrollY * 0.5}px`;
      });
    };

    updateRuler();
    window.addEventListener("scroll", updateRuler, { passive: true });
    window.addEventListener("resize", updateRuler);

    return () => {
      window.removeEventListener("scroll", updateRuler);
      window.removeEventListener("resize", updateRuler);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Core Technology Stack
        </h2>
        <span className="font-mono text-[11px] uppercase text-muted-foreground">
          Frontend / Backend
        </span>
      </div>

      <div className="overflow-hidden border-border/70">
        <TechLane title="Frontend" items={frontendItems} direction="left" />

        <div
          ref={rulerRef}
          aria-hidden="true"
          className="relative flex h-7 items-center justify-center border-border/70"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, var(--border) 0 1px, transparent 1px 12px)",
          }}
        ></div>

        <TechLane title="Backend" items={backendItems} direction="right" />
      </div>
    </section>
  );
}
