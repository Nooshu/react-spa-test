import React from 'react'
import { clsx } from 'clsx'

interface LabelProps {
  htmlFor?: string
  children: React.ReactNode
  className?: string
}

export const Label: React.FC<LabelProps> = ({ htmlFor, children, className }) => {
  return (
    <label className={clsx('govuk-label', className)} htmlFor={htmlFor}>
      {children}
    </label>
  )
}
