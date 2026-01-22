import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ImageToolbar from '../ImageToolbar';
import { ImageLayer } from '../../types';

// Mock 图标导入
vi.mock('../../assets/icons/icon/magic.svg?url', () => ({ default: 'magic.svg' }));
vi.mock('../../assets/icons/icon/edit.svg?url', () => ({ default: 'edit.svg' }));
vi.mock('../../assets/icons/icon/download.svg?url', () => ({ default: 'download.svg' }));
vi.mock('../../assets/icons/icon/info_circle.svg?url', () => ({ default: 'info_circle.svg' }));
vi.mock('../../assets/icons/icon/start_end_frames.svg?url', () => ({ default: 'start_end_frames.svg' }));
vi.mock('../../assets/icons/icon/image.svg?url', () => ({ default: 'image.svg' }));
vi.mock('../../assets/icons/icon/copy.svg?url', () => ({ default: 'copy.svg' }));
vi.mock('../../assets/icons/icon/album.svg?url', () => ({ default: 'album.svg' }));

describe('ImageToolbar', () => {
  const mockLayerPosition = { x: 100, y: 100, width: 200, height: 200 };
  const mockStagePos = { x: 0, y: 0 };
  const mockZoom = 100;

  const createMockImageLayer = (id: string): ImageLayer => ({
    id,
    name: `Layer ${id}`,
    type: 'image',
    url: 'test.jpg',
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    visible: true,
    locked: false,
    selected: false,
  });

  const createMockVideoLayer = (id: string): ImageLayer => ({
    id,
    name: `Video Layer ${id}`,
    type: 'video',
    url: 'test.mp4',
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    visible: true,
    locked: false,
    selected: false,
  });

  describe('单个图片选中 (图片*1)', () => {
    it('应该显示6个按钮：Re-run, Edit, Split, Details, Download, Fill', () => {
      const selectedLayers = [createMockImageLayer('1')];
      const mockHandlers = {
        onDownload: vi.fn(),
        onRemix: vi.fn(),
        onEdit: vi.fn(),
        
        onDetails: vi.fn(),
        onFillToDialog: vi.fn(),
      };

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          {...mockHandlers}
        />
      );

      expect(screen.getByTitle('重新生成')).toBeInTheDocument();
      expect(screen.getByTitle('编辑')).toBeInTheDocument();
      expect(screen.getByTitle('分层')).toBeInTheDocument();
      expect(screen.getByTitle('详情')).toBeInTheDocument();
      expect(screen.getByTitle('下载')).toBeInTheDocument();
      expect(screen.getByTitle('填入对话框 (Cmd+左键快速填入)')).toBeInTheDocument();
    });

    it('点击按钮应该触发对应的回调函数', async () => {
      const user = userEvent.setup();
      const selectedLayers = [createMockImageLayer('1')];
      const mockHandlers = {
        onDownload: vi.fn(),
        onRemix: vi.fn(),
        onEdit: vi.fn(),
        
        onDetails: vi.fn(),
        onFillToDialog: vi.fn(),
      };

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          {...mockHandlers}
        />
      );

      await user.click(screen.getByTitle('重新生成'));
      expect(mockHandlers.onRemix).toHaveBeenCalledTimes(1);

      await user.click(screen.getByTitle('编辑'));
      expect(mockHandlers.onEdit).toHaveBeenCalledTimes(1);

      await user.click(screen.getByTitle('下载'));
      expect(mockHandlers.onDownload).toHaveBeenCalledTimes(1);
    });
  });

  describe('单个视频选中 (视频*1)', () => {
    it('应该显示3个按钮：Re-run, Details, Download', () => {
      const selectedLayers = [createMockVideoLayer('1')];
      const mockHandlers = {
        onDownload: vi.fn(),
        onRemix: vi.fn(),
        onDetails: vi.fn(),
      };

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          {...mockHandlers}
        />
      );

      expect(screen.getByTitle('重新生成')).toBeInTheDocument();
      expect(screen.getByTitle('详情')).toBeInTheDocument();
      expect(screen.getByTitle('下载')).toBeInTheDocument();

      // 不应该有这些按钮
      expect(screen.queryByTitle('编辑')).not.toBeInTheDocument();
      expect(screen.queryByTitle('分层')).not.toBeInTheDocument();
    });
  });

  describe('2张图片选中 (图片*2)', () => {
    it('应该显示5个按钮：Keyframes, Image Gen, Merge, Merge DL, Batch DL', () => {
      const selectedLayers = [createMockImageLayer('1'), createMockImageLayer('2')];
      const mockHandlers = {
        onDownload: vi.fn(),
        onFillToKeyframes: vi.fn(),
        onFillToImageGen: vi.fn(),
        onMergeLayers: vi.fn(),
        onMergeDownload: vi.fn(),
        onBatchDownload: vi.fn(),
      };

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          {...mockHandlers}
        />
      );

      expect(screen.getByTitle('填入首尾帧')).toBeInTheDocument();
      expect(screen.getByTitle('填入图像生成')).toBeInTheDocument();
      expect(screen.getByTitle('合并图层')).toBeInTheDocument();
      expect(screen.getByTitle('合并下载')).toBeInTheDocument();
      expect(screen.getByTitle('批量下载')).toBeInTheDocument();
    });
  });

  describe('3张及以上图片选中 (图片*>2)', () => {
    it('应该显示3个按钮：Merge, Merge DL, Batch DL', () => {
      const selectedLayers = [
        createMockImageLayer('1'),
        createMockImageLayer('2'),
        createMockImageLayer('3'),
      ];
      const mockHandlers = {
        onDownload: vi.fn(),
        onMergeLayers: vi.fn(),
        onMergeDownload: vi.fn(),
        onBatchDownload: vi.fn(),
      };

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          {...mockHandlers}
        />
      );

      expect(screen.getByTitle('合并图层')).toBeInTheDocument();
      expect(screen.getByTitle('合并下载')).toBeInTheDocument();
      expect(screen.getByTitle('批量下载')).toBeInTheDocument();

      // 不应该有这些按钮
      expect(screen.queryByTitle('填入首尾帧')).not.toBeInTheDocument();
      expect(screen.queryByTitle('填入图像生成')).not.toBeInTheDocument();
    });
  });

  describe('多个视频选中 (视频*>1)', () => {
    it('应该只显示1个按钮：Batch DL', () => {
      const selectedLayers = [createMockVideoLayer('1'), createMockVideoLayer('2')];
      const mockHandlers = {
        onDownload: vi.fn(),
        onBatchDownload: vi.fn(),
      };

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          {...mockHandlers}
        />
      );

      expect(screen.getByTitle('批量下载')).toBeInTheDocument();

      // 不应该有其他按钮
      expect(screen.queryByTitle('重新生成')).not.toBeInTheDocument();
      expect(screen.queryByTitle('详情')).not.toBeInTheDocument();
    });
  });

  describe('工具栏位置', () => {
    it('应该根据 layerPosition 和 zoom 计算正确的位置', () => {
      const selectedLayers = [createMockImageLayer('1')];
      const layerPosition = { x: 100, y: 200, width: 300, height: 400 };
      const stagePos = { x: 50, y: 60 };
      const zoom = 150;

      const { container } = render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={layerPosition}
          stagePos={stagePos}
          zoom={zoom}
          onDownload={vi.fn()}
        />
      );

      const toolbar = container.firstChild as HTMLElement;

      // 计算预期位置
      // screenX = layerPosition.x * (zoom / 100) + stagePos.x = 100 * 1.5 + 50 = 200
      // screenWidth = layerPosition.width * (zoom / 100) = 300 * 1.5 = 450
      // toolbarX = screenX + screenWidth / 2 = 200 + 225 = 425
      // toolbarY = screenY + 40 = (200 * 1.5 + 60) + 40 = 360 + 40 = 400

      expect(toolbar.style.left).toBe('425px');
      expect(toolbar.style.top).toBe('400px');
    });
  });

  describe('边界情况', () => {
    it('当 selectedLayers 为空数组时，不应该渲染任何内容', () => {
      const { container } = render(
        <ImageToolbar
          selectedLayers={[]}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
        />
      );

      expect(container.firstChild).toBeNull();
    });

    it('当 layerPosition 为 null 时，不应该渲染任何内容', () => {
      const selectedLayers = [createMockImageLayer('1')];
      const { container } = render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={null}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
        />
      );

      expect(container.firstChild).toBeNull();
    });
  });

  describe('图标样式', () => {
    it('所有图标应该应用正确的 filter 和 opacity 样式', () => {
      const selectedLayers = [createMockImageLayer('1')];

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
          onRemix={vi.fn()}
          onEdit={vi.fn()}
          onFillToDialog={vi.fn()}
        />
      );

      const icons = screen.getAllByRole('img');
      icons.forEach(icon => {
        expect(icon).toHaveStyle({
          filter: 'brightness(0) invert(1)',
          opacity: '0.85',
        });
      });
    });
  });
});
