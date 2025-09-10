import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojSubNavigationProps {
  items: Array<{
    text: string
    href?: string
    onClick?: () => void
    active?: boolean
  }>
  className?: string
}

export const MojSubNavigation: React.FC<MojSubNavigationProps> = ({
  items,
  className
}) => {
  const navClasses = `moj-sub-navigation ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={navClasses}>
      <nav className="moj-sub-navigation__nav" role="navigation" aria-label="Sub navigation">
        <ul className="moj-sub-navigation__list">
          {items.map((item, index) => (
            <li key={index} className={`moj-sub-navigation__item ${item.active ? 'moj-sub-navigation__item--active' : ''}`}>
              {item.href ? (
                <a 
                  href={item.href} 
                  className={`moj-sub-navigation__link ${item.active ? 'moj-sub-navigation__link--active' : ''}`}
                  onClick={item.onClick}
                >
                  {item.text}
                </a>
              ) : (
                <button
                  className={`moj-sub-navigation__button ${item.active ? 'moj-sub-navigation__button--active' : ''}`}
                  onClick={item.onClick}
                >
                  {item.text}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </MojComponentWrapper>
  )
}
