import React from 'react'
import { Link } from 'react-router-dom'
import { PerformanceMetrics } from '@/components/PerformanceMetrics'

export const Home: React.FC = () => {
  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl">
            React Accessibility Proof of Concept
          </h1>
          <p className="govuk-body-l">
            A React-based Single Page Application built with GOV.UK and MoJ Design Systems 
            to demonstrate accessibility and performance best practices.
          </p>
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-one-half">
          <h2 className="govuk-heading-l">Purpose</h2>
          <p className="govuk-body">
            This proof of concept explores how accessible and performant a React SPA 
            can be when built with GOV.UK and MoJ Design System components. It serves as 
            a testing ground for:
          </p>
          <ul className="govuk-list govuk-list--bullet">
            <li><strong>Accessibility</strong>: WCAG 2.1 AA compliance, screen reader support, keyboard navigation</li>
            <li><strong>Performance</strong>: Bundle optimization, lazy loading, memoization, virtual scrolling</li>
            <li><strong>Developer Experience</strong>: TypeScript, modern tooling, component reusability</li>
          </ul>
        </div>
        <div className="govuk-grid-column-one-half">
          <h2 className="govuk-heading-l">Features</h2>
          <div className="govuk-inset-text">
            <h3 className="govuk-heading-s">Accessibility</h3>
            <ul className="govuk-list govuk-list--bullet">
              <li>WCAG 2.1 AA compliant components</li>
              <li>Screen reader optimized</li>
              <li>Full keyboard navigation support</li>
              <li>Focus management and ARIA labels</li>
            </ul>
          </div>
          <div className="govuk-inset-text">
            <h3 className="govuk-heading-s">Performance</h3>
            <ul className="govuk-list govuk-list--bullet">
              <li>Code splitting and lazy loading</li>
              <li>React.memo optimizations</li>
              <li>Virtual scrolling for large datasets</li>
              <li>Bundle analysis and optimization</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Explore the Application</h2>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-one-quarter">
              <div className="govuk-card">
                <div className="govuk-card__content">
                  <h3 className="govuk-heading-s">
                    <Link to="/forms" className="govuk-link">
                      Forms
                    </Link>
                  </h3>
                  <p className="govuk-body-s">
                    Comprehensive form examples with validation, error handling, and accessibility features.
                  </p>
                </div>
              </div>
            </div>
            <div className="govuk-grid-column-one-quarter">
              <div className="govuk-card">
                <div className="govuk-card__content">
                  <h3 className="govuk-heading-s">
                    <Link to="/components" className="govuk-link">
                      Components
                    </Link>
                  </h3>
                  <p className="govuk-body-s">
                    Interactive gallery showcasing GOV.UK Design System components built from scratch.
                  </p>
                </div>
              </div>
            </div>
            <div className="govuk-grid-column-one-quarter">
              <div className="govuk-card">
                <div className="govuk-card__content">
                  <h3 className="govuk-heading-s">
                    <Link to="/performance" className="govuk-link">
                      Performance
                    </Link>
                  </h3>
                  <p className="govuk-body-s">
                    Performance testing and optimization examples with real-time metrics.
                  </p>
                </div>
              </div>
            </div>
            <div className="govuk-grid-column-one-quarter">
              <div className="govuk-card">
                <div className="govuk-card__content">
                  <h3 className="govuk-heading-s">Documentation</h3>
                  <p className="govuk-body-s">
                    <a href="https://design-system.service.gov.uk/" className="govuk-link" target="_blank" rel="noopener noreferrer">
                      GOV.UK Design System
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Current Performance Metrics</h2>
          <PerformanceMetrics />
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <div className="govuk-warning-text">
            <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
            <strong className="govuk-warning-text__text">
              <span className="govuk-warning-text__assistive">Warning</span>
              This is an alpha version for testing purposes. Components are built from scratch 
              and may not include all features of the official GOV.UK Design System.
            </strong>
          </div>
        </div>
      </div>
    </>
  )
}
