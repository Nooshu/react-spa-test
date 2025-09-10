import React, { useState } from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojButtonMenuProps {
  title: string
  items: Array<{
    text: string
    href?: string
    onClick?: () => void
    disabled?: boolean
  }>
  className?: string
}

export const MojButtonMenu: React.FC<MojButtonMenuProps> = ({
  title,
  items,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuClasses = `moj-button-menu ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={menuClasses}>
      <button
        className="moj-button-menu__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="moj-button-menu-items"
      >
        {title}
        <span className="moj-button-menu__toggle-icon" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      {isOpen && (
        <div id="moj-button-menu-items" className="moj-button-menu__items">
          {items.map((item, index) => (
            <div key={index} className="moj-button-menu__item">
              {item.href ? (
                <a 
                  href={item.href} 
                  className="moj-button-menu__link"
                  onClick={item.onClick}
                >
                  {item.text}
                </a>
              ) : (
                <button
                  className="moj-button-menu__button"
                  onClick={item.onClick}
                  disabled={item.disabled}
                >
                  {item.text}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </MojComponentWrapper>
  )
}
