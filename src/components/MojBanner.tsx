import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojBannerProps {
  type?: 'information' | 'warning' | 'success' | 'error'
  title?: string
  children: React.ReactNode
  className?: string
  dismissible?: boolean
  onDismiss?: () => void
}

export const MojBanner: React.FC<MojBannerProps> = ({
  type = 'information',
  title,
  children,
  className,
  dismissible = false,
  onDismiss
}) => {
  const [isVisible, setIsVisible] = React.useState(true)

  const handleDismiss = () => {
    setIsVisible(false)
    onDismiss?.()
  }

  if (!isVisible) {
    return null
  }

  const bannerClasses = `moj-banner moj-banner--${type} ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={bannerClasses}>
      <div className="moj-banner__message">
        {title && (
          <h2 className="moj-banner__title">{title}</h2>
        )}
        <div className="moj-banner__content">
          {children}
        </div>
        {dismissible && (
          <button
            type="button"
            className="moj-banner__dismiss"
            onClick={handleDismiss}
            aria-label="Dismiss banner"
          >
            <span aria-hidden="true">×</span>
          </button>
        )}
      </div>
    </MojComponentWrapper>
  )
}
