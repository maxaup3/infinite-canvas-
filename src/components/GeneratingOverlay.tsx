import React, { useMemo } from 'react';
import { useTheme, isLightTheme } from '../contexts/ThemeContext';

interface GeneratingOverlayProps {
  position: { x: number; y: number };
  width: number;
  height: number;
  progress: number;
  taskId: string;
  elapsedTime?: number;
  estimatedTime?: number;
}

const GeneratingOverlay: React.FC<GeneratingOverlayProps> = ({
  position,
  width,
  height,
  progress,
  elapsedTime = 0,
  estimatedTime = 0,
}) => {
  const { themeStyle } = useTheme();
  const isLight = isLightTheme(themeStyle);

  // 格式化时间
  const formatTime = (seconds: number) => {
    if (seconds < 60) {
      return `${Math.round(seconds)}s`;
    }
    const minutes = Math.floor(seconds / 60);
    const secs = Math.round(seconds % 60);
    return `${minutes}m ${secs}s`;
  };

  // 计算剩余时间
  const remainingTime = useMemo(() => {
    if (!estimatedTime) return null;
    const remaining = estimatedTime * (1 - progress / 100);
    return remaining > 0 ? remaining : 0;
  }, [estimatedTime, progress]);

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x - width / 2,
        top: position.y - height / 2,
        width: width,
        height: height,
        background: isLight
          ? 'linear-gradient(135deg, rgba(26, 26, 46, 0.95) 0%, rgba(20, 20, 35, 0.95) 100%)'
          : 'linear-gradient(135deg, rgba(13, 13, 20, 0.95) 0%, rgba(8, 8, 15, 0.95) 100%)',
        borderRadius: 0,
        overflow: 'hidden',
        border: isLight
          ? '1px solid rgba(255, 255, 255, 0.12)'
          : '1px solid rgba(255, 255, 255, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        padding: '32px 40px',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* 进度条容器 */}
      <div
        style={{
          width: '100%',
          maxWidth: 320,
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}
      >
        {/* 进度条 */}
        <div
          style={{
            width: '100%',
            height: 6,
            background: isLight
              ? 'rgba(255, 255, 255, 0.1)'
              : 'rgba(255, 255, 255, 0.08)',
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* 进度条填充 */}
          <div
            style={{
              height: '100%',
              width: `${progress}%`,
              background: isLight
                ? 'linear-gradient(90deg, rgba(200, 200, 255, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%)'
                : 'linear-gradient(90deg, rgba(150, 150, 255, 0.85) 0%, rgba(255, 255, 255, 0.8) 100%)',
              borderRadius: 3,
              transition: 'width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              boxShadow: isLight
                ? '0 0 12px rgba(200, 200, 255, 0.4)'
                : '0 0 12px rgba(150, 150, 255, 0.5)',
            }}
          />

          {/* 进度条背景光晕 */}
          {progress < 100 && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                height: '100%',
                width: 40,
                background: isLight
                  ? 'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 100%)'
                  : 'linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%)',
                filter: 'blur(1px)',
                animation: 'shimmer 2s infinite',
              }}
            />
          )}
        </div>

        {/* 百分比文本 */}
        <div
          style={{
            fontSize: 12,
            color: isLight ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.45)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
            textAlign: 'center',
            letterSpacing: '0.01em',
          }}
        >
          {Math.round(progress)}% 完成
        </div>
      </div>

      {/* 时间信息 */}
      <div
        style={{
          display: 'flex',
          gap: 24,
          fontSize: 13,
          color: isLight ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255, 0.6)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {elapsedTime !== undefined && elapsedTime > 0 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ opacity: 0.7 }}>⏱</span>
            <span>
              已用: <span style={{ color: isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>{formatTime(elapsedTime)}</span>
            </span>
          </div>
        )}
        {remainingTime !== null && estimatedTime > 0 && remainingTime > 0 && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            <span style={{ opacity: 0.7 }}>⏳</span>
            <span>
              剩余: <span style={{ color: isLight ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>{formatTime(remainingTime)}</span>
            </span>
          </div>
        )}
      </div>

      {/* 生成中文本 */}
      <div
        style={{
          fontSize: 13,
          color: isLight ? 'rgba(255, 255, 255, 0.55)' : 'rgba(255, 255, 255, 0.5)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
          letterSpacing: '0.02em',
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        }}
      >
        生成中...
      </div>

      <style>
        {`
          @keyframes shimmer {
            0% {
              left: 0;
            }
            100% {
              left: 100%;
            }
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 0.6;
            }
            50% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default GeneratingOverlay;
