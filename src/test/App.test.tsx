import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Button } from '../components/Button'

describe('Components', () => {
  it('renders Header component', () => {
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}
      >
        <Header />
      </BrowserRouter>
    )
    
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText('React A11y Test')).toBeInTheDocument()
  })

  it('renders Footer component', () => {
    render(<Footer />)
    
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('© Crown copyright')).toBeInTheDocument()
  })

  it('renders Button component', () => {
    render(<Button>Test Button</Button>)
    
    const button = screen.getByRole('button', { name: 'Test Button' })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('govuk-button')
  })

  it('renders Button with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button')).toHaveClass('govuk-button--secondary')
    
    rerender(<Button variant="warning">Warning</Button>)
    expect(screen.getByRole('button')).toHaveClass('govuk-button--warning')
    
    rerender(<Button variant="start">Start</Button>)
    expect(screen.getByRole('button')).toHaveClass('govuk-button--start')
  })
})
