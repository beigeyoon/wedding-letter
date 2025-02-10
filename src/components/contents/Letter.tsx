import { motion } from 'framer-motion';

const fadeInVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const Letter = () => {
  return (
    <div className="w-full h-full not-visited:text-center text-black font-gowun flex flex-col justify-between">
      <motion.div
        variants={fadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <img src="/images/black_flower.png" className="w-12 mx-auto mb-4" />
        <h1 className="text-3xl font-extrabold pb-3">결 혼 합 니 다</h1>
        <h2 className="text-xl">2025. 02. 21 (금)</h2>
      </motion.div>

      <motion.p
        className="text-center leading-8"
        variants={fadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        저희는 풍성한 결혼식 대신
        <br />
        직계 가족들만 모신 소박한 자리에서
        <br />
        함께 식사하며 결혼을 축하하려 합니다.
        <br />
        여러분의 축복은 마음에 담아
        <br />
        언제나 잊지 않겠습니다.
        <br />
        감사합니다.
      </motion.p>

      <motion.div
        className="text-sm flex flex-col gap-2"
        variants={fadeInVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      >
        <div>
          <span className="text-xl mr-2">김극모, 고소현</span>의 차남
          <span className="text-xl ml-4">희탁</span>
        </div>
        <div>
          <span className="text-xl mr-2">윤석린, 공윤옥</span>의 차녀
          <span className="text-xl ml-4">여경</span>
        </div>
      </motion.div>
    </div>
  );
};
