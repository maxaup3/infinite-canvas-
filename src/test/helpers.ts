import { ImageLayer, Comment, GenerationConfig, GenerationTask } from '../types';

/**
 * 测试辅助函数
 */

// 创建模拟的 ImageLayer
export const createMockImageLayer = (overrides?: Partial<ImageLayer>): ImageLayer => ({
  id: `layer-${Date.now()}-${Math.random()}`,
  name: 'Test Layer',
  url: 'https://picsum.photos/200/150',
  type: 'image',
  x: 100,
  y: 100,
  width: 200,
  height: 150,
  visible: true,
  locked: false,
  selected: false,
  ...overrides,
});

// 创建模拟的 VideoLayer
export const createMockVideoLayer = (overrides?: Partial<ImageLayer>): ImageLayer => ({
  id: `layer-${Date.now()}-${Math.random()}`,
  name: 'Test Video',
  url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  type: 'video',
  x: 100,
  y: 100,
  width: 200,
  height: 150,
  visible: true,
  locked: false,
  selected: false,
  ...overrides,
});

// 创建模拟的 Comment
export const createMockComment = (layerId: string, overrides?: Partial<Comment>): Comment => ({
  id: `comment-${Date.now()}-${Math.random()}`,
  layerId,
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  text: 'Test Comment',
  createdAt: new Date().toISOString(),
  isEditing: false,
  ...overrides,
});

// 创建模拟的 GenerationConfig (图像模式)
export const createMockImageConfig = (overrides?: Partial<GenerationConfig>): GenerationConfig => ({
  mode: 'image',
  model: 'z-image',
  aspectRatio: '16:9',
  count: 1,
  prompt: 'Test prompt',
  enhancePrompt: true,
  loraWeight: 0.8,
  referenceImages: [],
  ...overrides,
});

// 创建模拟的 GenerationConfig (视频模式 - 图生视频)
export const createMockVideoConfigI2V = (overrides?: Partial<GenerationConfig>): GenerationConfig => ({
  mode: 'video',
  model: 'ltx-2',
  aspectRatio: '16:9',
  count: 1,
  prompt: 'Test video prompt',
  enhancePrompt: true,
  loraWeight: 0.8,
  videoCapability: 'image-to-video',
  videoDuration: 5,
  videoQuality: 'fast',
  videoSound: true,
  videoResolution: '720p',
  videoStartFrame: undefined,
  videoEndFrame: undefined,
  ...overrides,
});

// 创建模拟的 GenerationConfig (视频模式 - 首尾帧)
export const createMockVideoConfigFirstLast = (overrides?: Partial<GenerationConfig>): GenerationConfig => ({
  mode: 'video',
  model: 'ltx-2',
  aspectRatio: '16:9',
  count: 1,
  prompt: 'Test video prompt',
  enhancePrompt: true,
  loraWeight: 0.8,
  videoCapability: 'first-last-frame',
  videoDuration: 5,
  videoQuality: 'fast',
  videoSound: true,
  videoResolution: '720p',
  videoStartFrame: undefined,
  videoEndFrame: undefined,
  ...overrides,
});

// 创建模拟的 GenerationTask
export const createMockGenerationTask = (overrides?: Partial<GenerationTask>): GenerationTask => ({
  id: `task-${Date.now()}-${Math.random()}`,
  config: createMockImageConfig(),
  progress: 0,
  status: 'generating',
  position: { x: 200, y: 200 },
  width: 512,
  height: 512,
  createdAt: new Date().toISOString(),
  ...overrides,
});

/**
 * 坐标系统辅助函数
 */

// 计算屏幕坐标到画布坐标的转换
export const screenToCanvas = (
  screenPos: { x: number; y: number },
  stagePos: { x: number; y: number },
  zoom: number
): { x: number; y: number } => {
  const scale = zoom / 100;
  return {
    x: (screenPos.x - stagePos.x) / scale,
    y: (screenPos.y - stagePos.y) / scale,
  };
};

// 计算画布坐标到屏幕坐标的转换
export const canvasToScreen = (
  canvasPos: { x: number; y: number },
  stagePos: { x: number; y: number },
  zoom: number
): { x: number; y: number } => {
  const scale = zoom / 100;
  return {
    x: canvasPos.x * scale + stagePos.x,
    y: canvasPos.y * scale + stagePos.y,
  };
};

// 计算图层的实际显示宽度（基于宽高比）
export const calculateDisplayWidth = (layer: ImageLayer, imageAspectRatio?: number): number => {
  if (imageAspectRatio) {
    return layer.height * imageAspectRatio;
  }
  return layer.width;
};

// 验证生成位置是否在选中图层右侧20px
export const verifyPositionRightOfLayer = (
  position: { x: number; y: number },
  layer: ImageLayer,
  tolerance: number = 1
): boolean => {
  const expectedX = layer.x + layer.width + 20;
  const expectedY = layer.y;

  return (
    Math.abs(position.x - expectedX) <= tolerance &&
    Math.abs(position.y - expectedY) <= tolerance
  );
};

/**
 * 等待辅助函数
 */

// 等待特定时间
export const wait = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// 等待条件满足
export const waitForCondition = async (
  condition: () => boolean,
  timeout: number = 5000,
  interval: number = 100
): Promise<void> => {
  const startTime = Date.now();
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error('Timeout waiting for condition');
    }
    await wait(interval);
  }
};

/**
 * 验证辅助函数
 */

// 验证错误消息是否显示
export const verifyErrorMessage = (container: HTMLElement, expectedMessage: string): boolean => {
  const errorElements = container.querySelectorAll('[style*="rgba(255, 150, 150"]');
  return Array.from(errorElements).some(el => el.textContent?.includes(expectedMessage));
};

// 验证参考图片数量
export const countReferenceImages = (container: HTMLElement): number => {
  // 查找参考图片缩略图元素
  const thumbnails = container.querySelectorAll('img[alt^="Reference"]');
  return thumbnails.length;
};
