import React from 'react'
import Link from 'next/link'
import { clsx } from 'clsx'

interface TaskListItem {
  name: string
  href?: string
  to?: string
  status: 'not-started' | 'in-progress' | 'completed' | 'cannot-start'
  statusText?: string
}

interface TaskListProps {
  items: TaskListItem[]
  className?: string
}

export const TaskList: React.FC<TaskListProps> = ({ items, className }) => {
  const getStatusClasses = (status: TaskListItem['status']) => {
    switch (status) {
      case 'not-started':
        return 'govuk-tag--grey'
      case 'in-progress':
        return 'govuk-tag--blue'
      case 'completed':
        return 'govuk-tag--green'
      case 'cannot-start':
        return 'govuk-tag--grey'
      default:
        return ''
    }
  }

  const getStatusText = (status: TaskListItem['status'], customText?: string) => {
    if (customText) return customText
    
    switch (status) {
      case 'not-started':
        return 'Not started'
      case 'in-progress':
        return 'In progress'
      case 'completed':
        return 'Completed'
      case 'cannot-start':
        return 'Cannot start yet'
      default:
        return status
    }
  }

  return (
    <ol className={clsx('govuk-task-list', className)}>
      {items.map((item, index) => (
        <li key={index} className="govuk-task-list__item">
          <div className="govuk-task-list__name-and-hint">
            {item.href ? (
              <a href={item.href} className="govuk-link govuk-task-list__link">
                {item.name}
              </a>
            ) : item.to ? (
              <Link href={item.to} className="govuk-link govuk-task-list__link">
                {item.name}
              </Link>
            ) : (
              <span className="govuk-task-list__name">
                {item.name}
              </span>
            )}
          </div>
          <div className="govuk-task-list__status">
            <strong className={clsx('govuk-tag', getStatusClasses(item.status))}>
              {getStatusText(item.status, item.statusText)}
            </strong>
          </div>
        </li>
      ))}
    </ol>
  )
}
