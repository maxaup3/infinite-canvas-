import React from 'react';
import { ImageLayer } from '../types';
import { useTheme, getThemeStyles, isLightTheme } from '../contexts/ThemeContext';
import iconCopy from '../assets/icons/copy.svg?url';
import { getResolutionLevel } from '../utils/imageUtils';

/**
 * 方案1: Floating Tooltip 样式
 * - 轻量级悬浮卡片，显示在图片附近
 * - 类似工具栏的即时tooltip风格
 * - 简洁紧凑，只显示关键信息
 */
interface DetailPanelTooltipProps {
  layer: ImageLayer;
  position: { x: number; y: number; width: number; height: number };
  stagePos: { x: number; y: number };
  zoom: number;
  onClose: () => void;
}

const DetailPanelTooltip: React.FC<DetailPanelTooltipProps> = ({
  layer,
  position,
  stagePos,
  zoom,
  onClose,
}) => {
  const { themeStyle } = useTheme();
  const isLight = isLightTheme(themeStyle);

  // 计算屏幕位置
  const canvasTopOffset = 60;
  const scale = zoom / 100;
  const screenX = position.x * scale + stagePos.x;
  const screenY = position.y * scale + stagePos.y + canvasTopOffset;
  const screenWidth = position.width * scale;
  const screenHeight = position.height * scale;

  // tooltip 显示在图片右侧
  const tooltipLeft = screenX + screenWidth + 12;
  const tooltipTop = screenY;

  // 复制提示词
  const handleCopyPrompt = () => {
    if (layer.generationConfig?.prompt) {
      navigator.clipboard.writeText(layer.generationConfig.prompt);
    }
  };

  // 亮色/深色模式颜色
  const bgColor = isLight ? 'rgba(255, 255, 255, 0.98)' : '#181818';
  const textPrimary = isLight ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.9)';
  const textSecondary = isLight ? 'rgba(0, 0, 0, 0.45)' : 'rgba(255, 255, 255, 0.45)';
  const borderColor = isLight ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
  const buttonBg = isLight ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.08)';

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

      {/* Tooltip 卡片 */}
      <div
        style={{
          position: 'fixed',
          left: tooltipLeft,
          top: tooltipTop,
          backgroundColor: bgColor,
          borderRadius: 8,
          padding: 16,
          minWidth: 280,
          maxWidth: 360,
          boxShadow: isLight
            ? '0 4px 20px rgba(0, 0, 0, 0.15)'
            : '0 4px 20px rgba(0, 0, 0, 0.4)',
          border: isLight ? '1px solid rgba(0, 0, 0, 0.08)' : 'none',
          zIndex: 999,
          animation: 'fadeIn 0.15s ease',
        }}
      >
        {/* 左侧小箭头 */}
        <div
          style={{
            position: 'absolute',
            left: -6,
            top: 16,
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderRight: `6px solid ${bgColor}`,
          }}
        />

        {/* 提示词区域 */}
        {layer.generationConfig?.prompt && (
          <div style={{ marginBottom: 12 }}>
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
                  fontSize: 11,
                  color: textSecondary,
                  fontFamily: '"PingFang SC", -apple-system, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                提示词
              </span>
              <button
                onClick={handleCopyPrompt}
                style={{
                  background: buttonBg,
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer',
                  padding: '3px 6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
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
                    color: textSecondary,
                  }}
                >
                  复制
                </span>
              </button>
            </div>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.5,
                color: textPrimary,
                margin: 0,
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
                maxHeight: 120,
                overflow: 'auto',
              }}
            >
              {layer.generationConfig.prompt}
            </p>
          </div>
        )}

        {/* 分隔线 */}
        {layer.generationConfig?.prompt && (
          <div
            style={{
              height: 1,
              background: borderColor,
              margin: '12px 0',
            }}
          />
        )}

        {/* 图片信息 - 横向排列 */}
        <div
          style={{
            display: 'flex',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <InfoItem
            label="图片"
            value={layer.name || layer.id.slice(0, 6)}
            isLight={isLight}
          />
          <InfoItem
            label="比例"
            value={layer.generationConfig?.aspectRatio || `${layer.width}:${layer.height}`}
            isLight={isLight}
          />
          <InfoItem
            label="分辨率"
            value={getResolutionLevel(layer.width, layer.height)}
            isLight={isLight}
          />
          <InfoItem
            label="尺寸"
            value={`${layer.width} × ${layer.height}`}
            isLight={isLight}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-4px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
};

// 信息项组件
const InfoItem: React.FC<{ label: string; value: string; isLight: boolean }> = ({ label, value, isLight }) => (
  <div>
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
        color: isLight ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.85)',
      }}
    >
      {value}
    </div>
  </div>
);

export default DetailPanelTooltip;
