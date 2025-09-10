import React from 'react'
import { FixedSizeList as List } from 'react-window'

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
  const ItemRenderer = ({ index, style }: { index: number; style: React.CSSProperties }) => (
    <div style={style}>
      {renderItem({ item: items[index], index })}
    </div>
  )

  return (
    <div className={className}>
      <List
        height={height}
        itemCount={items.length}
        itemSize={itemHeight}
        width="100%"
      >
        {ItemRenderer}
      </List>
    </div>
  )
}
