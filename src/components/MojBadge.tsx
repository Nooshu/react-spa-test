import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojBadgeProps {
  text: string
  type?: 'default' | 'urgent' | 'success' | 'warning' | 'error'
  className?: string
}

export const MojBadge: React.FC<MojBadgeProps> = ({
  text,
  type = 'default',
  className
}) => {
  const badgeClasses = `moj-badge moj-badge--${type} ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={badgeClasses}>
      {text}
    </MojComponentWrapper>
  )
}
