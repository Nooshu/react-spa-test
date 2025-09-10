import React, { useState } from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface NavigationItem {
  text: string
  href?: string
  onClick?: () => void
  active?: boolean
  children?: NavigationItem[]
}

interface MojPrimaryNavigationProps {
  items: NavigationItem[]
  className?: string
}

export const MojPrimaryNavigation: React.FC<MojPrimaryNavigationProps> = ({
  items,
  className
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const navClasses = `moj-primary-navigation ${className || ''}`.trim()

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <MojComponentWrapper className={navClasses}>
      <nav className="moj-primary-navigation__nav" role="navigation" aria-label="Primary navigation">
        <ul className="moj-primary-navigation__list">
          {items.map((item, index) => (
            <li key={index} className={`moj-primary-navigation__item ${item.active ? 'moj-primary-navigation__item--active' : ''}`}>
              {item.children && item.children.length > 0 ? (
                <>
                  <button
                    className="moj-primary-navigation__toggle"
                    onClick={() => toggleItem(index)}
                    aria-expanded={openItems.has(index)}
                    aria-controls={`moj-primary-navigation-submenu-${index}`}
                  >
                    {item.text}
                    <span className="moj-primary-navigation__toggle-icon" aria-hidden="true">
                      {openItems.has(index) ? '−' : '+'}
                    </span>
                  </button>
                  {openItems.has(index) && (
                    <ul 
                      id={`moj-primary-navigation-submenu-${index}`}
                      className="moj-primary-navigation__submenu"
                    >
                      {item.children.map((child, childIndex) => (
                        <li key={childIndex} className="moj-primary-navigation__subitem">
                          {child.href ? (
                            <a 
                              href={child.href} 
                              className={`moj-primary-navigation__link ${child.active ? 'moj-primary-navigation__link--active' : ''}`}
                              onClick={child.onClick}
                            >
                              {child.text}
                            </a>
                          ) : (
                            <button
                              className={`moj-primary-navigation__button ${child.active ? 'moj-primary-navigation__button--active' : ''}`}
                              onClick={child.onClick}
                            >
                              {child.text}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <>
                  {item.href ? (
                    <a 
                      href={item.href} 
                      className={`moj-primary-navigation__link ${item.active ? 'moj-primary-navigation__link--active' : ''}`}
                      onClick={item.onClick}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <button
                      className={`moj-primary-navigation__button ${item.active ? 'moj-primary-navigation__button--active' : ''}`}
                      onClick={item.onClick}
                    >
                      {item.text}
                    </button>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </MojComponentWrapper>
  )
}
