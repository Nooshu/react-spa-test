import React, { useState } from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojMultiSelectProps {
  label: string
  hint?: string
  options: Array<{
    value: string
    text: string
    selected?: boolean
  }>
  selectedValues?: string[]
  onChange?: (selectedValues: string[]) => void
  className?: string
  id?: string
  name?: string
  required?: boolean
}

export const MojMultiSelect: React.FC<MojMultiSelectProps> = ({
  label,
  hint,
  options,
  selectedValues = [],
  onChange,
  className,
  id,
  name,
  required = false
}) => {
  const [selected, setSelected] = useState<string[]>(selectedValues)
  const inputId = id || `moj-multi-select-${Math.random().toString(36).substr(2, 9)}`

  const handleOptionChange = (value: string, checked: boolean) => {
    let newSelected: string[]
    if (checked) {
      newSelected = [...selected, value]
    } else {
      newSelected = selected.filter(v => v !== value)
    }
    setSelected(newSelected)
    onChange?.(newSelected)
  }

  const selectClasses = `moj-multi-select ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={selectClasses}>
      <div className="govuk-form-group">
        <fieldset className="govuk-fieldset">
          <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
            {label}
            {required && <span className="govuk-visually-hidden"> (required)</span>}
          </legend>
          {hint && (
            <div id={`${inputId}-hint`} className="govuk-hint">
              {hint}
            </div>
          )}
          <div className="govuk-checkboxes" aria-describedby={hint ? `${inputId}-hint` : undefined}>
            {options.map((option, index) => (
              <div key={index} className="govuk-checkboxes__item">
                <input
                  className="govuk-checkboxes__input"
                  id={`${inputId}-${index}`}
                  name={name}
                  type="checkbox"
                  value={option.value}
                  checked={selected.includes(option.value) || option.selected || false}
                  onChange={(e) => handleOptionChange(option.value, e.target.checked)}
                  required={required && index === 0}
                />
                <label className="govuk-label govuk-checkboxes__label" htmlFor={`${inputId}-${index}`}>
                  {option.text}
                </label>
              </div>
            ))}
          </div>
        </fieldset>
      </div>
    </MojComponentWrapper>
  )
}
