import { useState } from 'react'

export function useUIState() {
  const [deleteConfirmVisible, setDeleteConfirmVisible] = useState(false)
  const [showDetailPanel, setShowDetailPanel] = useState(false)
  const [showLibraryDialog, setShowLibraryDialog] = useState(false)
  const [libraryInsertPosition, setLibraryInsertPosition] = useState<{ x: number; y: number } | null>(null)
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null)
  const [isLayerPanelOpen, setIsLayerPanelOpen] = useState(false)
  const [isBottomDialogExpanded, setIsBottomDialogExpanded] = useState(true)

  return {
    deleteConfirmVisible, setDeleteConfirmVisible,
    showDetailPanel, setShowDetailPanel,
    showLibraryDialog, setShowLibraryDialog,
    libraryInsertPosition, setLibraryInsertPosition,
    contextMenu, setContextMenu,
    isLayerPanelOpen, setIsLayerPanelOpen,
    isBottomDialogExpanded, setIsBottomDialogExpanded,
  }
}
