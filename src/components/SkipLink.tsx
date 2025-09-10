import React from 'react'
import { clsx } from 'clsx'

interface SkipLinkProps {
  href?: string
  children: React.ReactNode
  className?: string
}

export const SkipLink: React.FC<SkipLinkProps> = ({ 
  href = '#main-content', 
  children, 
  className 
}) => {
  return (
    <a 
      href={href} 
      className={clsx('govuk-skip-link', className)}
      data-module="govuk-skip-link"
    >
      {children}
    </a>
  )
}
