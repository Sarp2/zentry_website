import React from 'react';

const ImageFilter = ({ 
  filterId = 'image-effects',
  clipPathId = 'rounded-corners',
  borderRadius = 24,
  blurAmount = 4,
  contrast = 1.1 
}) => {
  return (
    <svg
      width="0"
      height="0"
      className="absolute"
      style={{ visibility: 'hidden' }}
    >
      <defs>
        <filter
          id={filterId}
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          {/* Pre-blur for smoother edges */}
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="0.5"
            result="preblur"
          />
          
          {/* Main blur effect */}
          <feGaussianBlur
            in="preblur"
            stdDeviation={blurAmount}
            result="blur"
            edgeMode="none"
          />
          
          {/* Enhance contrast */}
          <feColorMatrix
            in="blur"
            type="matrix"
            values={`
              ${contrast} 0   0   0   0
              0   ${contrast} 0   0   0
              0   0   ${contrast} 0   0
              0   0   0   19  -9
            `}
            result="contrast"
          />
          
          {/* Smooth edges */}
          <feComposite
            in="SourceGraphic"
            in2="contrast"
            operator="atop"
            result="smoothed"
          />
          
          {/* Final composite */}
          <feBlend
            in="smoothed"
            in2="SourceGraphic"
            mode="normal"
          />
        </filter>

        {/* Create rounded corner mask */}
        <clipPath id={clipPathId}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx={borderRadius}
            ry={borderRadius}
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ImageFilter;