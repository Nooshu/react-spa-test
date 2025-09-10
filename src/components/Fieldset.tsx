import React from 'react'
import { clsx } from 'clsx'

interface FieldsetProps {
  legend: string
  legendClasses?: string
  children: React.ReactNode
  describedBy?: string
  className?: string
}

export const Fieldset: React.FC<FieldsetProps> = ({
  legend,
  legendClasses,
  children,
  describedBy,
  className
}) => {
  return (
    <fieldset 
      className={clsx('govuk-fieldset', className)}
      aria-describedby={describedBy}
    >
      <legend className={clsx('govuk-fieldset__legend', legendClasses)}>
        {legend}
      </legend>
      {children}
    </fieldset>
  )
}
