import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

const images = [
  { original: '/images/wedding_10.webp' },
  { original: '/images/wedding_02.webp' },
  { original: '/images/wedding_05.webp' },
  { original: '/images/wedding_04.webp' },
  { original: '/images/wedding_03.webp' },
  { original: '/images/wedding_09.webp' },
  { original: '/images/wedding_06.webp' },
  { original: '/images/wedding_07.webp' },
  { original: '/images/wedding_08.webp' },
];

const fadeInVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

export const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  // 마우스 휠 이벤트를 배경으로 전달하는 함수
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (galleryRef.current) {
        const isHorizontalScroll =
          Math.abs(event.deltaX) > Math.abs(event.deltaY);
        if (!isHorizontalScroll) {
          // y축 스크롤 이벤트를 배경으로 전파
          event.preventDefault();
          window.scrollBy({
            top: event.deltaY,
            behavior: 'smooth',
          });
        }
      }
    };

    galleryRef.current?.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    return () => {
      galleryRef.current?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  // 왼쪽 네비게이션 아이콘
  const renderLeftNav = (onClick: () => void, disabled: boolean) => (
    <button
      type="button"
      className="absolute top-1/2 -translate-y-1/2 left-1 z-10 text-white"
      onClick={onClick}
      disabled={disabled}
    >
      <ChevronLeft size={32} />
    </button>
  );

  // 오른쪽 네비게이션 아이콘
  const renderRightNav = (onClick: () => void, disabled: boolean) => (
    <button
      type="button"
      className="absolute top-1/2 -translate-y-1/2 right-1 z-10 text-white"
      onClick={onClick}
      disabled={disabled}
    >
      <ChevronRight size={32} />
    </button>
  );

  return (
    <motion.div
      ref={galleryRef}
      className="w-full h-full flex justify-center items-center"
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      <ImageGallery
        items={images}
        renderLeftNav={renderLeftNav}
        renderRightNav={renderRightNav}
        showFullscreenButton={false}
        showPlayButton={false}
        additionalClass="custom-gallery"
        showThumbnails={false}
      />
    </motion.div>
  );
};
