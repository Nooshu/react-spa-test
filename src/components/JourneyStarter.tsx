import React from 'react'
import { Link } from 'react-router-dom'

export const JourneyStarter: React.FC = () => {
  return (
    <div className="govuk-grid-row govuk-!-margin-top-6">
      <div className="govuk-grid-column-two-thirds">
        <div className="journey-starter">
          <div className="journey-starter__content">
            <h2 className="journey-starter__title">Try our new journey</h2>
            <p className="journey-starter__subtitle">Find a Court or Tribunal Service</p>
          </div>
          <div className="journey-starter__action">
            <Link 
              to="/journey" 
              className="govuk-button govuk-button--start journey-starter__button"
              role="button"
              aria-label="Start Find a Court or Tribunal Service journey"
            >
              Start
              <svg 
                className="govuk-button__start-icon" 
                xmlns="http://www.w3.org/2000/svg" 
                width="17.5" 
                height="19" 
                viewBox="0 0 33 40" 
                aria-hidden="true" 
                focusable="false"
              >
                <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
