// components/BackgroundSection.js

import React from 'react';
import ReactMarkdown from 'react-markdown';

const BackgroundSection = ({ 
  image, 
  title,
  subTitle = null,
  content, 
  backgroundColor = 'bg-black', // Base background color without opacity
  textColor = 'text-white',
  textHeaderColor = 'text-white',
  useOverlay = true, 
  overlayDepth = 0.4
}) => {
  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {useOverlay && (
        <div
          className={`absolute inset-0 ${backgroundColor}`}
          style={{ opacity: overlayDepth }}
        ></div>
      )}
      
      <div className="relative z-10 container mx-auto px-4 max-w-[1024px]">
        <h2 className={`text-center max-w-[700px] mx-auto text-3xl mb-8 ${textHeaderColor}`}>{title}</h2>
        { 
          subTitle && 
          <>
            <h3 className='text-center text-2xl mb-4'>{subTitle}</h3>
          </>
        }
        <div className={`markdown ${textColor}`}>
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default BackgroundSection;
