import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const MobileFadeInSection = ({ children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,     // Animation happens every time it comes into view
    threshold: 0.15,        // Trigger when 15% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: 'easeIn',
          delay: 0.05,
        },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 40,
        transition: {
          duration: 0.9,
          ease: 'easeIn',
        },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 40 }}
      className="block md:hidden"
    >
      {children}
    </motion.div>
  );
};

export default MobileFadeInSection;
