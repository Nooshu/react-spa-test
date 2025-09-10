import React, { useState } from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface Column {
  key: string
  label: string
  sortable?: boolean
  width?: string
}

interface Row {
  [key: string]: React.ReactNode
}

interface MojSortableTableProps {
  columns: Column[]
  rows: Row[]
  caption?: string
  className?: string
  onSort?: (column: string, direction: 'asc' | 'desc') => void
}

export const MojSortableTable: React.FC<MojSortableTableProps> = ({
  columns,
  rows,
  caption,
  className,
  onSort
}) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  
  const tableClasses = `moj-sortable-table ${className || ''}`.trim()

  const handleSort = (columnKey: string) => {
    const column = columns.find(col => col.key === columnKey)
    if (!column?.sortable) return

    let newDirection: 'asc' | 'desc' = 'asc'
    if (sortColumn === columnKey && sortDirection === 'asc') {
      newDirection = 'desc'
    }

    setSortColumn(columnKey)
    setSortDirection(newDirection)
    onSort?.(columnKey, newDirection)
  }

  const getSortIcon = (columnKey: string) => {
    if (sortColumn !== columnKey) return '↕️'
    return sortDirection === 'asc' ? '↑' : '↓'
  }

  return (
    <MojComponentWrapper className={tableClasses}>
      <table className="govuk-table moj-sortable-table__table">
        {caption && (
          <caption className="govuk-table__caption">{caption}</caption>
        )}
        <thead className="govuk-table__head">
          <tr className="govuk-table__row">
            {columns.map((column) => (
              <th 
                key={column.key}
                className={`govuk-table__header ${column.sortable ? 'moj-sortable-table__header--sortable' : ''}`}
                style={column.width ? { width: column.width } : undefined}
                scope="col"
                onClick={() => column.sortable && handleSort(column.key)}
              >
                <span className="moj-sortable-table__header-content">
                  {column.label}
                  {column.sortable && (
                    <span className="moj-sortable-table__sort-icon" aria-hidden="true">
                      {getSortIcon(column.key)}
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="govuk-table__body">
          {rows.map((row, index) => (
            <tr key={index} className="govuk-table__row">
              {columns.map((column) => (
                <td key={column.key} className="govuk-table__cell">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </MojComponentWrapper>
  )
}
