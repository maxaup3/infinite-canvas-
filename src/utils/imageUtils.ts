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

/**
 * 计算图片的宽高比
 * @param width 图片宽度
 * @param height 图片高度
 * @returns 宽高比字符串，如 "16:9" 或 "1024:768"
 */
export const getAspectRatio = (width: number, height: number): string => {
  // 计算最大公约数
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  const divisor = gcd(width, height);
  const aspectWidth = width / divisor;
  const aspectHeight = height / divisor;

  // 如果简化后的比例数字太大，直接返回原始尺寸
  if (aspectWidth > 100 || aspectHeight > 100) {
    return `${width}:${height}`;
  }

  return `${aspectWidth}:${aspectHeight}`;
};
