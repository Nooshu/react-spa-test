import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

interface PaginationItem {
  number?: number
  href?: string
  to?: string
  ellipsis?: boolean
  current?: boolean
}

interface PaginationProps {
  previous?: {
    href?: string
    to?: string
    text?: string
  }
  next?: {
    href?: string
    to?: string
    text?: string
  }
  items?: PaginationItem[]
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({
  previous,
  next,
  items = [],
  className
}) => {
  return (
    <nav className={clsx('govuk-pagination', className)} role="navigation" aria-label="results">
      {previous && (
        <div className="govuk-pagination__prev">
          {previous.href ? (
            <a className="govuk-link govuk-pagination__link" href={previous.href}>
              <svg className="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
                <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
              </svg>
              <span className="govuk-pagination__link-title">
                {previous.text || 'Previous'}
              </span>
            </a>
          ) : previous.to ? (
            <Link className="govuk-link govuk-pagination__link" href={previous.to}>
              <svg className="govuk-pagination__icon govuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
                <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"></path>
              </svg>
              <span className="govuk-pagination__link-title">
                {previous.text || 'Previous'}
              </span>
            </Link>
          ) : null}
        </div>
      )}
      
      {items.length > 0 && (
        <ul className="govuk-pagination__list">
          {items.map((item, index) => (
            <li key={index} className="govuk-pagination__item">
              {item.ellipsis ? (
                <span className="govuk-pagination__item--ellipsis">⋯</span>
              ) : item.current ? (
                <span className="govuk-pagination__link govuk-pagination__link--current" aria-current="page" aria-label={`Page ${item.number}, current page`}>
                  {item.number}
                </span>
              ) : item.href ? (
                <a className="govuk-link govuk-pagination__link" href={item.href} aria-label={`Page ${item.number}`}>
                  {item.number}
                </a>
              ) : item.to ? (
                <Link className="govuk-link govuk-pagination__link" href={item.to} aria-label={`Page ${item.number}`}>
                  {item.number}
                </Link>
              ) : (
                <span className="govuk-pagination__link" aria-label={`Page ${item.number}`}>
                  {item.number}
                </span>
              )}
            </li>
          ))}
        </ul>
      )}
      
      {next && (
        <div className="govuk-pagination__next">
          {next.href ? (
            <a className="govuk-link govuk-pagination__link" href={next.href}>
              <span className="govuk-pagination__link-title">
                {next.text || 'Next'}
              </span>
              <svg className="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
                <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.449 6.7441-6.4062-6.7246-6.7266z"></path>
              </svg>
            </a>
          ) : next.to ? (
            <Link className="govuk-link govuk-pagination__link" href={next.to}>
              <span className="govuk-pagination__link-title">
                {next.text || 'Next'}
              </span>
              <svg className="govuk-pagination__icon govuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" aria-hidden="true" focusable="false" viewBox="0 0 15 13">
                <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.449 6.7441-6.4062-6.7246-6.7266z"></path>
              </svg>
            </Link>
          ) : null}
        </div>
      )}
    </nav>
  )
}
