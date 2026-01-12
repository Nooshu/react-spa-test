import React from 'react'
import { JourneyStarter } from '@/components/JourneyStarter'

export const Home: React.FC = () => {
  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl">
            React Single-page Application (SPA) Proof of Concept
          </h1>
          <p className="govuk-body-l">
            Welcome to the React + Next.js for SSR GOV.UK Frontend application, this is the homepage of the application. The FaCT journey starts below
          </p>
        </div>
      </div>

      <JourneyStarter />
    </>
  )
}
