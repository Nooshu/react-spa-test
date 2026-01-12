'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ErrorMessage, ErrorSummary } from '@/components'

export const JourneySearch: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('')
  const [validationError, setValidationError] = useState<string>('')
  const router = useRouter()
  const errorSummaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Focus on error summary when validation error occurs
    if (validationError && errorSummaryRef.current) {
      errorSummaryRef.current.focus()
    }
  }, [validationError])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validation: Check if an option is selected
    if (!selectedOption) {
      setValidationError('Select whether you know the name of the court or tribunal')
      return
    }

    // Clear any previous errors
    setValidationError('')

    // Navigate based on selection
    if (selectedOption === 'yes') {
      router.push('/journey/search-by-name')
    } else if (selectedOption === 'no') {
      router.push('/journey/search-by-location')
    }
  }

  const handleRadioChange = (value: string) => {
    setSelectedOption(value)
    // Clear validation error when user makes a selection
    if (validationError) {
      setValidationError('')
    }
  }

  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          {validationError && (
            <div ref={errorSummaryRef}>
              <ErrorSummary
                title="There is a problem"
                errorList={[
                  {
                    text: validationError,
                    href: '#know-name-yes'
                  }
                ]}
              />
            </div>
          )}

          <h1 className="govuk-heading-xl">
            Do you know the name of the court or tribunal
          </h1>
          
          <p className="govuk-body">
            The name of the court or tribunal can be found on a letter, email or text from us.
          </p>
          
          <form onSubmit={handleSubmit} action="/journey/search" method="get" noValidate>
            <div className={`govuk-form-group ${validationError ? 'govuk-form-group--error' : ''}`}>
              <fieldset className="govuk-fieldset" aria-describedby={validationError ? 'know-name-error' : undefined}>
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                  <h2 className="govuk-fieldset__heading">
                    Choose one of the following options:
                  </h2>
                </legend>
                
                {validationError && (
                  <ErrorMessage id="know-name-error">
                    {validationError}
                  </ErrorMessage>
                )}
                
                <div className="govuk-radios" data-module="govuk-radios">
                  <div className="govuk-radios__item">
                    <input 
                      className="govuk-radios__input" 
                      id="know-name-yes" 
                      name="know-name" 
                      type="radio" 
                      value="yes"
                      checked={selectedOption === 'yes'}
                      onChange={(e) => handleRadioChange(e.target.value)}
                    />
                    <label className="govuk-label govuk-radios__label" htmlFor="know-name-yes">
                      I have the name
                    </label>
                  </div>
                  
                  <div className="govuk-radios__item">
                    <input 
                      className="govuk-radios__input" 
                      id="know-name-no" 
                      name="know-name" 
                      type="radio" 
                      value="no"
                      checked={selectedOption === 'no'}
                      onChange={(e) => handleRadioChange(e.target.value)}
                    />
                    <label className="govuk-label govuk-radios__label" htmlFor="know-name-no">
                      I do not have the name
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            
            <button 
              className="govuk-button" 
              data-module="govuk-button"
              type="submit"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
