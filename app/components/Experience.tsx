"use client";

import { useRef } from "react";
import EmojiDialog from "./EmojiDialog";

const experiences = [
  {
    role: "Frontend Developer",
    company: "IA Interactive",
    period: "May 2023 - Feb 2026",
    description:
      "Developed critical user authentication modules using Auth0 for a high-traffic cinema web application. Contributed to the end-to-end frontend redesign.",
    tags: ["React", "Tailwind CSS", "Micro-frontends", "Auth0", "TypeScript", "Next.js"],
  },
  {
    role: "Software Engineer",
    company: "In All Media (US-Remote)",
    period: "July 2022 - Feb 2023",
    description:
      "Spearheaded the migration of legacy components from Angular 1.8 to React 16, significantly improving application scalability and maintenance.",
    tags: ["React", "Performance Optimization"],
  },
  {
    role: "Software Engineer",
    company: "Flatirons Development (US-Remote)",
    period: "June 2021 - July 2022",
    description:
      "Developed pixel-perfect, reusable UI components for diverse US-based projects. Collaborated on a healthcare platform.",
    tags: ["React", "Material UI", "Styled Components", "Figma"],
  },
  {
    role: "Frontend React Developer",
    company: "ID BI",
    period: "July 2020 - June 2021",
    description:
      "Engineered a custom design system for E-commerce and POS platform.",
    tags: ["React", "TypeScript", "Styled Components", "UI/UX"],
  },
  {
    role: "React Developer (Freelance)",
    company: "Bigwave",
    period: "February 2020 - June 2020",
    description:
      "Acted as the sole Frontend Developer for a proposal and polling platform, managing the full UI/UX lifecycle and REST API integration.",
    tags: ["React", "UI/UX"],
  },
];

const Experience = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-sage-green min-h-screen lg:h-screen flex flex-col justify-between p-8 md:p-14 lg:p-20 gap-8 lg:gap-0">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 flex-1">
        <div className="w-full lg:w-1/3 shrink-0">
          <div className="mb-4">
            <EmojiDialog emojis={["🤝", "👩‍💻", "😎"]} scale={0.4} />
          </div>
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-beni-black text-white leading-[0.95] uppercase">
            Teams I&apos;ve Joined
          </h1>
        </div>

        <div className="w-full lg:w-2/3 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="snap-start shrink-0 w-[280px] md:w-[320px] lg:w-[350px] bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  <p className="text-xs font-roboto-mono text-sage-green font-bold uppercase tracking-wider">
                    {exp.period}
                  </p>
                  <h3 className="text-lg md:text-xl font-roboto-mono font-medium text-gray-900 mt-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-roboto-mono text-gray-500 mt-0.5">
                    {exp.company}
                  </p>
                </div>
                <p className="text-sm font-roboto-mono text-gray-700 leading-relaxed flex-1">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-roboto-mono font-bold bg-sage-green/20 text-sage-green px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom label */}
      <div className="mt-4 lg:mt-0">
        <p className="text-xs md:text-sm font-roboto-mono font-bold text-white uppercase tracking-widest">
          Experience
        </p>
        <div className="w-16 h-0.5 bg-white mt-1" />
      </div>
    </div>
  );
};

export default Experience;
