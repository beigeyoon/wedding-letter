import { motion } from 'framer-motion';

const textVariantHEETAK = {
  initial: { opacity: 0, x: 100 }, // 오른쪽에서 등장
  animate: { opacity: 1, x: 0 }, // 중앙에 위치
  exit: { opacity: 0, x: -100 }, // 왼쪽으로 나감
};

const textVariantYEOKYUNG = {
  initial: { opacity: 0, x: -100 }, // 왼쪽에서 등장
  animate: { opacity: 1, x: 0 }, // 중앙에 위치
  exit: { opacity: 0, x: 100 }, // 오른쪽으로 나감
};

export const Main = () => {
  return (
    <div className="w-full font-cormorant-garamond text-5xl text-right leading-12 pt-2 font-bold">
      <motion.span
        className="block"
        variants={textVariantHEETAK}
        initial="initial"
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: 'easeInOut' }, // 등장할 때
        }}
        exit={{
          opacity: 0,
          x: -100,
          transition: { duration: 0.4, ease: 'easeInOut' }, // 사라질 때
        }}
      >
        Heetak
      </motion.span>

      <motion.span
        className="block text-white"
        variants={textVariantYEOKYUNG}
        initial="initial"
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.6, ease: 'easeInOut' }, // 등장할 때
        }}
        exit={{
          opacity: 0,
          x: 100,
          transition: { duration: 0.4, ease: 'easeInOut' }, // 사라질 때
        }}
      >
        Yeokyung
      </motion.span>
    </div>
  );
};
