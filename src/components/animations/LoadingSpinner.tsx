import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * 加载动画组件
 * 使用 Framer Motion 实现流畅的旋转动画
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  className
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-2',
    lg: 'w-8 h-8 border-3'
  };

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
      className={cn(
        'border-current border-t-transparent rounded-full',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="Loading"
    />
  );
};
