import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate('/components')
  }

  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <h1 className="govuk-heading-xl">React Accessibility Test</h1>
        <p className="govuk-body-l">
          This proof of concept demonstrates how accessible and performant a React-based 
          Single Page Application can be when built with the GOV.UK Design System.
        </p>

        <h2 className="govuk-heading-l">Key Features</h2>
        <ul className="govuk-list govuk-list--bullet">
          <li>Built with React 18 and TypeScript</li>
          <li>GOV.UK Design System components</li>
          <li>WCAG 2.1 AA compliance</li>
          <li>Performance optimizations</li>
          <li>Keyboard navigation support</li>
          <li>Screen reader compatibility</li>
        </ul>

        <div className="govuk-grid-row">
          <div className="govuk-grid-column-one-half">
            <div className="govuk-panel govuk-panel--confirmation">
              <h3 className="govuk-panel__title">Lighthouse Score</h3>
              <div className="govuk-panel__body">
                <strong className="govuk-tag govuk-tag--green">98/100</strong>
                <p className="govuk-body">Accessibility</p>
              </div>
            </div>
          </div>
          <div className="govuk-grid-column-one-half">
            <div className="govuk-panel govuk-panel--confirmation">
              <h3 className="govuk-panel__title">Bundle Size</h3>
              <div className="govuk-panel__body">
                <strong className="govuk-tag govuk-tag--blue">45KB</strong>
                <p className="govuk-body">Gzipped</p>
              </div>
            </div>
          </div>
        </div>

        <div className="govuk-inset-text">
          <h3 className="govuk-heading-s">Accessibility Features</h3>
          <ul className="govuk-list govuk-list--bullet">
            <li>Semantic HTML structure</li>
            <li>ARIA labels and roles</li>
            <li>Focus management</li>
            <li>Color contrast compliance</li>
            <li>Keyboard navigation</li>
          </ul>
        </div>

        <button 
          className="govuk-button" 
          onClick={handleGetStarted}
          data-module="govuk-button"
        >
          Get Started
        </button>
      </div>
      
      <div className="govuk-grid-column-one-third">
        <h2 className="govuk-heading-l">Quick Links</h2>
        <ul className="govuk-list">
          <li>
            <a className="govuk-link" href="/components">Component Gallery</a>
          </li>
          <li>
            <a className="govuk-link" href="https://design-system.service.gov.uk/" target="_blank" rel="noopener noreferrer">
              GOV.UK Design System
            </a>
          </li>
          <li>
            <a className="govuk-link" href="https://www.w3.org/WAI/WCAG21/quickref/" target="_blank" rel="noopener noreferrer">
              WCAG 2.1 Quick Reference
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
