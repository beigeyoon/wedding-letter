import { forwardRef } from 'react';
import { BackgroundData } from '../types';

const Background = forwardRef<HTMLDivElement, BackgroundData>(
  ({ bgType, bgValue }, ref) => {
    const backgroundStyle =
      bgType === 'image'
        ? {
            backgroundImage: `url(${bgValue})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }
        : {};

    return (
      <section
        ref={ref}
        className={`w-full h-full font-oswald flex flex-col items-center justify-center snap-start relative ${
          bgType === 'color' ? bgValue : ''
        }`}
        style={{
          ...backgroundStyle,
        }}
      />
    );
  }
);

export default Background;
