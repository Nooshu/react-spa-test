import React, { useState } from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojSearchProps {
  placeholder?: string
  label?: string
  value?: string
  onChange?: (value: string) => void
  onSubmit?: (value: string) => void
  className?: string
  id?: string
  name?: string
}

export const MojSearch: React.FC<MojSearchProps> = ({
  placeholder = 'Search',
  label = 'Search',
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
        <div className="moj-search__form-group">
          <label className="moj-search__label" htmlFor={inputId}>
            {label}
          </label>
          <div className="moj-search__input-wrapper">
            <input
              id={inputId}
              name={name}
              className="moj-search__input"
              type="search"
              placeholder={placeholder}
              value={searchValue}
              onChange={handleInputChange}
              aria-describedby={`${inputId}-hint`}
            />
            <button
              type="submit"
              className="moj-search__button"
              aria-label="Search"
            >
              <span className="moj-search__button-text">Search</span>
            </button>
          </div>
        </div>
      </form>
    </MojComponentWrapper>
  )
}
