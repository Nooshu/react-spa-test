import React from 'react'
import { Link } from 'react-router-dom'

export const PhaseBanner: React.FC = () => {
  return (
    <div className="govuk-phase-banner">
      <p className="govuk-phase-banner__content">
        <strong className="govuk-tag govuk-phase-banner__content__tag">
          Alpha
        </strong>
        <span className="govuk-phase-banner__text">
          This is a new service – your{' '}
          <Link to="/feedback" className="govuk-link">
            feedback
          </Link>{' '}
          will help us to improve it.
        </span>
      </p>
    </div>
  )
}
