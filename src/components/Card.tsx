import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

interface CardProps {
  title: string
  content: string
  link?: string
  className?: string
}

export const Card: React.FC<CardProps> = ({ 
  title, 
  content, 
  link, 
  className 
}) => {
  const cardContent = (
    <>
      <h3 className="govuk-card__heading">
        {link ? (
          <Link href={link} className="govuk-link">
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>
      <p className="govuk-card__description">{content}</p>
    </>
  )

  return (
    <div className={clsx('govuk-card', className)}>
      <div className="govuk-card__content">
        {cardContent}
      </div>
    </div>
  )
}
