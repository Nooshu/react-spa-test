import React, { forwardRef } from 'react'
import { clsx } from 'clsx'

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  hint?: string
  error?: string
  options: SelectOption[]
  width?: 'full' | 'three-quarters' | 'two-thirds' | 'one-half' | 'one-third' | 'one-quarter' | '20' | '10' | '5' | '4' | '3' | '2'
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  label,
  hint,
  error,
  options,
  width = 'full',
  className,
  id,
  ...props
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`
  const errorId = error ? `${selectId}-error` : undefined
  const hintId = hint ? `${selectId}-hint` : undefined

  const widthClasses = {
    'full': 'govuk-select--width-full',
    'three-quarters': 'govuk-select--width-three-quarters',
    'two-thirds': 'govuk-select--width-two-thirds',
    'one-half': 'govuk-select--width-one-half',
    'one-third': 'govuk-select--width-one-third',
    'one-quarter': 'govuk-select--width-one-quarter',
    '20': 'govuk-select--width-20',
    '10': 'govuk-select--width-10',
    '5': 'govuk-select--width-5',
    '4': 'govuk-select--width-4',
    '3': 'govuk-select--width-3',
    '2': 'govuk-select--width-2'
  }

  return (
    <div className="govuk-form-group">
      <label className="govuk-label" htmlFor={selectId}>
        {label}
      </label>
      {hint && (
        <div id={hintId} className="govuk-hint">
          {hint}
        </div>
      )}
      {error && (
        <span id={errorId} className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span>
          {error}
        </span>
      )}
      <select
        ref={ref}
        className={clsx(
          'govuk-select',
          widthClasses[width],
          { 'govuk-select--error': error },
          className
        )}
        id={selectId}
        aria-describedby={clsx(
          hintId,
          errorId
        )}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
})

Select.displayName = 'Select'
