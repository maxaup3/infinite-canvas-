import React, { useEffect } from 'react';

interface BorderBeamProps {
  size: number;
  duration: number;
  delay: number;
  borderWidth: number;
  borderRadius: number | string;
}

const BorderBeam: React.FC<BorderBeamProps> = ({
  size,
  duration,
  delay,
  borderWidth,
  borderRadius,
}) => {
  const keyframesId = `borderBeam-${size}-${duration}-${delay}-${Math.random()}`;

  useEffect(() => {
    // 创建样式标签
    const style = document.createElement('style');
    const borderRadiusValue = typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius;

    style.textContent = `
      @keyframes ${keyframesId} {
        0% {
          background-position: 0% 0%;
        }
        100% {
          background-position: 100% 100%;
        }
      }

      .border-beam-${keyframesId} {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: ${borderRadiusValue};
        pointer-events: none;
        background: linear-gradient(
          45deg,
          transparent 30%,
          rgba(255, 255, 255, 0.1) 50%,
          transparent 70%
        );
        background-size: 200% 200%;
        animation: ${keyframesId} ${duration}s linear infinite;
        animation-delay: ${delay}s;
        border: ${borderWidth}px solid transparent;
        background-clip: padding-box;
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [keyframesId, duration, delay, borderWidth, borderRadius]);

  return <div className={`border-beam-${keyframesId}`} />;
};

export default BorderBeam;
