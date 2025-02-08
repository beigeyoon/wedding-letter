import { motion } from 'framer-motion';

const wipeInVariants = {
  initial: { clipPath: 'circle(0% at 50% 50%)', opacity: 0 }, // 가운데 점에서 시작 + 투명
  animate: { clipPath: 'circle(150% at 50% 50%)', opacity: 1 }, // 원이 확장되며 이미지가 드러남 + 불투명
  exit: { clipPath: 'circle(0% at 50% 50%)', opacity: 0 }, // 다시 점으로 축소 + 투명해짐
};

export const Thanks = () => {
  return (
    <div className="w-full h-full flex justify-center items-center px-16 relative">
      <motion.img
        src="/images/bye.webp"
        variants={wipeInVariants}
        initial="initial"
        animate={{
          clipPath: 'circle(150% at 50% 50%)',
          opacity: 1,
          transition: { duration: 0.8, ease: 'easeInOut' }, // 등장할 때
        }}
        exit={{
          clipPath: 'circle(0% at 50% 50%)',
          opacity: 0,
          transition: { duration: 0.1, ease: 'easeInOut' }, // 사라질 때
        }}
      />
    </div>
  );
};
