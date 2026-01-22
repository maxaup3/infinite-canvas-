import { motion } from 'framer-motion';
import { fadeIn, easeConfig } from '../../lib/animations';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * 淡入动画包装组件
 * 自动为子元素添加淡入效果
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className
}) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={{ ...easeConfig, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
