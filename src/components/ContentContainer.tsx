import { motion, AnimatePresence } from 'framer-motion';
import { Main } from './contents/Main';
import { Letter } from './contents/Letter';
import { Gallery } from './contents/Gallery';
import { Information } from './contents/Information';

interface AnimatedTitleProps {
  currentSection: number;
}

const SectionComponent = [Main, Letter, Gallery, Information];

const ContentContainer: React.FC<AnimatedTitleProps> = ({ currentSection }) => {
  const CurrentComponent = SectionComponent[currentSection];
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="w-full h-full fixed px-8 py-16 z-10 pointer-events-none"
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
