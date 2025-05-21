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
      <div>
        <h2 className="relative left-5 top-9 text-right text-[#fcfcfc] font-bold z-20 text-shadow-xl">
          <sup>#</sup>
          {String(index + 1).padStart(2, "0")}
        </h2>
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

          {portfolioRedirect ? (
            <a href={portfolioRedirect}>
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
        <p className="font-urw text-[#fcfcfc] uppercase text-left mt-[15px]">
          {clientName}
        </p>
      </div>
    </div>
  );
};

export default GlossHover;
