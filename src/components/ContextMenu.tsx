import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useThemedStyles } from '../hooks/useThemedStyles';

export interface ContextMenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  disabled?: boolean;
  danger?: boolean;
  onClick: () => void;
}

export interface ContextMenuDivider {
  type: 'divider';
}

export type ContextMenuEntry = ContextMenuItem | ContextMenuDivider;

interface ContextMenuProps {
  x: number;
  y: number;
  items: ContextMenuEntry[];
  onClose: () => void;
}

/**
 * 原生风格右键菜单
 * 设计参考 macOS 和 Figma 的菜单样式
 */
const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, items, onClose }) => {
  const { isLight } = useThemedStyles();
  const menuRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    // 使用捕获阶段，确保在任何元素的事件处理前都能捕获
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside, true);
      document.addEventListener('keydown', handleEscape, true);
    }, 0);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside, true);
      document.removeEventListener('keydown', handleEscape, true);
    };
  }, [onClose]);

  // 调整菜单位置，确保不超出视口
  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let adjustedX = x;
      let adjustedY = y;

      // 右边超出
      if (x + rect.width > viewportWidth - 8) {
        adjustedX = viewportWidth - rect.width - 8;
      }

      // 下边超出
      if (y + rect.height > viewportHeight - 8) {
        adjustedY = viewportHeight - rect.height - 8;
      }

      if (adjustedX !== x || adjustedY !== y) {
        menuRef.current.style.left = `${adjustedX}px`;
        menuRef.current.style.top = `${adjustedY}px`;
      }
    }
  }, [x, y]);

  const menuContent = (
    <div
      ref={menuRef}
      style={{
        position: 'fixed',
        left: x,
        top: y,
        minWidth: 200,
        maxWidth: 280,
        background: isLight
          ? 'rgba(255, 255, 255, 0.95)'
          : 'rgba(40, 40, 40, 0.95)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        borderRadius: 10,
        boxShadow: isLight
          ? '0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 10px 40px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.1)'
          : '0 0 0 0.5px rgba(255, 255, 255, 0.08), 0 10px 40px rgba(0, 0, 0, 0.5), 0 2px 10px rgba(0, 0, 0, 0.3)',
        padding: '5px 0',
        zIndex: 10000,
        overflow: 'hidden',
        animation: 'contextMenuFadeIn 0.12s ease-out',
      }}
    >
      <style>
        {`
          @keyframes contextMenuFadeIn {
            from {
              opacity: 0;
              transform: scale(0.95);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
      {items.map((item, index) => {
        if ('type' in item && item.type === 'divider') {
          return (
            <div
              key={`divider-${index}`}
              style={{
                height: 1,
                background: isLight
                  ? 'rgba(0, 0, 0, 0.08)'
                  : 'rgba(255, 255, 255, 0.08)',
                margin: '5px 0',
              }}
            />
          );
        }

        const menuItem = item as ContextMenuItem;
        return (
          <button
            key={menuItem.id}
            onClick={() => {
              if (!menuItem.disabled) {
                menuItem.onClick();
                onClose();
              }
            }}
            disabled={menuItem.disabled}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: 'calc(100% - 10px)',
              padding: '8px 12px',
              margin: '0 5px',
              background: 'transparent',
              border: 'none',
              borderRadius: 6,
              cursor: menuItem.disabled ? 'default' : 'pointer',
              transition: 'background 0.1s ease',
              opacity: menuItem.disabled ? 0.4 : 1,
            }}
            onMouseEnter={(e) => {
              if (!menuItem.disabled) {
                e.currentTarget.style.background = isLight
                  ? 'rgba(59, 130, 246, 0.9)'
                  : 'rgba(59, 130, 246, 0.85)';
                // 改变文字颜色
                const textEl = e.currentTarget.querySelector('[data-text]') as HTMLElement;
                const shortcutEl = e.currentTarget.querySelector('[data-shortcut]') as HTMLElement;
                if (textEl) textEl.style.color = '#fff';
                if (shortcutEl) shortcutEl.style.color = 'rgba(255, 255, 255, 0.7)';
                // 改变图标颜色
                const iconEl = e.currentTarget.querySelector('[data-icon]') as HTMLElement;
                if (iconEl) iconEl.style.filter = 'brightness(0) invert(1)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              // 恢复文字颜色
              const textEl = e.currentTarget.querySelector('[data-text]') as HTMLElement;
              const shortcutEl = e.currentTarget.querySelector('[data-shortcut]') as HTMLElement;
              if (textEl) {
                textEl.style.color = menuItem.danger
                  ? '#ef4444'
                  : (isLight ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.9)');
              }
              if (shortcutEl) {
                shortcutEl.style.color = isLight ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)';
              }
              // 恢复图标颜色
              const iconEl = e.currentTarget.querySelector('[data-icon]') as HTMLElement;
              if (iconEl) {
                iconEl.style.filter = isLight ? 'brightness(0.4)' : 'brightness(0) invert(1) opacity(0.85)';
              }
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              {menuItem.icon && (
                <span
                  data-icon
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 18,
                    height: 18,
                    filter: isLight ? 'brightness(0.4)' : 'brightness(0) invert(1) opacity(0.85)',
                    transition: 'filter 0.1s ease',
                  }}
                >
                  {menuItem.icon}
                </span>
              )}
              <span
                data-text
                style={{
                  fontSize: 13,
                  fontWeight: 400,
                  color: menuItem.danger
                    ? '#ef4444'
                    : (isLight ? 'rgba(0, 0, 0, 0.85)' : 'rgba(255, 255, 255, 0.9)'),
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.1s ease',
                }}
              >
                {menuItem.label}
              </span>
            </div>
            {menuItem.shortcut && (
              <span
                data-shortcut
                style={{
                  fontSize: 12,
                  color: isLight ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.4)',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
                  marginLeft: 20,
                  transition: 'color 0.1s ease',
                }}
              >
                {menuItem.shortcut}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );

  return createPortal(menuContent, document.body);
};

export default React.memo(ContextMenu);
