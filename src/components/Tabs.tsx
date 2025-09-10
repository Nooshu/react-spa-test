import React, { useEffect, useRef } from 'react'

interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  items: TabItem[]
}

export const Tabs: React.FC<TabsProps> = ({ items }) => {
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (tabsRef.current && window.GOVUKFrontend) {
      // Re-initialize GOV.UK Frontend components for this tabs component
      window.GOVUKFrontend.initAll()
    }
  }, [items])

  return (
    <div ref={tabsRef} className="govuk-tabs" data-module="govuk-tabs">
      <h2 className="govuk-tabs__title">Contents</h2>
      <ul className="govuk-tabs__list" role="tablist">
        {items.map((item, index) => (
          <li key={item.id} className="govuk-tabs__list-item">
            <button
              className={`govuk-tabs__tab${index === 0 ? ' govuk-tabs__tab--selected' : ''}`}
              id={`tab-${item.id}`}
              role="tab"
              aria-selected={index === 0}
              aria-controls={`panel-${item.id}`}
              tabIndex={index === 0 ? 0 : -1}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      
      {items.map((item, index) => (
        <section
          key={item.id}
          className={`govuk-tabs__panel${index === 0 ? '' : ' govuk-tabs__panel--hidden'}`}
          id={`panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          hidden={index !== 0}
        >
          {item.content}
        </section>
      ))}
    </div>
  )
}
