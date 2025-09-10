import React, { useState, useEffect } from 'react'
import { clsx } from 'clsx'

interface CookieBannerProps {
  onAccept?: () => void
  onReject?: () => void
  onHide?: () => void
  className?: string
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  onAccept,
  onReject,
  onHide,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem('cookie-choice')
    if (!cookieChoice) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-choice', 'accepted')
    setIsVisible(false)
    onAccept?.()
  }

  const handleReject = () => {
    localStorage.setItem('cookie-choice', 'rejected')
    setIsVisible(false)
    onReject?.()
  }

  const handleHide = () => {
    setIsHidden(true)
    onHide?.()
  }

  if (!isVisible || isHidden) {
    return null
  }

  return (
    <div 
      className={clsx('govuk-cookie-banner', className)} 
      data-nosnippet 
      role="region" 
      aria-label="Cookie banner"
    >
      <div className="govuk-cookie-banner__message govuk-width-container">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h2 className="govuk-cookie-banner__heading govuk-heading-m">
              Cookies on this service
            </h2>
            <div className="govuk-cookie-banner__content">
              <p className="govuk-body">
                We use some essential cookies to make this service work.
              </p>
              <p className="govuk-body">
                We'd also like to use analytics cookies so we can understand how you use the service and make improvements.
              </p>
            </div>
          </div>
        </div>
        <div className="govuk-button-group">
          <button 
            value="accept" 
            type="button" 
            name="cookies" 
            className="govuk-button" 
            data-module="govuk-button"
            onClick={handleAccept}
          >
            Accept analytics cookies
          </button>
          <button 
            value="reject" 
            type="button" 
            name="cookies" 
            className="govuk-button govuk-button--secondary" 
            data-module="govuk-button"
            onClick={handleReject}
          >
            Reject analytics cookies
          </button>
          <a 
            className="govuk-link" 
            href="/cookies"
            onClick={handleHide}
          >
            View cookies
          </a>
        </div>
      </div>
    </div>
  )
}
