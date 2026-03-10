import Image from 'next/image';
import EmojiDialog from './EmojiDialog';

const Footer = () => {
  const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

  return (
    <footer className="min-h-screen lg:h-screen bg-[#FFF8F6] text-[#171717] py-16 md:py-24 px-8 md:px-14 lg:px-20 flex flex-col md:flex-row justify-between items-center lg:items-end gap-12 relative border-t border-primary/10">

      <div className="flex flex-col gap-6 w-full lg:w-1/3 z-10">
        <h2 className="text-[3rem] md:text-[4rem] lg:text-[5rem] font-beni-black leading-[0.8] uppercase text-primary">
          Let&apos;s talk
        </h2>

        <p className="font-roboto-mono text-gray-600 text-sm md:text-base max-w-md">
          I&apos;m currently <b>open</b> to new opportunities. Feel free to reach out to me via email or download my CV to learn more about my experience.
        </p>

        <div className="flex flex-col gap-4 mt-4">
          <a
            href="mailto:paolavrgsdev@gmail.com"
            className="inline-flex justify-center items-center px-6 py-3 bg-primary hover:bg-secondary text-white font-roboto-mono font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primary/30"
          >
            Email Me
          </a>
          <a
            href="/cv_paolavrgsdev.pdf"
            download
            className="inline-flex justify-center items-center px-6 py-3 bg-transparent border-2 border-primary hover:bg-primary/10 text-primary font-roboto-mono font-bold text-sm uppercase tracking-widest rounded-full transition-all duration-300 transform hover:-translate-y-1"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex justify-center items-center z-10 my-8 lg:my-0">
        <Image
          src="/draw_resume.svg"
          alt="Resume drawing"
          width={280}
          height={280}
          className="w-[200px] md:w-[280px] drop-shadow-xl"
        />
      </div>

      <div className="flex flex-col lg:items-end w-full lg:w-1/3 gap-4 z-10">
        <div className="mb-5">
          <EmojiDialog emojis={["💖", "📞", "💌"]} scale={0.5} />
        </div>
        <p className="font-roboto-mono font-bold text-sm uppercase tracking-widest text-primary">
          This project was built with
        </p>

        <div className="flex flex-wrap lg:justify-end gap-3 max-w-[300px]">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-lg text-sm font-roboto-mono text-gray-700 hover:text-primary hover:bg-primary/10 transition-colors duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-8 text-xs font-roboto-mono text-gray-400">
          © 2026 Paola Vargas. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
