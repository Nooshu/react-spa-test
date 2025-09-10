import React, { useState } from 'react'
import { clsx } from 'clsx'

interface TabItem {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  items: TabItem[]
}

export const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(items[0]?.id || '')

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const currentIndex = items.findIndex(item => item.id === activeTab)
    let newIndex = currentIndex

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault()
        newIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
        break
      case 'ArrowRight':
        event.preventDefault()
        newIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
        break
      case 'Home':
        event.preventDefault()
        newIndex = 0
        break
      case 'End':
        event.preventDefault()
        newIndex = items.length - 1
        break
      default:
        return
    }

    setActiveTab(items[newIndex].id)
  }

  const activeTabContent = items.find(item => item.id === activeTab)?.content

  return (
    <div className="govuk-tabs" data-module="govuk-tabs">
      <h2 className="govuk-tabs__title">Contents</h2>
      <ul className="govuk-tabs__list" role="tablist">
        {items.map((item) => (
          <li key={item.id} className="govuk-tabs__list-item">
            <button
              className={clsx(
                'govuk-tabs__tab',
                { 'govuk-tabs__tab--selected': activeTab === item.id }
              )}
              id={`tab-${item.id}`}
              role="tab"
              aria-selected={activeTab === item.id}
              aria-controls={`panel-${item.id}`}
              tabIndex={activeTab === item.id ? 0 : -1}
              onClick={() => handleTabClick(item.id)}
              onKeyDown={handleKeyDown}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
      
      {items.map((item) => (
        <section
          key={item.id}
          className={clsx(
            'govuk-tabs__panel',
            { 'govuk-tabs__panel--hidden': activeTab !== item.id }
          )}
          id={`panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${item.id}`}
          hidden={activeTab !== item.id}
        >
          {activeTab === item.id && activeTabContent}
        </section>
      ))}
    </div>
  )
}
