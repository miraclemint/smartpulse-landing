'use client';

import React, { ReactNode, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
  className?: string;
  bgImage?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  offset = 50,
  className = '',
  bgImage,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div
      ref={ref}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
      className={`parallax-bg ${className}`}
    >
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </motion.div>
  );
};
