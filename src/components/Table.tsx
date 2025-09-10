import React from 'react'
import { clsx } from 'clsx'

interface TableProps {
  caption: string
  headers: string[]
  rows: string[][]
  className?: string
}

export const Table: React.FC<TableProps> = ({ 
  caption, 
  headers, 
  rows, 
  className 
}) => {
  return (
    <table className={clsx('govuk-table', className)}>
      <caption className="govuk-table__caption">{caption}</caption>
      <thead className="govuk-table__head">
        <tr className="govuk-table__row">
          {headers.map((header, index) => (
            <th
              key={index}
              className="govuk-table__header"
              scope="col"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="govuk-table__body">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="govuk-table__row">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="govuk-table__cell">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
