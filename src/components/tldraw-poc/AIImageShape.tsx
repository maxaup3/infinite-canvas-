/**
 * AI 图片形状 - 自定义 tldraw ShapeUtil
 * 用于在无限画布上展示 AI 生成的图片和视频
 */
import { useRef, useEffect } from 'react'
import {
  ShapeUtil,
  TLBaseShape,
  HTMLContainer,
  Rectangle2d,
  Geometry2d,
} from 'tldraw'

// 定义 AI 图片形状的属性
export type AIImageShape = TLBaseShape<
  'ai-image',
  {
    w: number
    h: number
    url: string
    prompt?: string
    model?: string
    generatedAt?: number
    isVideo?: boolean
    generationConfig?: string  // JSON 序列化的配置字符串
  }
>

// 全局视频元素存储，用于外部访问（如 VideoControls）
export const videoElementsMap = new Map<string, HTMLVideoElement>()

// AI 图片形状的工具类
export class AIImageShapeUtil extends ShapeUtil<any> {
  static override type = 'ai-image' as const

  // 默认属性
  getDefaultProps() {
    return {
      w: 512,
      h: 512,
      url: '',
      prompt: '',
      model: '',
      generatedAt: Date.now(),
      isVideo: false,
      generationConfig: '',
    }
  }

  // 几何信息
  getGeometry(shape: AIImageShape): Geometry2d {
    return new Rectangle2d({
      width: shape.props.w,
      height: shape.props.h,
      isFilled: true,
    })
  }

  // 是否可以缩放
  override canResize = () => true

  // 禁止旋转
  override hideRotateHandle = () => true

  // 缩放处理
  override onResize = (shape: AIImageShape, info: any) => {
    return {
      props: {
        w: Math.max(50, shape.props.w * info.scaleX),
        h: Math.max(50, shape.props.h * info.scaleY),
      },
    }
  }

  // 渲染组件
  component(shape: AIImageShape) {
    const { url, isVideo, prompt } = shape.props
    const videoRef = useRef<HTMLVideoElement>(null)

    // 将视频元素存储到全局 map
    useEffect(() => {
      if (isVideo && url && videoRef.current) {
        videoElementsMap.set(shape.id, videoRef.current)
        return () => {
          videoElementsMap.delete(shape.id)
        }
      }
    }, [isVideo, shape.id, url])

    // 如果 url 为空，表示正在生成中，不渲染任何内容（由 GeneratingOverlay 处理）
    if (!url) {
      return (
        <HTMLContainer
          style={{
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
          {/* 空占位符，等待生成完成 */}
        </HTMLContainer>
      )
    }

    return (
      <HTMLContainer
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'all',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 0,
            overflow: 'hidden',
            background: '#1a1a1a',
            position: 'relative',
          }}
        >
          {isVideo ? (
            <video
              ref={videoRef}
              src={url}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              loop
              muted
              playsInline
              // 默认不自动播放，由选中状态控制
            />
          ) : (
            <img
              src={url}
              alt={prompt || 'AI Generated'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                userSelect: 'none',
                pointerEvents: 'none',
              }}
              draggable={false}
            />
          )}
        </div>
      </HTMLContainer>
    )
  }

  // 选中时的指示器
  indicator(shape: AIImageShape) {
    return (
      <rect
        width={shape.props.w}
        height={shape.props.h}
        rx={0}
        ry={0}
      />
    )
  }
}
