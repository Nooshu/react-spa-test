import React, { Component, ErrorInfo, ReactNode } from 'react'
import { H1, Paragraph, Panel } from 'govuk-react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Panel title="Something went wrong">
          <H1>Error</H1>
          <Paragraph>
            We're sorry, but something went wrong. Please try refreshing the page.
          </Paragraph>
          <Paragraph>
            If the problem persists, please contact support.
          </Paragraph>
        </Panel>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
