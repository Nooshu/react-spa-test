import React from 'react'
import { MojComponentWrapper } from './MojComponentWrapper'

interface TimelineEvent {
  id: string
  title: string
  description?: string
  timestamp: string
  status?: 'completed' | 'in-progress' | 'pending' | 'cancelled'
  details?: React.ReactNode
}

interface MojTimelineProps {
  events: TimelineEvent[]
  className?: string
}

export const MojTimeline: React.FC<MojTimelineProps> = ({
  events,
  className
}) => {
  const timelineClasses = `moj-timeline ${className || ''}`.trim()

  return (
    <MojComponentWrapper className={timelineClasses}>
      <div className="moj-timeline__container">
        <ol className="moj-timeline__list">
          {events.map((event) => (
            <li key={event.id} className={`moj-timeline__event moj-timeline__event--${event.status || 'completed'}`}>
              <div className="moj-timeline__event-marker" aria-hidden="true">
                {event.status === 'completed' && '✓'}
                {event.status === 'in-progress' && '⏳'}
                {event.status === 'pending' && '○'}
                {event.status === 'cancelled' && '✗'}
                {!event.status && '✓'}
              </div>
              
              <div className="moj-timeline__event-content">
                <h3 className="moj-timeline__event-title">{event.title}</h3>
                <time className="moj-timeline__event-timestamp" dateTime={event.timestamp}>
                  {event.timestamp}
                </time>
                {event.description && (
                  <p className="moj-timeline__event-description">{event.description}</p>
                )}
                {event.details && (
                  <div className="moj-timeline__event-details">
                    {event.details}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </MojComponentWrapper>
  )
}
