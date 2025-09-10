import React, { useState, useEffect } from 'react'
import { clsx } from 'clsx'

interface ExitThisPageProps {
  className?: string
}

export const ExitThisPage: React.FC<ExitThisPageProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Show when Escape key is pressed
      if (event.key === 'Escape') {
        setIsVisible(true)
      }
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      // Hide when Escape key is released
      if (event.key === 'Escape') {
        setIsVisible(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('keyup', handleKeyUp)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const handleExit = () => {
    // Navigate to a safe page or close the tab
    window.location.href = 'https://www.gov.uk'
  }

  if (!isVisible) {
    return null
  }

  return (
    <div 
      className={clsx('govuk-exit-this-page', className)}
      data-module="govuk-exit-this-page"
    >
      <button 
        className="govuk-exit-this-page__button"
        onClick={handleExit}
        aria-label="Exit this page (opens in a new tab)"
      >
        Exit this page
      </button>
    </div>
  )
}
