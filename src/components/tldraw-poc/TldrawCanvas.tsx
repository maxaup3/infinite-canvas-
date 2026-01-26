/**
 * tldraw 无限画布 POC
 * 只使用画布基础能力，不使用绘图工具
 */
import { useCallback, useEffect } from 'react'
import {
  Tldraw,
  Editor,
  createShapeId,
  TLComponents,
  DefaultToolbar,
  DefaultActionsMenu,
} from 'tldraw'
import 'tldraw/tldraw.css'
import { AIImageShapeUtil, AIImageShape } from './AIImageShape'

// 自定义形状列表
const customShapeUtils = [AIImageShapeUtil]

// 隐藏默认 UI 组件
const components: TLComponents = {
  // 隐藏绘图工具栏
  Toolbar: null,
  // 隐藏页面菜单
  PageMenu: null,
  // 隐藏主菜单
  MainMenu: null,
  // 隐藏快速操作
  ActionsMenu: null,
  // 隐藏帮助菜单
  HelpMenu: null,
  // 隐藏导航面板
  NavigationPanel: null,
  // 隐藏样式面板
  StylePanel: null,
  // 隐藏键盘快捷键对话框
  KeyboardShortcutsDialog: null,
  // 隐藏快捷操作菜单
  QuickActions: null,
  // 隐藏 debug 面板
  DebugPanel: null,
  DebugMenu: null,
  // 保留缩放菜单（可选）
  // ZoomMenu: null,
}

interface TldrawCanvasProps {
  onEditorReady?: (editor: Editor) => void
}

export default function TldrawCanvas({ onEditorReady }: TldrawCanvasProps) {

  // 编辑器加载完成回调
  const handleMount = useCallback((editor: Editor) => {
    console.log('tldraw editor ready')

    // 设置默认工具为选择工具（而非绘图工具）
    editor.setCurrentTool('select')

    // 添加一些测试图片
    const testImages = [
      {
        id: createShapeId(),
        type: 'ai-image' as const,
        x: 100,
        y: 100,
        props: {
          w: 400,
          h: 300,
          url: 'https://picsum.photos/seed/test1/800/600',
          prompt: 'A beautiful landscape',
          model: 'qwen-image',
          generatedAt: Date.now(),
          isVideo: false,
        },
      },
      {
        id: createShapeId(),
        type: 'ai-image' as const,
        x: 550,
        y: 100,
        props: {
          w: 300,
          h: 400,
          url: 'https://picsum.photos/seed/test2/600/800',
          prompt: 'Portrait of a cat',
          model: 'qwen-image',
          generatedAt: Date.now(),
          isVideo: false,
        },
      },
      {
        id: createShapeId(),
        type: 'ai-image' as const,
        x: 100,
        y: 450,
        props: {
          w: 500,
          h: 280,
          url: 'https://picsum.photos/seed/test3/1000/560',
          prompt: 'Cyberpunk city at night',
          model: 'qwen-image',
          generatedAt: Date.now(),
          isVideo: false,
        },
      },
    ]

    // 创建测试形状
    // @ts-ignore - custom shape type
    editor.createShapes(testImages)

    // 居中视图
    editor.zoomToFit({ animation: { duration: 500 } })

    // 通知父组件
    onEditorReady?.(editor)
  }, [onEditorReady])

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Tldraw
        shapeUtils={customShapeUtils}
        components={components}
        onMount={handleMount}
        // 隐藏默认 UI
        hideUi={false} // 保留一些基础 UI
        // 初始相机位置
        initialState="select"
      />

      {/* 自定义 UI 覆盖层 - 可以放你的 TopBar、BottomDialog 等 */}
      <div
        style={{
          position: 'fixed',
          top: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(24, 24, 24, 0.9)',
          padding: '12px 24px',
          borderRadius: 12,
          color: 'white',
          fontSize: 14,
          zIndex: 1000,
          pointerEvents: 'none',
        }}
      >
        tldraw POC - 无限画布基础能力测试
      </div>
    </div>
  )
}
