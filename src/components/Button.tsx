import React from 'react'
import { clsx } from 'clsx'
import { Link } from 'react-router-dom'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'warning' | 'start'
  size?: 'small' | 'medium' | 'large'
  className?: string
}

interface ButtonProps extends BaseButtonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  as?: 'button'
  children: React.ReactNode
}

interface LinkButtonProps extends BaseButtonProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  as: 'a'
  href?: string
  children: React.ReactNode
}

interface RouterLinkButtonProps extends BaseButtonProps {
  as: typeof Link
  to: string
  children: React.ReactNode
}

type ButtonComponentProps = ButtonProps | LinkButtonProps | RouterLinkButtonProps

export const Button: React.FC<ButtonComponentProps> = ({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  as = 'button',
  ...props
}) => {
  const baseClasses = 'govuk-button'
  
  const variantClasses = {
    primary: '',
    secondary: 'govuk-button--secondary',
    warning: 'govuk-button--warning',
    start: 'govuk-button--start'
  }
  
  const sizeClasses = {
    small: 'govuk-button--small',
    medium: '',
    large: 'govuk-button--large'
  }

  const buttonClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  const iconElement = variant === 'start' && (
    <svg
      className="govuk-button__start-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="17.5"
      height="19"
      viewBox="0 0 33 40"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
    </svg>
  )

  if (as === 'a') {
    return (
      <a
        className={buttonClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
        {iconElement}
      </a>
    )
  }

  if (as === Link) {
    return (
      <Link
        className={buttonClasses}
        {...(props as { to: string })}
      >
        {children}
        {iconElement}
      </Link>
    )
  }

  return (
    <button
      className={buttonClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
      {iconElement}
    </button>
  )
}
