import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojScrollablePaneProps {
  children: React.ReactNode
  height?: string
  className?: string
}

export const MojScrollablePane: React.FC<MojScrollablePaneProps> = ({
  children,
  height = '400px',
  className
}) => {
  const paneClasses = `moj-scrollable-pane ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={paneClasses}>
      <div 
        className="moj-scrollable-pane__container"
        style={{ maxHeight: height }}
      >
        <div className="moj-scrollable-pane__content">
          {children}
        </div>
      </div>
    </MojComponentWrapper>
  )
}
