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
  overlayDepth = 0.4,
  fullScreen = false,
  containerSize = 'default', // 'default' (1024px), 'full', 'large' (1300px), 'medium' (800px), 'small' (600px), or custom max-width string
  textAlign = 'center' // 'center', 'left', 'right'
}) => {
  // Determine container max-width based on containerSize prop
  const getContainerMaxWidth = () => {
    if (containerSize === 'full') return 'max-w-full';
    if (containerSize === 'large') return 'max-w-[1300px]';
    if (containerSize === 'medium') return 'max-w-[800px]';
    if (containerSize === 'small') return 'max-w-[600px]';
    if (containerSize === 'default') return 'max-w-[1024px]';
    // Custom max-width (e.g., "1200px")
    return `max-w-[${containerSize}]`;
  };

  const containerMaxWidth = getContainerMaxWidth();
  const textAlignClass = textAlign === 'left' ? 'text-left' : textAlign === 'right' ? 'text-right' : 'text-center';
  const titleMarginClass = textAlign === 'left' ? 'ml-0' : textAlign === 'right' ? 'mr-0' : 'mx-auto';
  const titleMaxWidth = textAlign === 'center' ? 'max-w-[700px]' : 'max-w-full';

  return (
    <section
      className={`relative ${fullScreen ? 'md:min-h-[calc(100vh-280px)] min-h-[320px] flex items-center justify-center' : 'py-16'}`}
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
      
      <div className={`relative z-10 container mx-auto px-4 ${containerMaxWidth}`}>
        {title && (
          <h2 className={`${textAlignClass} ${titleMaxWidth} ${titleMarginClass} ${fullScreen ? 'text-2xl md:text-4xl lg:text-5xl' : 'text-3xl'} ${(subTitle || content) ? 'mb-8' : ''} ${textHeaderColor}`}>{title}</h2>
        )}
        { 
          subTitle && 
          <>
            <h3 className={`${textAlignClass} text-2xl mb-4`}>{subTitle}</h3>
          </>
        }
        {content && (
          <div className={`markdown ${textColor} ${textAlignClass}`}>
            <ReactMarkdown>
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </section>
  );
};

export default BackgroundSection;
