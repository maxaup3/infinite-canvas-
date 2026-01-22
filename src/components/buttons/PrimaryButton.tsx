import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { buttonHover, buttonTap } from '../../lib/animations';
import { LoadingSpinner } from '../animations';

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  disabled,
  isLoading,
  ...props
}) => {
  return (
    <motion.button
      whileHover={!disabled && !isLoading ? buttonHover : undefined}
      whileTap={!disabled && !isLoading ? buttonTap : undefined}
      className={cn(
        // 基础样式
        'inline-flex items-center justify-center gap-2',
        'px-6 py-2.5 rounded-[0.625rem]',
        'text-sm font-medium',

        // 颜色
        'bg-[oklch(0.205_0_0)] text-[oklch(0.985_0_0)]',

        // 交互效果
        'transition-all duration-200 ease-in-out',
        'hover:bg-[oklch(0.25_0_0)]',
        'active:scale-[0.98] active:bg-[oklch(0.18_0_0)]',

        // Focus 状态
        'focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-[oklch(0.708_0_0)] focus-visible:ring-offset-2',

        // Disabled 状态
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'disabled:hover:bg-[oklch(0.205_0_0)]',

        className
      )}
      disabled={disabled || isLoading}
      {...(props as any)}
    >
      {isLoading && <LoadingSpinner size="sm" />}
      {children}
    </motion.button>
  );
};
