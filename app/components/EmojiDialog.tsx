import React from "react";

interface EmojiDialogProps {
  emojis: string[];
  className?: string;
  scale?: number;
}

const EmojiDialog: React.FC<EmojiDialogProps> = ({ emojis, className = "", scale = 1 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ fontSize: `${scale}rem` }}>
      <div className="bg-[#FDF3F3] rounded-[2.5em] px-[2em] py-[1.5em] md:px-[3em] md:py-[2em] shadow-sm transform -rotate-3 relative z-10">
        <div className="flex gap-[1em] items-center justify-center text-[3em] md:text-[3.75em] lg:text-[4.5em] leading-none">
          {emojis.map((emoji, index) => (
            <span
              key={index}
              className="drop-shadow-md hover:scale-110 hover:-translate-y-1 transition-all cursor-default select-none"
              role="img"
              aria-label="emoji"
            >
              {emoji}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute left-[8%] -bottom-[2em] w-[1em] h-[1em] md:w-[1.25em] md:h-[1.25em] bg-[#FDF3F3] rounded-full shadow-sm z-0" />
    </div>
  );
};

export default EmojiDialog;
