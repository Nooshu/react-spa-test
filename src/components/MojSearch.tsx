import React, { useState } from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojSearchProps {
  label?: string
  hint?: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
  className?: string
  id?: string
  name?: string
}

export const MojSearch: React.FC<MojSearchProps> = ({
  label = 'Search',
  hint,
  placeholder = 'Enter search terms...',
  value = '',
  onChange,
  onSubmit,
  className,
  id,
  name
}) => {
  const [searchValue, setSearchValue] = useState(value)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setSearchValue(newValue)
    onChange?.(newValue)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(searchValue)
  }

  const searchClasses = `moj-search ${className || ''}`.trim()
  const inputId = id || `moj-search-${Math.random().toString(36).substr(2, 9)}`

  return (
    <MojComponentWrapper className={searchClasses}>
      <form className="moj-search__form" onSubmit={handleSubmit}>
        <div className="govuk-form-group">
          <label className="govuk-label" htmlFor={inputId}>
            {label}
          </label>
          {hint && (
            <div id={`${inputId}-hint`} className="govuk-hint">
              {hint}
            </div>
          )}
          <input
            id={inputId}
            name={name}
            className="govuk-input moj-search__input"
            type="search"
            placeholder={placeholder}
            value={searchValue}
            onChange={handleInputChange}
            aria-describedby={hint ? `${inputId}-hint` : undefined}
          />
        </div>
        <button
          type="submit"
          className="govuk-button moj-search__button"
          data-module="govuk-button"
        >
          Search
        </button>
      </form>
    </MojComponentWrapper>
  )
}
