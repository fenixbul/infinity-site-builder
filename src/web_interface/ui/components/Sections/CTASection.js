import React from 'react';
import Link from 'next/link';

const CTASection = ({ header, content, subHeader, subHeaderContent, buttonText, buttonLink, imageSrc, imageAlt="" }) => {
  return (
    <div className='relative overflow-y-hidden'>
      <div className="md:container md:px-4 mx-auto md:py-20 text-lg">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-white space-y-10 lg:space-y-0 lg:space-x-12">
          {/* Left Section - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img src={imageSrc} alt={imageAlt} className="cta-img max-w-full h-auto object-contain" />
          </div>
          
          {/* Right Section - Content */}
          <div className="md:px-0 px-4 lg:w-1/2 flex flex-col space-y-4 max-w-[800px] text-left">
            <h2 className='text-3xl lg:text-4xl'>{header}</h2>
            {content.map((item) => (
              <p>{item}</p>
            ))}
            <div className='pt-4'>
              <Link href={buttonLink} className='bg-[#006630] text-white text-2xl header-font rounded-md px-5 pt-[14px] pb-[12px]'>{buttonText}</Link>
            </div>
            <h3 className="text-3xl pt-4">{subHeader}</h3>
            <p>{subHeaderContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
