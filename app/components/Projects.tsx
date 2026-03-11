"use client";

import { useState } from "react";
import Image from "next/image";
import EmojiDialog from "./EmojiDialog";

const projectsList = [
  {
    name: "Cinepolis",
    description:
      "High-traffic cinema web app for Mexico and multiple countries. Led frontend for authentication and loyalty flows, and contributed to the internationalization effort across regions.",
    image: "/projects/cnpls.png",
  },
  {
    name: "ID Marketplace - POS",
    description:
      "E-commerce and point-of-sale platform for the Peruvian market. Involved across multiple modules — from UI/UX design to production-ready code.",
    image: "/projects/idbi.png",
  },
  {
    name: "CAA (Creative Artists Agency)",
    description:
      "Internal tooling for one of the world's leading talent agencies. Maintained existing features and worked on the migration of legacy Angular components to React.",
    image: "/projects/caa.png",
  },
  {
    name: "Health in her Hue",
    description:
      "US platform connecting women with culturally competent doctors. Joined from day one — translated Figma designs to code for the landing page, provider directory, user profile, and full authentication flow.",
    image: "/projects/hihh.png",
  },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-16 md:py-24 px-8 md:px-14 lg:px-20 h-auto min-h-unset md:min-h-screen md:h-screen flex flex-col justify-between bg-white">
      <div className="w-full text-center lg:text-left mb-8 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-beni-black text-primary leading-[0.7] uppercase">
          Built with Love
          <br />
          <span className="text-secondary font-roboto-mono text-[2rem] lg:text-[3rem]">& Code</span>
        </h1>
        <div className="mt-4 md:mt-0 mb-4">
          <EmojiDialog emojis={["💻", "🛒", "🎨"]} scale={0.6} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:items-center flex-1">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full aspect-video max-w-[400px] md:max-w-[600px] lg:max-w-[700px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out">
            <Image
              src={projectsList[activeIndex].image}
              alt={projectsList[activeIndex].name}
              className="object-cover w-full h-full object-top"
              width={700}
              height={400}
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          {projectsList.map((project, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={project.name}
                onClick={() => setActiveIndex(index)}
                className={`text-left p-4 rounded-xl min-h-[80px] transition-all duration-300 ${isActive
                  ? "bg-primary/5 border border-primary/20 shadow-sm"
                  : "border border-transparent hover:bg-gray-50 opacity-70 hover:opacity-100"
                  }`}
              >
                <h3
                  className={`text-lg md:text-xl font-roboto-mono font-bold leading-tight ${isActive ? "text-primary" : "text-gray-600"
                    }`}
                >
                  {project.name}
                </h3>

                <p
                  className={`mt-2 text-sm font-roboto-mono leading-relaxed transition-all duration-300 overflow-hidden ${isActive ? "max-h-[120px] opacity-100 text-gray-600" : "max-h-0 opacity-0"
                    }`}
                >
                  {project.description}
                </p>
              </button>
            );
          })}
        </div>

      </div>

      <div className="mt-8 lg:mt-0">
        <p className="text-xs md:text-sm font-roboto-mono font-bold text-primary uppercase tracking-widest">
          Projects
        </p>
        <div className="w-16 h-0.5 bg-primary mt-1" />
      </div>
    </div>
  );
};

export default Projects;
