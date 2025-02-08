import { useState, useEffect, useRef } from 'react';
import Background from './components/Background';
import ContentContainer from './components/ContentContainer';
import { backgrounds } from './constants';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          setCurrentSection(index);
        }
      });
    }, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-screen max-w-[680px] overflow-y-auto snap-y snap-mandatory">
      <ContentContainer currentSection={currentSection} />
      {backgrounds.map((background, index) => (
        <Background
          key={index}
          ref={(el) => (sectionRefs.current[index] = el)}
          bgType={background.bgType}
          bgValue={background.bgValue}
        />
      ))}
    </div>
  );
};

export default App;
