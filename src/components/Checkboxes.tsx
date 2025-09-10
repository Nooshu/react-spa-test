import React from 'react'
import { clsx } from 'clsx'

interface CheckboxItem {
  value: string
  text: string
  hint?: string
  checked?: boolean
  disabled?: boolean
  conditional?: React.ReactNode
}

interface CheckboxesProps {
  name: string
  items: CheckboxItem[]
  value?: string[]
  onChange?: (values: string[]) => void
  errorMessage?: string
  fieldset?: {
    legend: string
    classes?: string
  }
  hint?: string
  className?: string
}

export const Checkboxes: React.FC<CheckboxesProps> = ({
  name,
  items,
  value = [],
  onChange,
  errorMessage,
  fieldset,
  hint,
  className
}) => {
  const handleChange = (itemValue: string, checked: boolean) => {
    if (!onChange) return
    
    const newValues = checked 
      ? [...value, itemValue]
      : value.filter(v => v !== itemValue)
    
    onChange(newValues)
  }

  const fieldsetClasses = clsx(
    'govuk-fieldset',
    {
      'govuk-fieldset--error': errorMessage
    }
  )

  const legendClasses = clsx(
    'govuk-fieldset__legend',
    fieldset?.classes
  )

  return (
    <div className={clsx('govuk-form-group', className)}>
      <fieldset className={fieldsetClasses} aria-describedby={hint ? `${name}-hint` : undefined}>
        {fieldset && (
          <legend className={legendClasses}>
            {fieldset.legend}
          </legend>
        )}
        
        {hint && (
          <div id={`${name}-hint`} className="govuk-hint">
            {hint}
          </div>
        )}
        
        {errorMessage && (
          <span id={`${name}-error`} className="govuk-error-message">
            <span className="govuk-visually-hidden">Error:</span>
            {errorMessage}
          </span>
        )}
        
        <div className="govuk-checkboxes" data-module="govuk-checkboxes">
          {items.map((item, index) => (
            <div key={index} className="govuk-checkboxes__item">
              <input
                className="govuk-checkboxes__input"
                id={`${name}-${index}`}
                name={name}
                type="checkbox"
                value={item.value}
                checked={value.includes(item.value)}
                disabled={item.disabled}
                onChange={(e) => handleChange(item.value, e.target.checked)}
                aria-describedby={item.hint ? `${name}-${index}-item-hint` : undefined}
              />
              <label className="govuk-label govuk-checkboxes__label" htmlFor={`${name}-${index}`}>
                {item.text}
              </label>
              {item.hint && (
                <div id={`${name}-${index}-item-hint`} className="govuk-hint govuk-checkboxes__hint">
                  {item.hint}
                </div>
              )}
              {item.conditional && (
                <div className="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden">
                  {item.conditional}
                </div>
              )}
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
