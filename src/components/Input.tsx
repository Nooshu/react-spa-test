import React, { forwardRef } from 'react'
import { clsx } from 'clsx'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  hint?: string
  error?: string
  width?: 'full' | 'three-quarters' | 'two-thirds' | 'one-half' | 'one-third' | 'one-quarter' | '20' | '10' | '5' | '4' | '3' | '2'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  hint,
  error,
  width = 'full',
  className,
  id,
  ...props
}, ref) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  const errorId = error ? `${inputId}-error` : undefined
  const hintId = hint ? `${inputId}-hint` : undefined

  const widthClasses = {
    'full': 'govuk-input--width-full',
    'three-quarters': 'govuk-input--width-three-quarters',
    'two-thirds': 'govuk-input--width-two-thirds',
    'one-half': 'govuk-input--width-one-half',
    'one-third': 'govuk-input--width-one-third',
    'one-quarter': 'govuk-input--width-one-quarter',
    '20': 'govuk-input--width-20',
    '10': 'govuk-input--width-10',
    '5': 'govuk-input--width-5',
    '4': 'govuk-input--width-4',
    '3': 'govuk-input--width-3',
    '2': 'govuk-input--width-2'
  }

  return (
    <div className="govuk-form-group">
      <label className="govuk-label" htmlFor={inputId}>
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
      <input
        ref={ref}
        className={clsx(
          'govuk-input',
          widthClasses[width],
          { 'govuk-input--error': error },
          className
        )}
        id={inputId}
        aria-describedby={clsx(
          hintId,
          errorId
        )}
        {...props}
      />
    </div>
  )
})

Input.displayName = 'Input'
