import React, { useState } from 'react'
import { clsx } from 'clsx'

interface PasswordInputProps {
  name: string
  id?: string
  value?: string
  onChange?: (value: string) => void
  errorMessage?: string
  label?: string
  hint?: string
  className?: string
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  id,
  value = '',
  onChange,
  errorMessage,
  label,
  hint,
  className
}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const inputClasses = clsx(
    'govuk-input',
    {
      'govuk-input--error': errorMessage
    }
  )

  const labelClasses = clsx(
    'govuk-label',
    {
      'govuk-label--error': errorMessage
    }
  )

  return (
    <div className={clsx('govuk-form-group', className)}>
      {label && (
        <label className={labelClasses} htmlFor={id || name}>
          {label}
        </label>
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
      
      <div className="govuk-input__wrapper">
        <input
          className={inputClasses}
          id={id || name}
          name={name}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={handleChange}
          aria-describedby={clsx(
            hint ? `${name}-hint` : undefined,
            errorMessage ? `${name}-error` : undefined
          )}
        />
        <button
          className="govuk-button govuk-button--secondary govuk-input__suffix"
          type="button"
          onClick={togglePasswordVisibility}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  )
}
