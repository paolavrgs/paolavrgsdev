import Tag from "./Tag";
import Image from "next/image";

const tags = [
  { text: "React", color: "white", background: "primary" },
  { text: "TypeScript", color: "white", background: "secondary" },
  { text: "JavaScript", color: "white", background: "primary" },
  { text: "NodeJs", color: "white", background: "secondary" },
  { text: "NextJs", color: "white", background: "primary" },
  { text: "Tailwind", color: "white", background: "secondary" },
  { text: "Git", color: "white", background: "primary" },
];

const About = () => {
  return (
    <div className="py-16 md:py-24 px-8 md:px-14 lg:px-20 h-auto min-h-unset md:min-h-screen md:h-screen flex flex-col justify-between">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center">
        <div className="flex flex-col gap-4 w-full lg:w-1/3 text-center lg:text-left">
          <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[3rem] font-roboto-mono text-primary leading-none">
            Living life <br />one <code className="text-secondary">div</code> at a time
          </h1>
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {tags.map((tag) => (
              <Tag key={tag.text} text={tag.text} color={tag.color} background={tag.background} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/3 justify-center items-start hidden lg:flex">
          <Image src="/draw_order.svg" alt="Portrait" width={300} height={300} className="rounded-xl max-w-[200px] md:max-w-[250px] lg:max-w-[300px] max-h-[500px] h-auto" />
        </div>
        <div className="w-full lg:w-1/3 font-roboto-mono text-center lg:text-left text-sm md:text-base">
          <p>
            Systems Engineer & Mid-Senior Frontend Developer with 6+ years of experience  specializing in the React ecosystem.</p>
          <p>
            Proven expertise in architecting scalable  solutions using Next.js and Micro-frontend architecture for high-traffic applications.
          </p>
          <p>Currently bridging into Node.js for full-stack delivery in remote-first environments.</p>
        </div>
      </div>
      <div className="mt-4 lg:mt-0">
        <p className="text-xs md:text-sm font-roboto-mono font-bold text-primary uppercase tracking-widest">
          About
        </p>
        <div className="w-8 h-0.5 bg-primary mt-1" />
      </div>
    </div>
  );
};

export default About;