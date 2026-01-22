import React, { useState } from 'react';
import { ImageLayer } from '../types';
import { useTheme, getThemeStyles, isLightTheme } from '../contexts/ThemeContext';
import iconCopy from '../assets/icons/copy.svg?url';
import iconInfo from '../assets/icons/info_circle.svg?url';
import { getResolutionLevel } from '../utils/imageUtils';

/**
 * 方案2: Popover Bubble 样式
 * - 从信息图标弹出的气泡卡片
 * - 中等大小，带有柔和的阴影和动画
 * - 可以显示更多信息，但不占用太多空间
 */
interface DetailPanelPopoverProps {
  layer: ImageLayer;
  anchorPosition: { x: number; y: number }; // 锚点位置（信息图标的位置）
  onClose: () => void;
}

const DetailPanelPopover: React.FC<DetailPanelPopoverProps> = ({
  layer,
  anchorPosition,
  onClose,
}) => {
  const { themeStyle } = useTheme();
  const isLight = isLightTheme(themeStyle);
  const [copied, setCopied] = useState(false);

  // popover 显示在锚点下方
  const popoverLeft = anchorPosition.x;
  const popoverTop = anchorPosition.y + 8;

  // 复制提示词
  const handleCopyPrompt = () => {
    if (layer.generationConfig?.prompt) {
      navigator.clipboard.writeText(layer.generationConfig.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  const bgColor = isLight ? 'rgba(255, 255, 255, 0.98)' : 'rgba(32, 32, 34, 0.98)';
  const textPrimary = isLight ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.9)';
  const textSecondary = isLight ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.45)';
  const borderColor = isLight ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.1)';

  return (
    <>
      {/* 点击外部关闭的遮罩 */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 998,
        }}
        onClick={onClose}
      />

      {/* Popover 气泡 */}
      <div
        style={{
          position: 'fixed',
          left: popoverLeft,
          top: popoverTop,
          transform: 'translateX(-50%)',
          backgroundColor: bgColor,
          borderRadius: 12,
          border: `1px solid ${borderColor}`,
          padding: 0,
          width: 320,
          boxShadow: isLight
            ? '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)'
            : '0 8px 32px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(20px)',
          zIndex: 999,
          animation: 'popIn 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          overflow: 'hidden',
        }}
      >
        {/* 顶部小箭头 */}
        <div
          style={{
            position: 'absolute',
            top: -6,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderBottom: `6px solid ${bgColor}`,
          }}
        />

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 16px',
            borderBottom: `1px solid ${borderColor}`,
          }}
        >
          <img
            src={iconInfo}
            alt="info"
            style={{
              width: 14,
              height: 14,
              filter: isLight ? 'brightness(0.3)' : 'brightness(0) invert(1)',
              opacity: 0.7,
            }}
          />
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: textPrimary,
              fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
            }}
          >
            图片详情
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: 16 }}>
          {/* 提示词区域 */}
          {layer.generationConfig?.prompt && (
            <div style={{ marginBottom: 16 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    color: textSecondary,
                    fontFamily: '"PingFang SC", -apple-system, sans-serif',
                  }}
                >
                  提示词
                </span>
                <button
                  onClick={handleCopyPrompt}
                  style={{
                    background: isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.08)',
                    border: 'none',
                    borderRadius: 4,
                    cursor: 'pointer',
                    padding: '4px 8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    transition: 'all 0.15s ease',
                  }}
                >
                  <img
                    src={iconCopy}
                    alt="复制"
                    style={{
                      width: 12,
                      height: 12,
                      filter: isLight ? 'brightness(0.3)' : 'brightness(0) invert(1)',
                      opacity: 0.65,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 11,
                      color: copied ? '#4CAF50' : textSecondary,
                      transition: 'color 0.15s ease',
                    }}
                  >
                    {copied ? '已复制' : '复制'}
                  </span>
                </button>
              </div>
              <div
                style={{
                  background: isLight ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 8,
                  padding: 12,
                  maxHeight: 100,
                  overflow: 'auto',
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: textPrimary,
                    margin: 0,
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                  }}
                >
                  {layer.generationConfig.prompt}
                </p>
              </div>
            </div>
          )}

          {/* 图片信息 - 网格布局 */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: 12,
            }}
          >
            <InfoCard
              label="名称"
              value={layer.name || '未命名'}
              isLight={isLight}
            />
            <InfoCard
              label="比例"
              value={layer.generationConfig?.aspectRatio || `${layer.width}:${layer.height}`}
              isLight={isLight}
            />
            <InfoCard
              label="分辨率"
              value={getResolutionLevel(layer.width, layer.height)}
              isLight={isLight}
            />
            <InfoCard
              label="尺寸"
              value={`${layer.width} × ${layer.height}`}
              isLight={isLight}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popIn {
          from {
            opacity: 0;
            transform: translateX(-50%) scale(0.95) translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  );
};

// 信息卡片组件
const InfoCard: React.FC<{ label: string; value: string; isLight: boolean }> = ({
  label,
  value,
  isLight,
}) => (
  <div
    style={{
      background: isLight ? 'rgba(0, 0, 0, 0.03)' : 'rgba(255, 255, 255, 0.05)',
      borderRadius: 6,
      padding: '8px 10px',
    }}
  >
    <div
      style={{
        fontSize: 11,
        color: isLight ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.45)',
        marginBottom: 2,
      }}
    >
      {label}
    </div>
    <div
      style={{
        fontSize: 13,
        color: isLight ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.9)',
        fontWeight: 500,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }}
    >
      {value}
    </div>
  </div>
);

export default DetailPanelPopover;
