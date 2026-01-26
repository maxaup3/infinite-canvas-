/**
 * 图标路径常量
 * 集中管理所有图标路径，避免重复定义
 */

export const ICONS = {
  // 操作图标
  remix: '/assets/icons/remix.svg',
  edit: '/assets/icons/edit.svg',
  download: '/assets/icons/download.svg',
  copy: '/assets/icons/copy.svg',
  delete: '/assets/icons/delete.svg',
  save: '/assets/icons/save.svg',
  upload: '/assets/icons/upload.svg',

  // 媒体图标
  image: '/assets/icons/image.svg',
  video: '/assets/icons/video.svg',
  play: '/assets/icons/play.svg',
  pause: '/assets/icons/pause.svg',

  // 生成相关
  keyframes: '/assets/icons/start_end_frames.svg',
  credits: '/assets/icons/credits.svg',
  magic: '/assets/icons/magic.svg',
  enhancePrompts: '/assets/icons/enhance_prompts.svg',

  // 工具图标
  model: '/assets/icons/model.svg',
  aspectRatio: '/assets/icons/aspect_ratio.svg',
  layers: '/assets/icons/layers.svg',
  random: '/assets/icons/random.svg',

  // UI 图标
  arrowDown: '/assets/icons/arrow_down.svg',
  arrowUp: '/assets/icons/arrow_up.svg',
  arrowLeft: '/assets/icons/arrow_left.svg',
  arrowRight: '/assets/icons/arrow_right.svg',
  close: '/assets/icons/close.svg',
  check: '/assets/icons/check.svg',
  info: '/assets/icons/info_circle.svg',

  // 面板图标
  fold: '/assets/icons/fold.svg',
  unfold: '/assets/icons/unfold.svg',
  expand: '/assets/icons/expand.svg',
  reduce: '/assets/icons/reduce.svg',

  // Logo
  sLogo: '/assets/icons/s_logo.svg',
  logo: '/assets/icons/logo.svg',
} as const;

export type IconName = keyof typeof ICONS;

export default ICONS;
