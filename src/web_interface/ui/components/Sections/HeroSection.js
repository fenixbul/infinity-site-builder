import React from "react";

const HeroSection = ({ title, backgroundImage, text="left", fullScreen=false, useOverlay = true, overlayDepth = 0.15 }) => {
  return (
    <div
      className={`
        w-full
        ${fullScreen ? 'md:min-h-[calc(100vh-280px)] min-h-[320px]' : 'h-[250px]' }
        flex
        items-center
        bg-gray-500
        bg-center
        bg-no-repeat
        bg-cover
        relative
      `}
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamically set background image
    >
      {useOverlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayDepth }}
        ></div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <h1 className={`text-white text-3xl lg:text-5xl font-semibold text-shadow text-${text}`}>{title}</h1>
      </div>
    </div>
  );
};

export default HeroSection;
