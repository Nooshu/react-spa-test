import React, { useRef } from 'react'
import { clsx } from 'clsx'

interface FileUploadProps {
  name: string
  id?: string
  value?: File | null
  onChange?: (file: File | null) => void
  errorMessage?: string
  label?: string
  hint?: string
  accept?: string
  multiple?: boolean
  className?: string
}

export const FileUpload: React.FC<FileUploadProps> = ({
  name,
  id,
  onChange,
  errorMessage,
  label,
  hint,
  accept,
  multiple = false,
  className
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null
    onChange?.(file)
  }

  const inputClasses = clsx(
    'govuk-file-upload',
    {
      'govuk-file-upload--error': errorMessage
    }
  )

  const labelClasses = clsx(
    'govuk-label',
    {
      'govuk-label--error': errorMessage
    }
  )

  return (
    <div className={clsx('govuk-form-group', className)}>
      {label && (
        <label className={labelClasses} htmlFor={id || name}>
          {label}
        </label>
      )}
      
      {hint && (
        <div id={`${name}-hint`} className="govuk-hint">
          {hint}
        </div>
      )}
      
      {errorMessage && (
        <span id={`${name}-error`} className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span>
          {errorMessage}
        </span>
      )}
      
      <input
        ref={fileInputRef}
        className={inputClasses}
        id={id || name}
        name={name}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        aria-describedby={clsx(
          hint ? `${name}-hint` : undefined,
          errorMessage ? `${name}-error` : undefined
        )}
      />
    </div>
  )
}
