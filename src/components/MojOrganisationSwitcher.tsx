import React, { useState } from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface Organisation {
  id: string
  name: string
  type: string
}

interface MojOrganisationSwitcherProps {
  organisations: Organisation[]
  currentOrganisation?: Organisation
  onOrganisationChange?: (organisation: Organisation) => void
  className?: string
}

export const MojOrganisationSwitcher: React.FC<MojOrganisationSwitcherProps> = ({
  organisations,
  currentOrganisation,
  onOrganisationChange,
  className
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const switcherClasses = `moj-organisation-switcher ${className || ''}`.trim()

  const handleOrganisationSelect = (organisation: Organisation) => {
    onOrganisationChange?.(organisation)
    setIsOpen(false)
  }

  return (
    <MojComponentWrapper className={switcherClasses}>
      <div className="moj-organisation-switcher__container">
        <button
          className="moj-organisation-switcher__toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="moj-organisation-switcher-menu"
        >
          <span className="moj-organisation-switcher__current">
            {currentOrganisation?.name || 'Select organisation'}
          </span>
          <span className="moj-organisation-switcher__toggle-icon" aria-hidden="true">
            {isOpen ? '▲' : '▼'}
          </span>
        </button>
        
        {isOpen && (
          <div id="moj-organisation-switcher-menu" className="moj-organisation-switcher__menu">
            <ul className="moj-organisation-switcher__list">
              {organisations.map((organisation) => (
                <li key={organisation.id} className="moj-organisation-switcher__item">
                  <button
                    className={`moj-organisation-switcher__option ${currentOrganisation?.id === organisation.id ? 'moj-organisation-switcher__option--current' : ''}`}
                    onClick={() => handleOrganisationSelect(organisation)}
                  >
                    <span className="moj-organisation-switcher__name">{organisation.name}</span>
                    {organisation.type && (
                      <span className="moj-organisation-switcher__type">{organisation.type}</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </MojComponentWrapper>
  )
}
