import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface MojCardProps {
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
  href?: string
  meta?: string
}

export const MojCard: React.FC<MojCardProps> = ({
  title,
  description,
  children,
  className,
  href,
  meta
}) => {
  const CardContent = () => (
    <div className="moj-card__content">
      <h3 className="moj-card__title">{title}</h3>
      {description && (
        <p className="moj-card__description">{description}</p>
      )}
      {meta && (
        <p className="moj-card__meta">{meta}</p>
      )}
      {children}
    </div>
  )

  const cardClasses = `moj-card ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={cardClasses}>
      {href ? (
        <a href={href} className="moj-card__link">
          <CardContent />
        </a>
      ) : (
        <CardContent />
      )}
    </MojComponentWrapper>
  )
}
