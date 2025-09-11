import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const JourneySearchByName: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('manchester')
  const navigate = useNavigate()

  // Mock search results - in a real app this would come from an API
  const mockResults = [
    { id: 1, name: 'Manchester Crown Court (Minshull St)', url: '/court/manchester-crown-court' },
    { id: 2, name: 'Birmingham Crown Court', url: '/court/birmingham-crown-court' },
    { id: 3, name: 'Inner London Crown Court', url: '/court/inner-london-crown-court' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would trigger a new search
    console.log('Searching for:', searchTerm)
  }

  const handleResultClick = (courtId: number) => {
    // Navigate to court details page
    if (courtId === 1) {
      navigate('/court/manchester-crown-court')
    } else if (courtId === 2) {
      navigate('/court/birmingham-crown-court')
    } else if (courtId === 3) {
      navigate('/court/inner-london-crown-court')
    }
  }

  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl">
            What is the name or address of the court or tribunal?
          </h1>
          
          <p className="govuk-body">
            The name of the court or tribunal can be found on a letter, email or text from us.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="govuk-form-group">
              <label className="govuk-label" htmlFor="court-search">
                Enter a court name, address, town or city
              </label>
              <div id="court-search-hint" className="govuk-hint">
                For example, 'Manchester Civil Justice Centre' or 'SW1H 9AJ'
              </div>
              <input 
                className="govuk-input" 
                id="court-search" 
                name="court-search" 
                type="text" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-describedby="court-search-hint"
              />
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

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-two-thirds">
          <p className="govuk-body">
            We found courts or tribunals matching your search for '{searchTerm}'.
          </p>
          <p className="govuk-body">
            Most relevant results displayed.
          </p>
          
          <hr className="govuk-section-break govuk-section-break--visible" />
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-two-thirds">
          <h2 className="govuk-heading-l">Search results</h2>
          
          <div className="journey-search-results">
            <ul className="govuk-list">
              {mockResults.map((result) => (
                <li key={result.id} className="govuk-!-margin-bottom-2">
                  <a
                    href="#"
                    className="govuk-link govuk-link--no-visited-state"
                    onClick={(e) => {
                      e.preventDefault()
                      handleResultClick(result.id)
                    }}
                  >
                    {result.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
