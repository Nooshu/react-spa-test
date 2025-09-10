import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface Message {
  id: string
  date: string
  sender: string
  timestamp: string
  content: string
  type?: 'sent' | 'received'
}

interface MojMessagesProps {
  messages: Message[]
  className?: string
}

export const MojMessages: React.FC<MojMessagesProps> = ({
  messages,
  className
}) => {
  const messagesClasses = `moj-messages ${className || ''}`.trim()

  // Group messages by date
  const groupedMessages = messages.reduce((groups, message) => {
    const date = message.date
    if (!groups[date]) {
      groups[date] = []
    }
    groups[date].push(message)
    return groups
  }, {} as Record<string, Message[]>)

  return (
    <MojComponentWrapper className={messagesClasses}>
      <div className="moj-messages__container">
        {Object.entries(groupedMessages).map(([date, dateMessages]) => (
          <div key={date} className="moj-messages__date-group">
            <h3 className="moj-messages__date-header">{date}</h3>
            {dateMessages.map((message) => (
              <div 
                key={message.id} 
                className={`moj-messages__message moj-messages__message--${message.type || 'received'}`}
              >
                <div className="moj-messages__message-content">
                  <p className="moj-messages__message-text">{message.content}</p>
                </div>
                <div className="moj-messages__message-meta">
                  <span className="moj-messages__sender">{message.sender}</span>
                  <span className="moj-messages__timestamp">at {message.timestamp}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </MojComponentWrapper>
  )
}
