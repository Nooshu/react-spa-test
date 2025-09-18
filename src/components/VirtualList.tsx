import React from 'react'
import { List } from 'react-window'

interface VirtualListProps<T> {
  items: T[]
  height: number
  itemHeight: number
  renderItem: ({ item, index }: { item: T; index: number }) => React.ReactNode
  className?: string
}

export const VirtualList = <T,>({ 
  items, 
  height, 
  itemHeight, 
  renderItem, 
  className 
}: VirtualListProps<T>) => {
  return (
    <div className={className}>
      <List<object>
        rowCount={items.length}
        rowHeight={itemHeight}
        style={{ height, width: "100%" }}
        rowComponent={({ index, style }: { index: number; style: React.CSSProperties }) => (
          <div style={style}>
            {renderItem({ item: items[index], index })}
          </div>
        )}
        rowProps={{} as any}
      />
    </div>
  )
}