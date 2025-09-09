import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// Mock the GOV.UK React components to avoid import issues in tests
vi.mock('govuk-react', () => ({
  Header: ({ children, ...props }: any) => <header {...props}>{children}</header>,
  Footer: ({ children, ...props }: any) => <footer {...props}>{children}</footer>,
  Main: ({ children, ...props }: any) => <main {...props}>{children}</main>,
  Navigation: ({ items, ...props }: any) => (
    <nav {...props}>
      {items?.map((item: any, index: number) => (
        <a key={index} href={item.href}>
          {item.text}
        </a>
      ))}
    </nav>
  ),
  LoadingBox: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  H1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
  H2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
  H3: ({ children, ...props }: any) => <h3 {...props}>{children}</h3>,
  Paragraph: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  Button: ({ children, ...props }: any) => <button {...props}>{children}</button>,
  Link: ({ children, ...props }: any) => <a {...props}>{children}</a>,
  Panel: ({ children, title, ...props }: any) => (
    <div {...props}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  ),
  GridRow: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  GridCol: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  Tag: ({ children, ...props }: any) => <span {...props}>{children}</span>
}))

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Skip to main content')).toBeInTheDocument()
  })

  it('renders the main navigation', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Forms')).toBeInTheDocument()
    expect(screen.getByText('Components')).toBeInTheDocument()
    expect(screen.getByText('Performance')).toBeInTheDocument()
  })
})
