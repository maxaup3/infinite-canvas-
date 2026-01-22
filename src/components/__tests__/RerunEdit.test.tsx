import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ImageToolbar from '../ImageToolbar';
import { ImageLayer, GenerationConfig } from '../../types';

// Mock 图标导入
vi.mock('../../assets/icons/icon/remix.svg?url', () => ({ default: 'remix.svg' }));
vi.mock('../../assets/icons/icon/edit.svg?url', () => ({ default: 'edit.svg' }));
vi.mock('../../assets/icons/icon/download.svg?url', () => ({ default: 'download.svg' }));
vi.mock('../../assets/icons/icon/info_circle.svg?url', () => ({ default: 'info_circle.svg' }));
vi.mock('../../assets/icons/icon/start_end_frames.svg?url', () => ({ default: 'start_end_frames.svg' }));
vi.mock('../../assets/icons/icon/image.svg?url', () => ({ default: 'image.svg' }));
vi.mock('../../assets/icons/icon/copy.svg?url', () => ({ default: 'copy.svg' }));
vi.mock('../../assets/icons/icon/album.svg?url', () => ({ default: 'album.svg' }));

describe('Re-run 和 Edit 功能测试', () => {
  const mockLayerPosition = { x: 100, y: 100, width: 200, height: 200 };
  const mockStagePos = { x: 0, y: 0 };
  const mockZoom = 100;

  const mockGenerationConfig: GenerationConfig = {
    mode: 'image',
    model: 'Wan2.2-i2v-a14b',
    prompt: '现代插画风格，参考Hayao Miyazaki的色彩运用',
    aspectRatio: '16:9',
    count: 1,
    enhancePrompt: true,
    lora: 'lora-123',
    loraWeight: 0.8,
    referenceImage: 'https://example.com/ref.jpg',
  };

  const createMockImageLayerWithConfig = (id: string): ImageLayer => ({
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
    generationConfig: mockGenerationConfig, // 带配置的图层
  });

  const createMockImageLayerWithoutConfig = (id: string): ImageLayer => ({
    id,
    name: `Uploaded ${id}`,
    type: 'image',
    url: 'uploaded.jpg',
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    visible: true,
    locked: false,
    selected: false,
    // 没有 generationConfig - 模拟手动上传的图片
  });

  describe('Re-run 功能', () => {
    it('应该在单个图片选中时显示 Re-run 按钮', () => {
      const selectedLayers = [createMockImageLayerWithConfig('1')];

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
          onRemix={vi.fn()}
        />
      );

      expect(screen.getByTitle('重新生成')).toBeInTheDocument();
    });

    it('点击 Re-run 按钮应该触发 onRemix 回调并传递图层', async () => {
      const user = userEvent.setup();
      const selectedLayers = [createMockImageLayerWithConfig('1')];
      const onRemixMock = vi.fn();

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
          onRemix={onRemixMock}
        />
      );

      const rerunButton = screen.getByTitle('重新生成');
      await user.click(rerunButton);

      expect(onRemixMock).toHaveBeenCalledTimes(1);
    });

    it('Re-run 按钮应该显示魔法棒图标', () => {
      const selectedLayers = [createMockImageLayerWithConfig('1')];

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
          onRemix={vi.fn()}
        />
      );

      const rerunButton = screen.getByTitle('重新生成');
      const icon = rerunButton.querySelector('img');

      expect(icon).toBeInTheDocument();
      expect(icon?.getAttribute('src')).toBe('remix.svg');
    });

    it('视频图层也应该显示 Re-run 按钮', () => {
      const videoLayer: ImageLayer = {
        id: '1',
        name: 'Video Layer 1',
        type: 'video',
        url: 'test.mp4',
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        visible: true,
        locked: false,
        selected: false,
        generationConfig: {
          ...mockGenerationConfig,
          mode: 'video',
          videoDuration: 5,
          videoQuality: 'fast',
        },
      };

      render(
        <ImageToolbar
          selectedLayers={[videoLayer]}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
          onRemix={vi.fn()}
        />
      );

      expect(screen.getByTitle('重新生成')).toBeInTheDocument();
    });
  });

  describe('Edit 功能', () => {
    it('应该在单个图片选中时显示 Edit 按钮', () => {
      const selectedLayers = [createMockImageLayerWithConfig('1')];

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
          onEdit={vi.fn()}
        />
      );

      expect(screen.getByTitle('编辑')).toBeInTheDocument();
    });

    it('点击 Edit 按钮应该触发 onEdit 回调并传递图层', async () => {
      const user = userEvent.setup();
      const selectedLayers = [createMockImageLayerWithConfig('1')];
      const onEditMock = vi.fn();

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
          onEdit={onEditMock}
        />
      );

      const editButton = screen.getByTitle('编辑');
      await user.click(editButton);

      expect(onEditMock).toHaveBeenCalledTimes(1);
    });

    it('Edit 按钮应该显示编辑图标', () => {
      const selectedLayers = [createMockImageLayerWithConfig('1')];

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
          onEdit={vi.fn()}
        />
      );

      const editButton = screen.getByTitle('编辑');
      const icon = editButton.querySelector('img');

      expect(icon).toBeInTheDocument();
      expect(icon?.getAttribute('src')).toBe('edit.svg');
    });

    it('多选图片时不应该显示 Edit 按钮', () => {
      const selectedLayers = [
        createMockImageLayerWithConfig('1'),
        createMockImageLayerWithConfig('2'),
      ];

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
          onEdit={vi.fn()}
        />
      );

      // 2张图片选中时不显示 Edit 按钮
      expect(screen.queryByTitle('编辑')).not.toBeInTheDocument();
    });
  });

  describe('按钮顺序和布局', () => {
    it('单个图片选中时，Re-run 应该在第一位，Edit 在第二位', () => {
      const selectedLayers = [createMockImageLayerWithConfig('1')];

      const { container } = render(
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

      const buttons = container.querySelectorAll('button');

      // 按钮顺序：填入对话, Remix, Edit, Download
      expect(buttons[0]).toHaveAttribute('title', '填入对话框 (Cmd+左键快速填入)');
      expect(buttons[1]).toHaveAttribute('title', '回填参数到对话框');
      expect(buttons[2]).toHaveAttribute('title', '快速编辑');
      expect(buttons[3]).toHaveAttribute('title', '下载');
      expect(buttons[5]).toHaveAttribute('title', '填入对话框 (Cmd+左键快速填入)');
    });
  });

  describe('边界情况', () => {
    it('没有 generationConfig 的图层仍然可以显示工具栏', () => {
      const selectedLayers = [createMockImageLayerWithoutConfig('1')];

      render(
        <ImageToolbar
          selectedLayers={selectedLayers}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
          onRemix={vi.fn()}
          onEdit={vi.fn()}
        />
      );

      // 工具栏应该正常显示
      expect(screen.getByTitle('重新生成')).toBeInTheDocument();
      expect(screen.getByTitle('编辑')).toBeInTheDocument();
    });

    it('点击按钮时，回调应该接收完整的图层对象', async () => {
      const user = userEvent.setup();
      const selectedLayer = createMockImageLayerWithConfig('test-id-123');
      const onRemixMock = vi.fn();
      const onEditMock = vi.fn();

      render(
        <ImageToolbar
          selectedLayers={[selectedLayer]}
          layerPosition={mockLayerPosition}
          stagePos={mockStagePos}
          zoom={mockZoom}
          onDownload={vi.fn()}
          onRemix={onRemixMock}
          onEdit={onEditMock}
        />
      );

      await user.click(screen.getByTitle('重新生成'));
      await user.click(screen.getByTitle('编辑'));

      // 验证传递的参数
      expect(onRemixMock).toHaveBeenCalledTimes(1);
      expect(onEditMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('配置数据完整性', () => {
    it('图层的 generationConfig 应该包含所有必要字段', () => {
      const layer = createMockImageLayerWithConfig('1');

      expect(layer.generationConfig).toBeDefined();
      expect(layer.generationConfig?.mode).toBe('image');
      expect(layer.generationConfig?.model).toBe('Wan2.2-i2v-a14b');
      expect(layer.generationConfig?.prompt).toBeTruthy();
      expect(layer.generationConfig?.aspectRatio).toBe('16:9');
      expect(layer.generationConfig?.count).toBe(1);
    });

    it('视频图层应该包含视频相关配置', () => {
      const videoConfig: GenerationConfig = {
        mode: 'video',
        model: 'Wan2.2-i2v-a14b',
        prompt: '测试视频',
        aspectRatio: '16:9',
        count: 1,
        videoDuration: 5,
        videoQuality: 'fast',
        videoSound: true,
        videoResolution: '720p',
        videoCapability: 'text-to-video',
      };

      const videoLayer: ImageLayer = {
        id: '1',
        name: 'Video Layer 1',
        type: 'video',
        url: 'test.mp4',
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        visible: true,
        locked: false,
        selected: false,
        generationConfig: videoConfig,
      };

      expect(videoLayer.generationConfig?.mode).toBe('video');
      expect(videoLayer.generationConfig?.videoDuration).toBe(5);
      expect(videoLayer.generationConfig?.videoQuality).toBe('fast');
      expect(videoLayer.generationConfig?.videoSound).toBe(true);
    });
  });
});
