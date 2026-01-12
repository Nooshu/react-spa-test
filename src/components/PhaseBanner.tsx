import React from 'react'
import Link from 'next/link'

export const PhaseBanner: React.FC = () => {
  return (
    <div className="govuk-phase-banner">
      <p className="govuk-phase-banner__content">
        <strong className="govuk-tag govuk-phase-banner__content__tag">
          beta
        </strong>
        <span className="govuk-phase-banner__text">
          This is a new service – your{' '}
          <Link href="/feedback" className="govuk-link">
            feedback
          </Link>{' '}
          will help us to improve it.
        </span>
        <span className="govuk-phase-banner__text govuk-phase-banner__text--right">
          <Link href="/cymraeg" className="govuk-link">
            Cymraeg
          </Link>
        </span>
      </p>
    </div>
  )
}
