import React from 'react'
import { clsx } from 'clsx'

interface RadioItem {
  value: string
  text: string
  hint?: string
  checked?: boolean
  disabled?: boolean
  conditional?: React.ReactNode
}

interface RadiosProps {
  name: string
  items: RadioItem[]
  value?: string
  onChange?: (value: string) => void
  errorMessage?: string
  fieldset?: {
    legend: string
    classes?: string
  }
  hint?: string
  className?: string
}

export const Radios: React.FC<RadiosProps> = ({
  name,
  items,
  value = '',
  onChange,
  errorMessage,
  fieldset,
  hint,
  className
}) => {
  const handleChange = (itemValue: string) => {
    onChange?.(itemValue)
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
        
        <div className="govuk-radios" data-module="govuk-radios">
          {items.map((item, index) => (
            <div key={index} className="govuk-radios__item">
              <input
                className="govuk-radios__input"
                id={`${name}-${index}`}
                name={name}
                type="radio"
                value={item.value}
                checked={value === item.value}
                disabled={item.disabled}
                onChange={() => handleChange(item.value)}
                aria-describedby={item.hint ? `${name}-${index}-item-hint` : undefined}
              />
              <label className="govuk-label govuk-radios__label" htmlFor={`${name}-${index}`}>
                {item.text}
              </label>
              {item.hint && (
                <div id={`${name}-${index}-item-hint`} className="govuk-hint govuk-radios__hint">
                  {item.hint}
                </div>
              )}
              {item.conditional && (
                <div className="govuk-radios__conditional govuk-radios__conditional--hidden">
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
