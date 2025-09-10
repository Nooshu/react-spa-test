import React from 'react'
import { clsx } from 'clsx'

interface HintProps {
  children: React.ReactNode
  className?: string
}

export const Hint: React.FC<HintProps> = ({ children, className }) => {
  return (
    <div className={clsx('govuk-hint', className)}>
      {children}
    </div>
  )
}
