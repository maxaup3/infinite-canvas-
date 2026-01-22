import React, { useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, duration = 1500 }) => {
  const { themeStyle } = useTheme();

  const isLightTheme = themeStyle === 'anthropic' || themeStyle === 'neumorphism' || themeStyle === 'genz' || themeStyle === 'minimalism' || themeStyle === 'flat';

  useEffect(() => {
    const completeTimer = setTimeout(() => {
      onComplete?.();
    }, duration);

    return () => {
      clearTimeout(completeTimer);
    };
  }, [duration, onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        pointerEvents: 'none',
        animation: 'loading-fade-in 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      }}
    >
      {/* 加载中文字 */}
      <div
        style={{
          fontSize: 20,
          fontWeight: 500,
          color: isLightTheme ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.8)',
          fontFamily: 'var(--font-body)',
          letterSpacing: '0.05em',
          animation: 'fade-pulse 2s ease-in-out infinite',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          textShadow: isLightTheme
            ? '0 2px 8px rgba(102, 126, 234, 0.15)'
            : '0 2px 12px rgba(139, 155, 255, 0.3)',
        }}
      >
        Loading
        <span
          style={{
            display: 'inline-flex',
            width: '24px',
            justifyContent: 'flex-start',
          }}
        >
          <span style={{ animation: 'dots 1.5s steps(4) infinite' }}></span>
        </span>
      </div>

      {/* CSS 动画 */}
      <style>{`
        @keyframes loading-fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-pulse {
          0%, 100% {
            opacity: 0.5;
            transform: translateY(0px);
          }
          50% {
            opacity: 1;
            transform: translateY(-2px);
          }
        }

        @keyframes dots {
          0% {
            content: '';
            opacity: 0;
          }
          25% {
            content: '.';
            opacity: 1;
          }
          50% {
            content: '..';
            opacity: 1;
          }
          75% {
            content: '...';
            opacity: 1;
          }
          100% {
            content: '...';
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
