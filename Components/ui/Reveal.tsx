'use client';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

type RevealProps = {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'top' | 'bottom';
  delay?: number;
};

const getVariants = (direction: string, delay: number = 0.2) => {
  const distance = 50;
  let hidden, visible;

  switch (direction) {
    case 'left':
      hidden = { opacity: 0, x: -distance };
      visible = { opacity: 1, x: 0 };
      break;
    case 'right':
      hidden = { opacity: 0, x: distance };
      visible = { opacity: 1, x: 0 };
      break;
    case 'top':
      hidden = { opacity: 0, y: -distance };
      visible = { opacity: 1, y: 0 };
      break;
    case 'bottom':
    default:
      hidden = { opacity: 0, y: distance };
      visible = { opacity: 1, y: 0 };
      break;
  }

  return {
    hidden,
    visible: {
      ...visible,
      transition: { duration: 0.7, delay },
    },
  };
};

export default function Reveal({ children, direction = 'bottom', delay = 0.2 }: RevealProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    // Таймаут для fallback - анимация запустится через 1.5 секунды, даже если inView не сработал
    const fallbackTimeout = setTimeout(() => {
      controls.start('visible');
    }, 1500);

    if (inView) {
      controls.start('visible');
      clearTimeout(fallbackTimeout);
    }

    return () => clearTimeout(fallbackTimeout);
  }, [inView, controls]);

  const variants = getVariants(direction, delay);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
