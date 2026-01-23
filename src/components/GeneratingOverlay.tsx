import React, { useMemo, useState } from 'react';
import { useTheme, isLightTheme } from '../contexts/ThemeContext';

// 星座数据 - 放大 2 倍，让星星更分散
const constellations = [
  {
    name: 'ursa-major', // 大熊座（北斗七星）
    lines: [
      [0, 80, 40, 70], [40, 70, 70, 80], [70, 80, 100, 60], // 勺子部分
      [100, 60, 140, 40], [140, 40, 170, 20], [170, 20, 200, 0], // 勺柄
    ],
    stars: [[0, 80, 2.5], [40, 70, 2], [70, 80, 2], [100, 60, 2.5], [140, 40, 2], [170, 20, 2], [200, 0, 2.5]],
    width: 220,
    height: 100,
  },
  {
    name: 'orion', // 猎户座
    lines: [
      [50, 0, 70, 0], // 肩膀
      [50, 0, 40, 40], [70, 0, 80, 40], // 身体上部
      [40, 40, 60, 50], [60, 50, 80, 40], // 腰带连接
      [30, 50, 50, 50], [50, 50, 70, 50], // 腰带
      [40, 40, 20, 90], [80, 40, 100, 90], // 腿
    ],
    stars: [[50, 0, 2.5], [70, 0, 2], [40, 40, 2], [80, 40, 2], [30, 50, 2], [50, 50, 2.5], [70, 50, 2], [20, 90, 2], [100, 90, 2]],
    width: 120,
    height: 100,
  },
  {
    name: 'cygnus', // 天鹅座（北十字）
    lines: [
      [80, 0, 80, 50], [80, 50, 80, 100], // 竖线
      [0, 40, 80, 50], [80, 50, 160, 60], // 横线（翅膀）
    ],
    stars: [[80, 0, 2.5], [80, 50, 3], [80, 100, 2], [0, 40, 2], [160, 60, 2]],
    width: 170,
    height: 110,
  },
  {
    name: 'leo', // 狮子座
    lines: [
      [0, 60, 30, 40], [30, 40, 60, 50], [60, 50, 90, 30], // 头部弧线
      [90, 30, 120, 40], [120, 40, 150, 20], // 身体
      [150, 20, 180, 50], [180, 50, 160, 80], // 后腿和尾巴
    ],
    stars: [[0, 60, 2], [30, 40, 2.5], [60, 50, 2], [90, 30, 2.5], [120, 40, 2], [150, 20, 2], [180, 50, 2], [160, 80, 2.5]],
    width: 190,
    height: 90,
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

  // 随机选择一个星座和位置（组件挂载时确定）
  const [constellationData] = useState(() => {
    const constellation = constellations[Math.floor(Math.random() * constellations.length)];
    // 随机位置：10%-70% 范围内（留出星座自身大小的空间）
    const posX = 10 + Math.random() * 60;
    const posY = 10 + Math.random() * 50;
    return { constellation, posX, posY };
  });

  // 随机生成星星位置 - 使用更大的网格和更多随机性
  const randomStars = useMemo(() => {
    const stars: Array<{ left: number; top: number; size: number; duration: number; delay: number }> = [];
    // 使用 5x4 网格，每个格子有 60% 几率放一颗星星，增加随机感
    const cols = 5;
    const rows = 4;
    const cellWidth = 90 / cols;  // 每个格子宽度（覆盖 5%-95%）
    const cellHeight = 85 / rows; // 每个格子高度（覆盖 5%-90%）

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        // 60% 几率在这个格子放星星，增加不规则感
        if (Math.random() > 0.4) {
          stars.push({
            left: 5 + col * cellWidth + Math.random() * cellWidth,
            top: 5 + row * cellHeight + Math.random() * cellHeight,
            size: Math.random() > 0.7 ? 3 : 2,
            duration: 4 + Math.random() * 4, // 4-8秒，更慢的闪烁
            delay: Math.random() * 5,
          });
        }
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

      {/* 星座彩蛋 - 随机位置，连线逐渐显现 */}
      <svg
        style={{
          position: 'absolute',
          left: `${constellationData.posX}%`,
          top: `${constellationData.posY}%`,
          width: constellationData.constellation.width,
          height: constellationData.constellation.height,
          pointerEvents: 'none',
        }}
      >
        {constellationData.constellation.lines.map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="rgba(255, 255, 255, 0.06)"
            strokeWidth="0.5"
            style={{
              animation: `fadeInLine 8s ease-in-out forwards`,
              animationDelay: `${i * 2}s`,
              opacity: 0,
            }}
          />
        ))}
      </svg>
      {/* 星座星星 */}
      {constellationData.constellation.stars.map(([x, y, size], i) => (
        <div
          key={`const-${i}`}
          style={{
            position: 'absolute',
            width: size * 1.2,
            height: size * 1.2,
            background: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '50%',
            left: `calc(${constellationData.posX}% + ${x}px)`,
            top: `calc(${constellationData.posY}% + ${y}px)`,
            animation: `twinkle ${4 + Math.random() * 4}s ease-in-out infinite`,
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
          @keyframes fadeInLine {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default GeneratingOverlay;
