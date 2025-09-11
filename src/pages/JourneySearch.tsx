import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const JourneySearch: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedOption === 'yes') {
      navigate('/journey/search-by-name')
    } else if (selectedOption === 'no') {
      navigate('/journey/search-by-location')
    }
  }

  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl">
            Do you know the name of the court or tribunal
          </h1>
          
          <p className="govuk-body">
            The name of the court or tribunal can be found on a letter, email or text from us.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="govuk-form-group">
              <fieldset className="govuk-fieldset">
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
                  <h2 className="govuk-fieldset__heading">
                    Choose one of the following options:
                  </h2>
                </legend>
                
                <div className="govuk-radios" data-module="govuk-radios">
                  <div className="govuk-radios__item">
                    <input 
                      className="govuk-radios__input" 
                      id="know-name-yes" 
                      name="know-name" 
                      type="radio" 
                      value="yes"
                      checked={selectedOption === 'yes'}
                      onChange={(e) => setSelectedOption(e.target.value)}
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
                      onChange={(e) => setSelectedOption(e.target.value)}
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
