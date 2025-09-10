import React, { useState, useRef } from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface FileItem {
  id: string
  name: string
  size: number
  type: string
  file: File
}

interface MojMultiFileUploadProps {
  label?: string
  hint?: string
  accept?: string
  maxFiles?: number
  maxFileSize?: number // in bytes
  onFilesChange?: (files: FileItem[]) => void
  onFileRemove?: (fileId: string) => void
  className?: string
  id?: string
  name?: string
  error?: string
}

export const MojMultiFileUpload: React.FC<MojMultiFileUploadProps> = ({
  label = 'Upload files',
  hint,
  accept,
  maxFiles = 10,
  maxFileSize = 10 * 1024 * 1024, // 10MB default
  onFilesChange,
  onFileRemove,
  className,
  id,
  name,
  error
}) => {
  const [files, setFiles] = useState<FileItem[]>([])
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const dropZoneRef = useRef<HTMLDivElement>(null)

  const inputId = id || `moj-multi-file-upload-${Math.random().toString(36).substr(2, 9)}`

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const validateFile = (file: File): string | null => {
    if (file.size > maxFileSize) {
      return `File "${file.name}" is too large. Maximum size is ${formatFileSize(maxFileSize)}.`
    }
    return null
  }

  const addFiles = (newFiles: FileList | File[]) => {
    const fileArray = Array.from(newFiles)
    const validFiles: FileItem[] = []
    const errors: string[] = []

    fileArray.forEach(file => {
      const error = validateFile(file)
      if (error) {
        errors.push(error)
      } else if (files.length + validFiles.length < maxFiles) {
        validFiles.push({
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          size: file.size,
          type: file.type,
          file
        })
      } else {
        errors.push(`Maximum ${maxFiles} files allowed.`)
      }
    })

    if (errors.length > 0) {
      console.warn('File upload errors:', errors)
    }

    if (validFiles.length > 0) {
      const updatedFiles = [...files, ...validFiles]
      setFiles(updatedFiles)
      onFilesChange?.(updatedFiles)
    }
  }

  const removeFile = (fileId: string) => {
    const updatedFiles = files.filter(file => file.id !== fileId)
    setFiles(updatedFiles)
    onFilesChange?.(updatedFiles)
    onFileRemove?.(fileId)
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFiles(e.target.files)
    }
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragIn = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(true)
  }

  const handleDragOut = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files) {
      addFiles(e.dataTransfer.files)
    }
  }

  const uploadClasses = `moj-multi-file-upload ${className || ''}`.trim()
  const dropZoneClasses = `moj-multi-file-upload__drop-zone ${
    dragActive ? 'moj-multi-file-upload__drop-zone--active' : ''
  } ${error ? 'moj-multi-file-upload__drop-zone--error' : ''}`.trim()

  return (
    <MojComponentWrapper className={uploadClasses}>
      <div className="moj-multi-file-upload__form-group">
        <label className="moj-multi-file-upload__label" htmlFor={inputId}>
          {label}
        </label>
        {hint && (
          <div className="moj-multi-file-upload__hint" id={`${inputId}-hint`}>
            {hint}
          </div>
        )}
        {error && (
          <div className="moj-multi-file-upload__error" id={`${inputId}-error`}>
            {error}
          </div>
        )}
        
        <div
          ref={dropZoneRef}
          className={dropZoneClasses}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="moj-multi-file-upload__drop-zone-content">
            <p className="moj-multi-file-upload__drop-zone-text">
              Drag and drop files here or{' '}
              <button
                type="button"
                className="moj-multi-file-upload__button"
                onClick={() => fileInputRef.current?.click()}
              >
                choose files
              </button>
            </p>
            <p className="moj-multi-file-upload__drop-zone-hint">
              Maximum {maxFiles} files, {formatFileSize(maxFileSize)} each
            </p>
          </div>
        </div>

        <input
          ref={fileInputRef}
          id={inputId}
          name={name}
          type="file"
          multiple
          accept={accept}
          onChange={handleFileInputChange}
          className="moj-multi-file-upload__input"
          aria-describedby={`${inputId}-hint ${error ? `${inputId}-error` : ''}`}
        />

        {files.length > 0 && (
          <div className="moj-multi-file-upload__file-list">
            <h3 className="moj-multi-file-upload__file-list-title">
              Selected files ({files.length})
            </h3>
            <ul className="moj-multi-file-upload__file-items">
              {files.map(file => (
                <li key={file.id} className="moj-multi-file-upload__file-item">
                  <div className="moj-multi-file-upload__file-info">
                    <span className="moj-multi-file-upload__file-name">
                      {file.name}
                    </span>
                    <span className="moj-multi-file-upload__file-size">
                      {formatFileSize(file.size)}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="moj-multi-file-upload__remove-button"
                    onClick={() => removeFile(file.id)}
                    aria-label={`Remove ${file.name}`}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </MojComponentWrapper>
  )
}
