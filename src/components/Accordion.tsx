import React, { useEffect, useRef, useState } from 'react'

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
  const accordionRef = useRef<HTMLDivElement>(null)
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const [govukInitialized, setGovukInitialized] = useState(false)
  const [allExpanded, setAllExpanded] = useState(false)

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

  const toggleAllSections = () => {
    if (allExpanded) {
      setOpenItems(new Set())
    } else {
      setOpenItems(new Set(items.map((_, index) => index)))
    }
    setAllExpanded(!allExpanded)
  }

  useEffect(() => {
    const initializeAccordion = () => {
      if (accordionRef.current && window.GOVUKFrontend) {
        try {
          // Try to initialize GOV.UK Frontend components
          window.GOVUKFrontend.initAll()
          
          // Check if accordion was initialized by GOV.UK Frontend
          const accordionElement = accordionRef.current
          const buttons = accordionElement.querySelectorAll('.govuk-accordion__section-button')
          
          // If buttons have click handlers, GOV.UK Frontend initialized successfully
          const hasClickHandlers = Array.from(buttons).some(button => {
            const events = (button as any)._events || (button as any).onclick
            return events !== undefined
          })
          
          if (hasClickHandlers) {
            setGovukInitialized(true)
            console.log('GOV.UK Frontend accordion initialized successfully')
          } else {
            console.log('GOV.UK Frontend accordion not initialized, using React fallback')
          }
        } catch (error) {
          console.warn('Failed to initialize accordion:', error)
        }
      }
    }

    // Initialize immediately
    initializeAccordion()
    
    // Also initialize after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(initializeAccordion, 200)
    
    return () => clearTimeout(timeoutId)
  }, [items])

  return (
    <div 
      ref={accordionRef}
      className="govuk-accordion" 
      data-module="govuk-accordion"
      data-allow-multiple={allowMultiple ? 'true' : 'false'}
    >
      <div className="govuk-accordion__controls">
        <button 
          type="button" 
          className="govuk-accordion__show-all"
          aria-expanded={allExpanded}
          onClick={toggleAllSections}
        >
          <span className="govuk-accordion__show-all-text">
            {allExpanded ? 'Hide all sections' : 'Show all sections'}
          </span>
          <span className="govuk-accordion__show-all-icon" aria-hidden="true"></span>
        </button>
      </div>
      
      {items.map((item, index) => {
        const itemId = `accordion-item-${index}`
        const contentId = `accordion-content-${index}`
        const isOpen = openItems.has(index)

        return (
          <div key={index} className="govuk-accordion__section">
            <div className="govuk-accordion__section-header">
              <h2 className="govuk-accordion__section-heading">
                <span 
                  className="govuk-accordion__section-button" 
                  id={`${itemId}-heading`}
                  aria-controls={contentId}
                  aria-expanded={isOpen}
                  onClick={!govukInitialized ? () => toggleItem(index) : undefined}
                  style={{ cursor: !govukInitialized ? 'pointer' : 'default' }}
                >
                  {item.heading}
                </span>
              </h2>
            </div>
            <div 
              id={contentId}
              className={`govuk-accordion__section-content${isOpen ? ' govuk-accordion__section-content--expanded' : ''}`}
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
