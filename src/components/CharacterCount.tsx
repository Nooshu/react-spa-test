import React, { useState, useEffect } from 'react'
import { clsx } from 'clsx'

interface CharacterCountProps {
  maxLength: number
  threshold?: number
  children: React.ReactNode
  className?: string
}

export const CharacterCount: React.FC<CharacterCountProps> = ({ 
  maxLength, 
  threshold = 0.9,
  children,
  className 
}) => {
  const [count, setCount] = useState(0)
  const [isNearLimit, setIsNearLimit] = useState(false)
  const [isOverLimit, setIsOverLimit] = useState(false)

  useEffect(() => {
    const thresholdCount = Math.floor(maxLength * threshold)
    setIsNearLimit(count >= thresholdCount && count < maxLength)
    setIsOverLimit(count > maxLength)
  }, [count, maxLength, threshold])

  const handleInput = (event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = event.currentTarget.value
    setCount(value.length)
  }

  const messageClasses = clsx(
    'govuk-character-count__message',
    {
      'govuk-character-count__message--disabled': count === 0,
      'govuk-character-count__message--warning': isNearLimit,
      'govuk-character-count__message--error': isOverLimit
    }
  )

  const remainingCount = maxLength - count
  const messageText = isOverLimit 
    ? `You have ${Math.abs(remainingCount)} characters too many`
    : `You have ${remainingCount} characters remaining`

  return (
    <div className={clsx('govuk-character-count', className)} data-module="govuk-character-count">
      {React.cloneElement(children as React.ReactElement, {
        onInput: handleInput,
        maxLength: maxLength,
        'aria-describedby': 'character-count-message'
      })}
      <div id="character-count-message" className={messageClasses} aria-live="polite">
        {messageText}
      </div>
    </div>
  )
}
