import React, { useState } from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojDatePickerProps {
  label: string
  hint?: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  id?: string
  name?: string
  required?: boolean
}

export const MojDatePicker: React.FC<MojDatePickerProps> = ({
  label,
  hint,
  value = '',
  onChange,
  className,
  id,
  name,
  required = false
}) => {
  const [dateValue, setDateValue] = useState(value)
  const inputId = id || `moj-date-picker-${Math.random().toString(36).substr(2, 9)}`

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setDateValue(newValue)
    onChange?.(newValue)
  }

  const pickerClasses = `moj-date-picker ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={pickerClasses}>
      <div className="govuk-form-group">
        <label className="govuk-label" htmlFor={inputId}>
          {label}
          {required && <span className="govuk-visually-hidden"> (required)</span>}
        </label>
        {hint && (
          <div id={`${inputId}-hint`} className="govuk-hint">
            {hint}
          </div>
        )}
        <input
          id={inputId}
          name={name}
          className="govuk-input moj-date-picker__input"
          type="date"
          value={dateValue}
          onChange={handleChange}
          aria-describedby={hint ? `${inputId}-hint` : undefined}
          required={required}
        />
      </div>
    </MojComponentWrapper>
  )
}
