import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { clsx } from 'clsx'

interface ServiceNavigationItem {
  text: string
  href?: string
  to?: string
  current?: boolean
}

interface ServiceNavigationProps {
  items: ServiceNavigationItem[]
  className?: string
}

export const ServiceNavigation: React.FC<ServiceNavigationProps> = ({
  items,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={clsx('govuk-service-navigation', className)} aria-label="Service navigation">
      <button
        className="govuk-service-navigation__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="service-navigation"
        onClick={toggleOpen}
      >
        Service navigation
      </button>
      <ul
        id="service-navigation"
        className={clsx(
          'govuk-service-navigation__list',
          { 'govuk-service-navigation__list--open': isOpen }
        )}
      >
        {items.map((item, index) => (
          <li key={index} className="govuk-service-navigation__item">
            {item.href ? (
              <a
                href={item.href}
                className={clsx(
                  'govuk-service-navigation__link',
                  { 'govuk-service-navigation__link--current': item.current }
                )}
              >
                {item.text}
              </a>
            ) : item.to ? (
              <Link
                to={item.to}
                className={clsx(
                  'govuk-service-navigation__link',
                  { 
                    'govuk-service-navigation__link--current': item.current || location.pathname === item.to 
                  }
                )}
              >
                {item.text}
              </Link>
            ) : (
              <span className="govuk-service-navigation__link">
                {item.text}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
