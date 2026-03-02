import React, { useState } from "react";

type GlossHoverProps = {
  image: string;
  alt: string;
  portfolioRedirect?: string;
  clientName?: string;
  index: number;
};

const GlossHover = ({
  image,
  alt,
  portfolioRedirect,
  clientName,
  index,
}: GlossHoverProps) => {
  const [pos, setPos] = useState("0% 0%");
  const [, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos(`${x}px ${y}px`);
  };

  const handleEnter = () => setIsHovering(true);
  const handleLeave = () => setIsHovering(false);

  return (
    <div
      className={`flex flex-col items-center transition-transform duration-500 ease-in-out space-y-3 sm:space-y-6`}
    >
      <div>
        <h2 className="relative left-5 top-9 text-right text-white [text-shadow:1px_1px_0_rgba(0,0,0,0.7)] font-semibold z-20 drop-shadow-lg">
          <sup>#</sup>
          {String(index + 1).padStart(2, "0")}
        </h2>
        <div
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          onMouseMove={handleMouseMove}
          className="relative group w-[420px] h-[305px] rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-in-out cursor-pointer border border-ink/10 shadow-sm"
        >
          <div
            className="absolute inset-0 z-10 pointer-events-none transition-all duration-500 ease-out"
            style={{
              background: `radial-gradient(circle at ${pos}, rgba(255,255,255,0.2) 0%, transparent 100%)`,
            }}
          />

          {portfolioRedirect ? (
            <a href={portfolioRedirect} className="block w-full h-full">
              <img
                src={image}
                alt={alt}
                className="block w-full h-full object-cover z-0"
                loading="lazy"
              />
            </a>
          ) : (
            <img
              src={image}
              alt={alt}
              className="block w-full h-full object-cover z-0"
              loading="lazy"
            />
          )}
        </div>
        <p className="font-urw uppercase text-left mt-3 tracking-[0.10em] text-sm text-ink/70 dark:text-surface/65">
          {clientName}
        </p>
      </div>
    </div>
  );
};

export default GlossHover;
