'use client';

import React, { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  className = '',
  direction = 'up',
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 100 };
      case 'down':
        return { y: -100 };
      case 'left':
        return { x: 100 };
      case 'right':
        return { x: -100 };
      default:
        return { y: 100 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        ...getInitialPosition(),
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              y: 0,
            }
          : { opacity: 0, ...getInitialPosition() }
      }
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};
