import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojAddAnotherProps {
  title: string
  items: Array<{
    id: string
    content: React.ReactNode
  }>
  onAdd?: () => void
  onRemove?: (id: string) => void
  addButtonText?: string
  removeButtonText?: string
  className?: string
}

export const MojAddAnother: React.FC<MojAddAnotherProps> = ({
  title,
  items,
  onAdd,
  onRemove,
  addButtonText = 'Add another',
  removeButtonText = 'Remove',
  className
}) => {
  const addAnotherClasses = `moj-add-another ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={addAnotherClasses}>
      <div className="moj-add-another__container">
        <h3 className="moj-add-another__title">{title}</h3>
        
        <div className="moj-add-another__items">
          {items.map((item) => (
            <div key={item.id} className="moj-add-another__item">
              <div className="moj-add-another__item-content">
                {item.content}
              </div>
              <div className="moj-add-another__item-actions">
                <button
                  className="govuk-button govuk-button--secondary moj-add-another__remove-button"
                  onClick={() => onRemove?.(item.id)}
                  type="button"
                >
                  {removeButtonText}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="moj-add-another__add-section">
          <button
            className="govuk-button govuk-button--secondary moj-add-another__add-button"
            onClick={onAdd}
            type="button"
          >
            {addButtonText}
          </button>
        </div>
      </div>
    </MojComponentWrapper>
  )
}
