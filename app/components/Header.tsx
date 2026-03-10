import Image from "next/image";
import SocialButtons from "./SocialButtons";

const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center p-8 md:p-14 lg:p-20 min-h-screen lg:h-screen gap-8 lg:gap-0">
      <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-[3rem] md:text-[4.5rem] lg:text-[6rem] font-beni-black text-primary leading-none">PAOLA VARGAS</h1>
        <h2 className="text-[2rem] md:text-[3rem] lg:text-[4.2rem] font-beni-black text-secondary leading-none">Frontend Developer</h2>
        <p className="text-base md:text-lg lg:text-xl font-roboto-mono font-bold text-light-gray">React + TypeScript + NodeJs</p>
        <SocialButtons />
      </div>
      <div className="w-full lg:w-1/2 relative h-[300px] md:h-[450px] lg:h-[600px]">
        <Image src="/portrait_1.jpg" alt="Portrait" fill style={{ objectFit: 'cover' }} className="rounded-xl" />
      </div>
    </div>
  );
};

export default Header;