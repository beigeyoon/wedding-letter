import { motion, AnimatePresence } from 'framer-motion';
import { Main } from './contents/Main';
import { Letter } from './contents/Letter';
import { Gallery } from './contents/Gallery';
import { MessageYooni } from './contents/MessageYooni';
import { MessageHeetaku } from './contents/MessageHeetaku';
import { Thanks } from './contents/Thanks';

interface AnimatedTitleProps {
  currentSection: number;
}

const SectionComponent = [
  Main,
  Letter,
  Gallery,
  MessageHeetaku,
  MessageYooni,
  Thanks,
];

const ContentContainer: React.FC<AnimatedTitleProps> = ({ currentSection }) => {
  const CurrentComponent = SectionComponent[currentSection];
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed max-w-[600px] h-full w-full px-8 py-16 z-120 pointer-events-none"
        key={currentSection}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <CurrentComponent />
      </motion.div>
    </AnimatePresence>
  );
};

export default ContentContainer;
