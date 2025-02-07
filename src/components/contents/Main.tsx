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
    <div className="w-full font-oswald text-5xl font-bold text-right leading-12 pt-2">
      <motion.span
        className="block"
        variants={textVariantHEETAK}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        HEETAK
      </motion.span>

      <motion.span
        className="block"
        variants={textVariantYEOKYUNG}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        YEOKYUNG
      </motion.span>
    </div>
  );
};
