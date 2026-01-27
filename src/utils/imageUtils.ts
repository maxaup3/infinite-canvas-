/**
 * 根据图片像素数量计算分辨率等级
 * @param width 图片宽度
 * @param height 图片高度
 * @returns 分辨率等级 ('4K' | '2K' | 'HD' | 'SD')
 */
export const getResolutionLevel = (width: number, height: number): '4K' | '2K' | 'HD' | 'SD' => {
  const pixels = width * height;
  if (pixels >= 3840 * 2160) return '4K';
  if (pixels >= 2560 * 1440) return '2K';
  if (pixels >= 1920 * 1080) return 'HD';
  return 'SD';
};
