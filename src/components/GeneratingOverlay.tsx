import React, { useMemo, useState } from 'react';
import { useTheme, isLightTheme } from '../contexts/ThemeContext';

// 星座数据
const constellations = [
  {
    name: 'ursa-major', // 大熊座（北斗七星）
    lines: [
      [0, 40, 20, 35], [20, 35, 35, 40], [35, 40, 50, 30], // 勺子部分
      [50, 30, 70, 20], [70, 20, 85, 10], [85, 10, 100, 0], // 勺柄
    ],
    stars: [[0, 40, 2.5], [20, 35, 2], [35, 40, 2], [50, 30, 2.5], [70, 20, 2], [85, 10, 2], [100, 0, 2.5]],
    width: 110,
    height: 50,
  },
  {
    name: 'orion', // 猎户座（完整版）
    lines: [
      [25, 0, 35, 0], // 肩膀
      [25, 0, 20, 20], [35, 0, 40, 20], // 身体上部
      [20, 20, 30, 25], [30, 25, 40, 20], // 腰带连接
      [15, 25, 25, 25], [25, 25, 35, 25], // 腰带
      [20, 20, 10, 45], [40, 20, 50, 45], // 腿
    ],
    stars: [[25, 0, 2.5], [35, 0, 2], [20, 20, 2], [40, 20, 2], [15, 25, 2], [25, 25, 2.5], [35, 25, 2], [10, 45, 2], [50, 45, 2]],
    width: 60,
    height: 50,
  },
  {
    name: 'cygnus', // 天鹅座（北十字）
    lines: [
      [40, 0, 40, 25], [40, 25, 40, 50], // 竖线
      [0, 20, 40, 25], [40, 25, 80, 30], // 横线（翅膀）
    ],
    stars: [[40, 0, 2.5], [40, 25, 3], [40, 50, 2], [0, 20, 2], [80, 30, 2]],
    width: 85,
    height: 55,
  },
  {
    name: 'leo', // 狮子座
    lines: [
      [0, 30, 15, 20], [15, 20, 30, 25], [30, 25, 45, 15], // 头部弧线
      [45, 15, 60, 20], [60, 20, 75, 10], // 身体
      [75, 10, 90, 25], [90, 25, 80, 40], // 后腿和尾巴
    ],
    stars: [[0, 30, 2], [15, 20, 2.5], [30, 25, 2], [45, 15, 2.5], [60, 20, 2], [75, 10, 2], [90, 25, 2], [80, 40, 2.5]],
    width: 95,
    height: 45,
  },
];

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

  // 随机选择一个星座（组件挂载时确定）
  const [constellation] = useState(() => constellations[Math.floor(Math.random() * constellations.length)]);

  // 随机生成星星位置 - 使用网格分布确保星星均匀散开
  const randomStars = useMemo(() => {
    const stars: Array<{ left: number; top: number; size: number; duration: number; delay: number }> = [];
    // 使用 4x3 网格，每个格子放一颗星星，避免聚集
    const cols = 4;
    const rows = 3;
    const cellWidth = 80 / cols;  // 每个格子宽度（覆盖 5%-85%）
    const cellHeight = 75 / rows; // 每个格子高度（覆盖 5%-80%）

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        stars.push({
          left: 5 + col * cellWidth + Math.random() * cellWidth,
          top: 5 + row * cellHeight + Math.random() * cellHeight,
          size: Math.random() > 0.6 ? 3 : 2,
          duration: 1.2 + Math.random() * 1.5,
          delay: Math.random() * 3,
        });
      }
    }
    return stars;
  }, []);

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
        border: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        padding: '32px 40px',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* 百分比 + 剩余时间 */}
      <div
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: isLight ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.8)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
          letterSpacing: '0.02em',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span>{Math.round(progress)}%</span>
        {remainingTime !== null && estimatedTime > 0 && remainingTime > 0 && (
          <>
            <span style={{ opacity: 0.4 }}>·</span>
            <span style={{ fontWeight: 400, opacity: 0.7 }}>剩余 {formatTime(remainingTime)}</span>
          </>
        )}
      </div>

      {/* 进度条 */}
      <div
        style={{
          width: '100%',
          maxWidth: 320,
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

      {/* 星空闪烁效果 - 随机位置 */}
      {randomStars.map((star, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: star.size,
            height: star.size,
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '50%',
            left: `${star.left}%`,
            top: `${star.top}%`,
            animation: `twinkle ${star.duration}s ease-in-out infinite`,
            animationDelay: `${star.delay}s`,
            boxShadow: '0 0 3px rgba(255, 255, 255, 0.5)',
          }}
        />
      ))}

      {/* 星座彩蛋 - 随机一个，居中 */}
      <svg
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%)`,
          width: constellation.width,
          height: constellation.height,
          opacity: 0.15,
          pointerEvents: 'none',
        }}
      >
        {constellation.lines.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="white" strokeWidth="0.8" />
        ))}
      </svg>
      {/* 星座星星 */}
      {constellation.stars.map(([x, y, size], i) => (
        <div
          key={`const-${i}`}
          style={{
            position: 'absolute',
            width: size * 1.2,
            height: size * 1.2,
            background: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '50%',
            left: `calc(50% - ${constellation.width / 2}px + ${x}px)`,
            top: `calc(50% - ${constellation.height / 2}px + ${y}px)`,
            animation: `twinkle ${1.3 + Math.random() * 1}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.6)',
          }}
        />
      ))}

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
          @keyframes twinkle {
            0%, 100% {
              opacity: 0.2;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.2);
            }
          }
        `}
      </style>
    </div>
  );
};

export default GeneratingOverlay;
