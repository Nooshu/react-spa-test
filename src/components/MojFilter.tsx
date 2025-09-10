import React, { useState } from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojFilterProps {
  title: string
  filters: Array<{
    label: string
    name: string
    type: 'checkbox' | 'radio' | 'select'
    options: Array<{
      value: string
      text: string
      checked?: boolean
    }>
  }>
  onFilterChange?: (filters: Record<string, string[]>) => void
  className?: string
}

export const MojFilter: React.FC<MojFilterProps> = ({
  title,
  filters,
  onFilterChange,
  className
}) => {
  const [filterValues, setFilterValues] = useState<Record<string, string[]>>({})

  const handleFilterChange = (filterName: string, value: string, checked: boolean) => {
    const currentValues = filterValues[filterName] || []
    let newValues: string[]
    
    if (checked) {
      newValues = [...currentValues, value]
    } else {
      newValues = currentValues.filter(v => v !== value)
    }
    
    const newFilterValues = { ...filterValues, [filterName]: newValues }
    setFilterValues(newFilterValues)
    onFilterChange?.(newFilterValues)
  }

  const filterClasses = `moj-filter ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={filterClasses}>
      <div className="moj-filter__header">
        <h3 className="moj-filter__title">{title}</h3>
      </div>
      
      <div className="moj-filter__content">
        {filters.map((filter, index) => (
          <div key={index} className="moj-filter__group">
            <fieldset className="govuk-fieldset">
              <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
                {filter.label}
              </legend>
              
              {filter.type === 'checkbox' && (
                <div className="govuk-checkboxes">
                  {filter.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="govuk-checkboxes__item">
                      <input
                        className="govuk-checkboxes__input"
                        id={`${filter.name}-${optionIndex}`}
                        name={filter.name}
                        type="checkbox"
                        value={option.value}
                        checked={filterValues[filter.name]?.includes(option.value) || option.checked || false}
                        onChange={(e) => handleFilterChange(filter.name, option.value, e.target.checked)}
                      />
                      <label className="govuk-label govuk-checkboxes__label" htmlFor={`${filter.name}-${optionIndex}`}>
                        {option.text}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              
              {filter.type === 'radio' && (
                <div className="govuk-radios">
                  {filter.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="govuk-radios__item">
                      <input
                        className="govuk-radios__input"
                        id={`${filter.name}-${optionIndex}`}
                        name={filter.name}
                        type="radio"
                        value={option.value}
                        checked={filterValues[filter.name]?.includes(option.value) || option.checked || false}
                        onChange={(e) => handleFilterChange(filter.name, option.value, e.target.checked)}
                      />
                      <label className="govuk-label govuk-radios__label" htmlFor={`${filter.name}-${optionIndex}`}>
                        {option.text}
                      </label>
                    </div>
                  ))}
                </div>
              )}
              
              {filter.type === 'select' && (
                <select
                  className="govuk-select"
                  name={filter.name}
                  value={filterValues[filter.name]?.[0] || ''}
                  onChange={(e) => {
                    const newValues = e.target.value ? [e.target.value] : []
                    setFilterValues({ ...filterValues, [filter.name]: newValues })
                    onFilterChange?.({ ...filterValues, [filter.name]: newValues })
                  }}
                >
                  <option value="">All</option>
                  {filter.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              )}
            </fieldset>
          </div>
        ))}
      </div>
    </MojComponentWrapper>
  )
}
