"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {STACK_DATA, type StackCategory} from "./data";

const PRIORITY_CATEGORIES = ["LANGUAGES", "BACKEND", "FRONTEND"];
const CATEGORY_GROUPS = [
  {title: "Tools & Platforms", categories: ["TOOLS", "AUTHENTICATION", "AI & APIs"]},
  {title: "Cloud & Payments", categories: ["CLOUD & DEPLOYMENT", "PAYMENTS"]},
];
const GROUPED_CATEGORIES = CATEGORY_GROUPS.flatMap((group) => group.categories);
const ORDERED_CATEGORIES = [
  ...PRIORITY_CATEGORIES.flatMap((title) =>
    STACK_DATA.filter((category) => category.title === title).map((category) => ({title: category.title, categories: [category]})),
  ),
  ...STACK_DATA.filter((category) => !PRIORITY_CATEGORIES.includes(category.title)).flatMap((category) => {
    const group = CATEGORY_GROUPS.find((candidate) => candidate.categories.includes(category.title));
    if (!group) return [{title: category.title, categories: [category]}];
    if (category.title !== group.categories[0]) return [];

    return [
      {
        title: group.title,
        categories: group.categories.flatMap((title) => STACK_DATA.filter((item) => item.title === title)),
      },
    ];
  }),
];

function SkillItem({name, icon, role, level}: {name: string; icon: string; role: string; level: number}) {
  const invertInDark = name === "GitHub" || name === "Vercel";

  return (
    <div className="flex min-w-0 items-center gap-4 border-l-2 border-primary/25 bg-card/50 px-4 py-3 transition-colors hover:border-primary hover:bg-card">
      <div className="relative h-9 w-9 shrink-0">
        <Image src={icon} alt={name} fill className={`object-contain ${invertInDark ? "dark:invert" : ""}`} unoptimized />
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{name}</p>
        <p className="truncate text-[11px] uppercase tracking-wide text-muted-foreground">{role}</p>
      </div>
      <span className="ml-auto shrink-0 font-mono text-xs text-primary">{level}%</span>
    </div>
  );
}

const BACKEND_ENVIRONMENTS = ["Node.js", "Python", "Go"] as const;

function BackendEnvironments({items}: StackCategory) {
  return (
    <div className="grid gap-x-8 gap-y-8 md:grid-cols-3">
      {BACKEND_ENVIRONMENTS.map((environment, index) => {
        const environmentItems = items.filter((item) => item.environment === environment);

        return (
          <section key={environment} className="min-w-0 border-t-2 border-primary/40 pt-4">
            <h4 className="mb-4 flex items-baseline gap-3 text-sm font-semibold uppercase tracking-[0.12em]">
              <span className="font-mono text-xs text-primary">0{index + 1}</span>
              {environment} Environment
            </h4>
            <div className="space-y-2">
              {environmentItems.map((item) => (
                <SkillItem key={`${environment}-${item.name}`} name={item.name} icon={item.icon} role={item.role} level={item.level} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

function CategorySection({title, items}: StackCategory) {
  return (
    <article className="border-t border-border/70 py-8 first:border-t-0 first:pt-0 md:py-10">
      <div className="mb-5 flex items-baseline gap-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">{title}</h3>
        <span className="font-mono text-xs text-muted-foreground">{String(items.length).padStart(2, "0")}</span>
      </div>
      {title === "BACKEND" ? (
        <BackendEnvironments title={title} items={items} />
      ) : (
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <SkillItem key={`${title}-${item.name}`} name={item.name} icon={item.icon} role={item.role} level={item.level} />
          ))}
        </div>
      )}
    </article>
  );
}

function CombinedCategorySection({title, categories}: {title: string; categories: StackCategory[]}) {
  return (
    <article className="border-t border-border/70 py-8 first:border-t-0 first:pt-0 md:py-10">
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{title}</h3>
      <div className={`grid gap-x-10 gap-y-8 ${categories.length === 3 ? "md:grid-cols-3" : "md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"}`}>
        {categories.map((category) => (
          <section key={category.title} className="min-w-0 border-t-2 border-primary/40 pt-4">
            <div className="mb-4 flex items-baseline gap-3">
              <h4 className="text-sm font-semibold uppercase tracking-[0.12em]">{category.title}</h4>
              <span className="font-mono text-xs text-muted-foreground">{String(category.items.length).padStart(2, "0")}</span>
            </div>
            <div className={categories.length === 2 ? "grid gap-2 sm:grid-cols-2" : "space-y-2"}>
              {category.items.map((item) => (
                <SkillItem key={`${category.title}-${item.name}`} name={item.name} icon={item.icon} role={item.role} level={item.level} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

export default function Stack() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateActiveIndex = () => {
      const rect = trackRef.current?.getBoundingClientRect();
      if (!rect) return;

      const totalScroll = Math.max(1, rect.height - window.innerHeight);
      const traveled = Math.min(totalScroll, Math.max(0, -rect.top));
      const progress = traveled / totalScroll;
      const nextIndex = Math.min(ORDERED_CATEGORIES.length - 1, Math.floor(progress * ORDERED_CATEGORIES.length));
      setActiveIndex((currentIndex) => (currentIndex === nextIndex ? currentIndex : nextIndex));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActiveIndex();
      });
    };

    updateActiveIndex();
    window.addEventListener("scroll", onScroll, {passive: true});
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-5 pt-20 max-md:py-10">
      <h2 className="text-xl font-bold text-center mb-4 max-md:mb-2 max-md:text-lg max-md:text-start px-8">2. My Stack</h2>
      <p className="mb-6 max-w-2xl mx-auto text-sm text-muted-foreground text-center">
        A collection of technologies and tools I use to build and ship projects.
      </p>

      <div ref={trackRef} className="relative" style={{height: `${ORDERED_CATEGORIES.length * 100}vh`}}>
        <div className="sticky top-20 flex h-[calc(100vh-5rem)] items-center">
          <div className="relative h-[calc(100%-2rem)] w-full overflow-hidden">
            {ORDERED_CATEGORIES.map((slide, index) => {
              const isActive = index === activeIndex;
              const hasPassed = index < activeIndex;
              const hiddenPosition = hasPassed
                ? activeIndex % 2 === 1
                  ? "translate-x-full"
                  : "-translate-x-full"
                : index % 2 === 1
                  ? "-translate-x-full"
                  : "translate-x-full";

              return (
                <div
                  key={slide.title}
                  className={`absolute inset-0 overflow-y-auto overscroll-y-auto transition-[transform,opacity] duration-700 ease-out motion-reduce:transition-none ${
                    isActive ? "translate-x-0 opacity-100" : `pointer-events-none ${hiddenPosition} opacity-0`
                  }`}
                  aria-hidden={!isActive}
                >
                  {slide.categories.length > 1 ? (
                    <CombinedCategorySection title={slide.title} categories={slide.categories} />
                  ) : (
                    <CategorySection title={slide.categories[0].title} items={slide.categories[0].items} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
