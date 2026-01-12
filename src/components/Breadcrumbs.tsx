import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

interface BreadcrumbItem {
  text: string
  href?: string
  to?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ 
  items, 
  className 
}) => {
  return (
    <nav className={clsx('govuk-breadcrumbs', className)} aria-label="Breadcrumb">
      <ol className="govuk-breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          
          return (
            <li key={index} className="govuk-breadcrumbs__list-item">
              {isLast ? (
                <span className="govuk-breadcrumbs__current" aria-current="page">
                  {item.text}
                </span>
              ) : (
                <>
                  {item.href ? (
                    <a href={item.href} className="govuk-breadcrumbs__link">
                      {item.text}
                    </a>
                  ) : item.to ? (
                    <Link href={item.to} className="govuk-breadcrumbs__link">
                      {item.text}
                    </Link>
                  ) : (
                    <span className="govuk-breadcrumbs__link">
                      {item.text}
                    </span>
                  )}
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
