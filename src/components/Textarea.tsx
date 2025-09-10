import React, { forwardRef } from 'react'
import { clsx } from 'clsx'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  hint?: string
  error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  label,
  hint,
  error,
  className,
  id,
  ...props
}, ref) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
  const errorId = error ? `${textareaId}-error` : undefined
  const hintId = hint ? `${textareaId}-hint` : undefined

  return (
    <div className="govuk-form-group">
      <label className="govuk-label" htmlFor={textareaId}>
        {label}
      </label>
      {hint && (
        <div id={hintId} className="govuk-hint">
          {hint}
        </div>
      )}
      {error && (
        <span id={errorId} className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span>
          {error}
        </span>
      )}
      <textarea
        ref={ref}
        className={clsx(
          'govuk-textarea',
          { 'govuk-textarea--error': error },
          className
        )}
        id={textareaId}
        aria-describedby={clsx(
          hintId,
          errorId
        )}
        {...props}
      />
    </div>
  )
})

Textarea.displayName = 'Textarea'
