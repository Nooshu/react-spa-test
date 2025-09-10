import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojSideNavigationItem {
  text: string
  href?: string
  active?: boolean
  children?: MojSideNavigationItem[]
}

interface MojSideNavigationProps {
  items: MojSideNavigationItem[]
  className?: string
  title?: string
}

export const MojSideNavigation: React.FC<MojSideNavigationProps> = ({
  items,
  className,
  title = 'Contents'
}) => {
  const renderNavigationItem = (item: MojSideNavigationItem, index: number) => {
    const itemClasses = `moj-side-navigation__item ${
      item.active ? 'moj-side-navigation__item--active' : ''
    }`.trim()

    return (
      <li key={index} className={itemClasses}>
        {item.href ? (
          <a href={item.href} className="moj-side-navigation__link">
            {item.text}
          </a>
        ) : (
          <span className="moj-side-navigation__link moj-side-navigation__link--current">
            {item.text}
          </span>
        )}
        {item.children && item.children.length > 0 && (
          <ul className="moj-side-navigation__list moj-side-navigation__list--nested">
            {item.children.map((child, childIndex) => 
              renderNavigationItem(child, childIndex)
            )}
          </ul>
        )}
      </li>
    )
  }

  const navigationClasses = `moj-side-navigation ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={navigationClasses}>
      <h2 className="moj-side-navigation__title">{title}</h2>
      <nav className="moj-side-navigation__nav" aria-label="Side navigation">
        <ul className="moj-side-navigation__list">
          {items.map((item, index) => renderNavigationItem(item, index))}
        </ul>
      </nav>
    </MojComponentWrapper>
  )
}
