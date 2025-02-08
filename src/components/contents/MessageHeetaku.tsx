import { motion } from 'framer-motion';

const wipeInVariants = {
  initial: { clipPath: 'inset(0 100% 0 0)', opacity: 0 }, // 오른쪽에서 시작 + 투명
  animate: { clipPath: 'inset(0 0% 0 0)', opacity: 1 }, // 전체 이미지가 보이도록 확장 + 불투명
  exit: { clipPath: 'inset(0 100% 0 0)', opacity: 0 }, // 다시 오른쪽으로 닦아내기 + 투명해짐
};

export const MessageHeetaku = () => {
  return (
    <div className="w-full font-oswald text-5xl font-bold text-right text-white flex justify-end">
      <motion.img
        src="/images/message_02.webp"
        className="w-[50%] pt-4 custom-shadow"
        variants={wipeInVariants}
        initial="initial"
        animate={{
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          transition: { duration: 0.8, ease: 'easeInOut' }, // 등장할 때
        }}
        exit={{
          clipPath: 'inset(0 100% 0 0)',
          opacity: 0,
          transition: { duration: 0.1, ease: 'easeInOut' }, // 사라질 때
        }}
      />
    </div>
  );
};
