import React from 'react'
import { Link } from 'react-router-dom'
import { clsx } from 'clsx'

interface BackLinkProps {
  href?: string
  to?: string
  children: React.ReactNode
  className?: string
}

export const BackLink: React.FC<BackLinkProps> = ({ 
  href, 
  to, 
  children, 
  className 
}) => {
  const linkClasses = clsx('govuk-back-link', className)

  if (href) {
    return (
      <a href={href} className={linkClasses}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} className={linkClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button 
      type="button" 
      className={linkClasses}
      onClick={() => window.history.back()}
    >
      {children}
    </button>
  )
}
