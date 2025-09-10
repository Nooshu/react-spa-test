import React from 'react'

interface MemoizedComponentProps {
  title: string
  content: string
  count: number
}

export const MemoizedComponent: React.FC<MemoizedComponentProps> = React.memo(({ 
  title, 
  content, 
  count 
}) => {
  console.log(`MemoizedComponent rendered with count: ${count}`)
  
  return (
    <div className="govuk-inset-text">
      <h3 className="govuk-heading-s">{title}</h3>
      <p className="govuk-body">{content}</p>
      <p className="govuk-body-s">
        Current count: <strong>{count}</strong>
      </p>
      <p className="govuk-body-s">
        This component only re-renders when its props change, thanks to React.memo.
      </p>
    </div>
  )
})

MemoizedComponent.displayName = 'MemoizedComponent'
