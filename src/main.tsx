import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// 切换模式: 'original' = 原版 Konva, 'tldraw' = tldraw POC
const MODE = 'tldraw' as const

// 动态导入
const AppComponent = MODE === 'tldraw'
  ? React.lazy(() => import('./TldrawPocApp'))
  : React.lazy(() => import('./App'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={<div style={{ color: 'white', padding: 20 }}>Loading...</div>}>
      <AppComponent />
    </React.Suspense>
  </React.StrictMode>,
)


