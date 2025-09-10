import React, { useState } from 'react'
import { clsx } from 'clsx'

interface AccordionItem {
  heading: string
  content: string
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
}

export const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  allowMultiple = false 
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <div className="govuk-accordion" data-module="govuk-accordion">
      {items.map((item, index) => {
        const isOpen = openItems.has(index)
        const itemId = `accordion-item-${index}`
        const contentId = `accordion-content-${index}`

        return (
          <div key={index} className="govuk-accordion__section">
            <div className="govuk-accordion__section-header">
              <h2 className="govuk-accordion__section-heading">
                <span className="govuk-accordion__section-button" 
                      id={`${itemId}-heading`}
                      onClick={() => toggleItem(index)}
                      aria-expanded={isOpen}
                      aria-controls={contentId}>
                  {item.heading}
                </span>
              </h2>
            </div>
            <div 
              id={contentId}
              className={clsx(
                'govuk-accordion__section-content',
                { 'govuk-accordion__section-content--expanded': isOpen }
              )}
              aria-labelledby={`${itemId}-heading`}
              hidden={!isOpen}
            >
              <div className="govuk-accordion__section-content-text">
                <p className="govuk-body">{item.content}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
