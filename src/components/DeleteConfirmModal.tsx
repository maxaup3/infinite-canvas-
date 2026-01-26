import React, { CSSProperties } from 'react';
import { Modal, ConfigProvider } from 'antd';

export interface DeleteConfirmModalProps {
  visible: boolean;
  title?: string;
  content?: React.ReactNode;
  onOk?: () => void | Promise<void>;
  onCancel?: () => void;
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  visible,
  title = '删除项目',
  content,
  onOk,
  onCancel,
}) => {
  const modalStyle: CSSProperties = {
    backgroundColor: '#2a2a2e',
  };

  // 自定义title，包含icon
  const titleWithIcon = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 6H5H21" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 11V17" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 11V17" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>{title}</span>
    </div>
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgElevated: '#2a2a2e',
          colorText: 'rgba(255, 255, 255, 0.85)',
          colorTextHeading: '#FFFFFF',
          colorBorder: 'rgba(255, 255, 255, 0.1)',
          colorIcon: 'rgba(255, 255, 255, 0.85)',
          colorIconHover: '#FFFFFF',
        },
        components: {
          Modal: {
            contentBg: '#2a2a2e',
            headerBg: '#2a2a2e',
            titleFontSize: 16,
            borderRadiusLG: 12,
            colorTextHeading: '#FFFFFF',
            colorIconHover: 'rgba(255, 255, 255, 0.85)',
          },
          Button: {
            defaultBorderColor: 'rgba(255, 255, 255, 0.2)',
            defaultColor: 'rgba(255, 255, 255, 0.85)',
            defaultBg: 'transparent',
          },
        },
      }}
    >
      <Modal
        open={visible}
        title={titleWithIcon}
        okText="删除"
        cancelText="取消"
        okButtonProps={{ danger: true }}
        cancelButtonProps={{
          style: {
            color: 'rgba(255, 255, 255, 0.85)',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            backgroundColor: 'transparent'
          }
        }}
        onOk={onOk}
        onCancel={onCancel}
        centered
        destroyOnHidden
        style={modalStyle}
      >
        {content}
      </Modal>
    </ConfigProvider>
  );
};

export default React.memo(DeleteConfirmModal);
