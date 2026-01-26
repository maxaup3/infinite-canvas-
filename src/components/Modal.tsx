/**
 * 自定义 Modal 组件
 * 替代 antd Modal，减少 ~900KB 包体积
 */
import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export interface ModalProps {
  open: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  okText?: string;
  cancelText?: string;
  onOk?: () => void | Promise<void>;
  onCancel?: () => void;
  okButtonProps?: {
    danger?: boolean;
    loading?: boolean;
    disabled?: boolean;
  };
  width?: number;
  centered?: boolean;
  closable?: boolean;
  maskClosable?: boolean;
  destroyOnClose?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  children,
  okText = '确定',
  cancelText = '取消',
  onOk,
  onCancel,
  okButtonProps = {},
  width = 416,
  centered = true,
  closable = true,
  maskClosable = true,
}) => {
  // Handle ESC key
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && onCancel) {
        onCancel();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onCancel]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleMaskClick = useCallback((e: React.MouseEvent) => {
    if (maskClosable && e.target === e.currentTarget && onCancel) {
      onCancel();
    }
  }, [maskClosable, onCancel]);

  if (!open) return null;

  const { danger = false, loading = false, disabled = false } = okButtonProps;

  const modalContent = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: centered ? 'center' : 'flex-start',
        justifyContent: 'center',
        padding: centered ? 0 : '100px 0',
        animation: 'modalFadeIn 0.2s ease',
      }}
      onClick={handleMaskClick}
    >
      {/* Backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.45)',
        }}
      />

      {/* Modal Box */}
      <div
        style={{
          position: 'relative',
          width,
          maxWidth: 'calc(100vw - 32px)',
          background: '#2a2a2e',
          borderRadius: 12,
          boxShadow: '0 6px 16px 0 rgba(0, 0, 0, 0.4), 0 3px 6px -4px rgba(0, 0, 0, 0.48)',
          animation: 'modalZoomIn 0.2s ease',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || closable) && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div
              style={{
                fontSize: 16,
                fontWeight: 600,
                color: '#FFFFFF',
                lineHeight: '24px',
              }}
            >
              {title}
            </div>
            {closable && (
              <button
                onClick={onCancel}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 24,
                  height: 24,
                  background: 'transparent',
                  border: 'none',
                  borderRadius: 4,
                  cursor: 'pointer',
                  color: 'rgba(255, 255, 255, 0.65)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.65)';
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1L13 13M13 1L1 13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div
          style={{
            padding: '16px 24px',
            color: 'rgba(255, 255, 255, 0.85)',
            fontSize: 14,
            lineHeight: '22px',
          }}
        >
          {children}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 8,
            padding: '12px 24px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <button
            onClick={onCancel}
            style={{
              padding: '6px 16px',
              height: 32,
              fontSize: 14,
              fontWeight: 400,
              color: 'rgba(255, 255, 255, 0.85)',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 6,
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.85)';
            }}
          >
            {cancelText}
          </button>
          <button
            onClick={onOk}
            disabled={disabled || loading}
            style={{
              padding: '6px 16px',
              height: 32,
              fontSize: 14,
              fontWeight: 400,
              color: '#FFFFFF',
              background: danger ? '#E53935' : '#1677ff',
              border: 'none',
              borderRadius: 6,
              cursor: disabled || loading ? 'not-allowed' : 'pointer',
              opacity: disabled || loading ? 0.5 : 1,
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              if (!disabled && !loading) {
                e.currentTarget.style.background = danger ? '#ff4d4f' : '#4096ff';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = danger ? '#E53935' : '#1677ff';
            }}
          >
            {loading ? '加载中...' : okText}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalZoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default React.memo(Modal);
