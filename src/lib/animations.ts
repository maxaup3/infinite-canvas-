/**
 * 动画配置文件
 * 集中管理项目中的动效变体和配置
 */

// ============ Framer Motion 变体 ============

/**
 * 淡入动画
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

/**
 * 从下向上滑入
 */
export const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

/**
 * 从上向下滑入
 */
export const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

/**
 * 从左向右滑入
 */
export const slideRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

/**
 * 从右向左滑入
 */
export const slideLeft = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

/**
 * 缩放进入
 */
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

/**
 * 交错容器 - 用于列表动画
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

/**
 * 交错子项
 */
export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

// ============ 过渡配置 ============

/**
 * 弹簧动画配置 - 适合按钮、卡片等交互元素
 */
export const springConfig = {
  type: "spring" as const,
  stiffness: 400,
  damping: 17
};

/**
 * 平滑动画配置 - 适合页面过渡
 */
export const easeConfig = {
  duration: 0.3,
  ease: "easeInOut" as const
};

/**
 * 快速动画配置 - 适合小元素
 */
export const quickConfig = {
  duration: 0.2,
  ease: "easeOut" as const
};

/**
 * 慢速动画配置 - 适合大元素或重要过渡
 */
export const slowConfig = {
  duration: 0.5,
  ease: "easeInOut" as const
};

// ============ 预设动画组合 ============

/**
 * 按钮悬浮效果
 */
export const buttonHover = {
  scale: 1.05,
  transition: springConfig
};

/**
 * 按钮点击效果
 */
export const buttonTap = {
  scale: 0.95,
  transition: quickConfig
};

/**
 * 卡片悬浮效果
 */
export const cardHover = {
  y: -8,
  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
  transition: {
    type: "spring" as const,
    stiffness: 300,
    damping: 20
  }
};

/**
 * 模态框动画
 */
export const modalAnimation = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 25
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: { duration: 0.2 }
  }
};

/**
 * 页面过渡动画
 */
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: easeConfig
};

// ============ 工具函数 ============

/**
 * 创建延迟动画
 * @param delay 延迟时间（秒）
 */
export const createDelayedAnimation = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ...easeConfig,
      delay
    }
  }
});

/**
 * 检测用户是否偏好减少动画
 */
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * 根据用户偏好返回动画配置
 * @param animation 动画配置
 * @returns 如果用户偏好减少动画，返回无动画配置
 */
export const respectMotionPreference = <T extends object>(animation: T): T | { duration: 0 } => {
  return prefersReducedMotion() ? { duration: 0 } : animation;
};
