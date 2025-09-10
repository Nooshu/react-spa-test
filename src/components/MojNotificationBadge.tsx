import React from 'react'

interface MojNotificationBadgeProps {
  count: number
  maxCount?: number
  className?: string
  ariaLabel?: string
}

export const MojNotificationBadge: React.FC<MojNotificationBadgeProps> = ({
  count,
  maxCount = 99,
  className,
  ariaLabel
}) => {
  const displayCount = count > maxCount ? `${maxCount}+` : count.toString()
  const badgeClasses = `moj-notification-badge ${className || ''}`.trim()
  const ariaLabelText = ariaLabel || `${count} notifications`

  return (
    <span className={badgeClasses} aria-label={ariaLabelText}>
      {displayCount}
    </span>
  )
}
