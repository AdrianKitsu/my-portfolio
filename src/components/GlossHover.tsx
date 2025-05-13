import React, { useState } from "react";

type GlossHoverProps = {
  image: string;
  alt: string;
  href?: string;
  portfolioRedirect?: string;
};

const GlossHover = ({
  image,
  alt,
  href,
  portfolioRedirect,
}: GlossHoverProps) => {
  const [pos, setPos] = useState("0% 0%");
  const [isHovering, setIsHovering] = useState(false);

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
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onMouseMove={handleMouseMove}
        className="relative group sm:w-[420px] w-full rounded-[35px] overflow-hidden hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
      >
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-all duration-500 ease-out"
          style={{
            background: `radial-gradient(circle at ${pos}, rgba(255,255,255,0.2) 0%, transparent 100%)`,
          }}
        />
        <div
          className={`w-full bg-[#00000057] h-[60px] absolute bottom-0 left-1/2 z-20 -translate-x-1/2 transition-opacity duration-500 ease-in-out flex justify-center
    opacity-100 ${isHovering ? "sm:opacity-100" : "sm:opacity-0"}`}
        >
          <a
            href={portfolioRedirect}
            className="items-center mr-[20px] px-4 py-2 rounded-full text-[21px] place-content-center font-caslon font-normal text-white hover:scale-110 duration-500 mix-blend-difference text-[#eeeeee] tracking-[0.5px]"
          >
            Learn more →
          </a>
        </div>

        {href ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={alt}
              className="w-full rounded-[35px] object-cover relative z-0"
            />
          </a>
        ) : (
          <img
            src={image}
            alt={alt}
            className="w-full rounded-[35px] object-cover relative z-0"
          />
        )}
      </div>
    </div>
  );
};

export default GlossHover;
