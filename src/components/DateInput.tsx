import React from 'react'
import { clsx } from 'clsx'

interface DateInputProps {
  name: string
  value?: {
    day?: string
    month?: string
    year?: string
  }
  onChange?: (value: { day?: string; month?: string; year?: string }) => void
  errorMessage?: string
  fieldset?: {
    legend: string
    classes?: string
  }
  hint?: string
  className?: string
}

export const DateInput: React.FC<DateInputProps> = ({
  name,
  value = {},
  onChange,
  errorMessage,
  fieldset,
  hint,
  className
}) => {
  const handleChange = (field: 'day' | 'month' | 'year', inputValue: string) => {
    if (!onChange) return
    
    onChange({
      ...value,
      [field]: inputValue
    })
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
        
        <div className="govuk-date-input" id={name}>
          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor={`${name}-day`}>
                Day
              </label>
              <input
                className={clsx(
                  'govuk-input govuk-date-input__input govuk-input--width-2',
                  { 'govuk-input--error': errorMessage }
                )}
                id={`${name}-day`}
                name={`${name}-day`}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={value.day || ''}
                onChange={(e) => handleChange('day', e.target.value)}
                aria-describedby={errorMessage ? `${name}-error` : undefined}
              />
            </div>
          </div>
          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor={`${name}-month`}>
                Month
              </label>
              <input
                className={clsx(
                  'govuk-input govuk-date-input__input govuk-input--width-2',
                  { 'govuk-input--error': errorMessage }
                )}
                id={`${name}-month`}
                name={`${name}-month`}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={value.month || ''}
                onChange={(e) => handleChange('month', e.target.value)}
                aria-describedby={errorMessage ? `${name}-error` : undefined}
              />
            </div>
          </div>
          <div className="govuk-date-input__item">
            <div className="govuk-form-group">
              <label className="govuk-label govuk-date-input__label" htmlFor={`${name}-year`}>
                Year
              </label>
              <input
                className={clsx(
                  'govuk-input govuk-date-input__input govuk-input--width-4',
                  { 'govuk-input--error': errorMessage }
                )}
                id={`${name}-year`}
                name={`${name}-year`}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={value.year || ''}
                onChange={(e) => handleChange('year', e.target.value)}
                aria-describedby={errorMessage ? `${name}-error` : undefined}
              />
            </div>
          </div>
        </div>
      </fieldset>
    </div>
  )
}
