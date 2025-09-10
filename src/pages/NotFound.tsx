import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'

export const NotFound: React.FC = () => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <h1 className="govuk-heading-xl">Page not found</h1>
        <p className="govuk-body">
          If you typed the web address, check it is correct.
        </p>
        <p className="govuk-body">
          If you pasted the web address, check you copied the entire address.
        </p>
        <p className="govuk-body">
          If the web address is correct or you selected a link or button, 
          <a href="mailto:support@example.com" className="govuk-link">
            contact us
          </a>{' '}
          if you need to speak to someone about your application.
        </p>
        
        <div className="govuk-button-group">
          <Button as={Link} to="/">
            Go to homepage
          </Button>
          <Button variant="secondary" onClick={() => window.history.back()}>
            Go back
          </Button>
        </div>
      </div>
    </div>
  )
}
