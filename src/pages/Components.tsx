import React from 'react'

const Components: React.FC = () => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-two-thirds">
        <h1 className="govuk-heading-xl">Component Gallery</h1>
        <p className="govuk-body-l">
          This page showcases various GOV.UK Design System components and their accessibility features.
        </p>

        <h2 className="govuk-heading-l">Interactive Components</h2>

        <h3 className="govuk-heading-m">Buttons</h3>
        <div className="govuk-button-group">
          <button className="govuk-button" data-module="govuk-button">
            Primary button
          </button>
          <button className="govuk-button govuk-button--secondary" data-module="govuk-button">
            Secondary button
          </button>
          <button className="govuk-button govuk-button--warning" data-module="govuk-button">
            Warning button
          </button>
        </div>

        <h3 className="govuk-heading-m">Links</h3>
        <p className="govuk-body">
          <a className="govuk-link" href="https://design-system.service.gov.uk/" target="_blank" rel="noopener noreferrer">
            External link to GOV.UK Design System
          </a>
        </p>

        <h3 className="govuk-heading-m">Details and Summary</h3>
        <details className="govuk-details" data-module="govuk-details">
          <summary className="govuk-details__summary">
            <span className="govuk-details__summary-text">
              Help with nationality
            </span>
          </summary>
          <div className="govuk-details__text">
            <p className="govuk-body">
              If you're not sure about your nationality, try to find out from an official document like a passport or national ID card.
            </p>
          </div>
        </details>

        <details className="govuk-details" data-module="govuk-details">
          <summary className="govuk-details__summary">
            <span className="govuk-details__summary-text">
              Writing well for the web
            </span>
          </summary>
          <div className="govuk-details__text">
            <p className="govuk-body">
              This is the content for Writing well for the web. It includes tips on clear, concise writing that works well on digital platforms.
            </p>
          </div>
        </details>

        <h2 className="govuk-heading-l">Content Components</h2>

        <h3 className="govuk-heading-m">Panels</h3>
        <div className="govuk-panel govuk-panel--confirmation">
          <h3 className="govuk-panel__title">Important</h3>
          <div className="govuk-panel__body">
            <p className="govuk-body">
              This is an important panel with information that users need to know.
            </p>
          </div>
        </div>

        <h3 className="govuk-heading-m">Warning Text</h3>
        <div className="govuk-warning-text">
          <span className="govuk-warning-text__icon" aria-hidden="true">!</span>
          <strong className="govuk-warning-text__text">
            <span className="govuk-warning-text__assistive">Warning</span>
            You can be fined up to £5,000 if you do not register.
          </strong>
        </div>

        <h3 className="govuk-heading-m">Inset Text</h3>
        <div className="govuk-inset-text">
          <p className="govuk-body">
            It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
          </p>
        </div>

        <h3 className="govuk-heading-m">Success Panel</h3>
        <div className="govuk-panel govuk-panel--confirmation">
          <h3 className="govuk-panel__title">Success</h3>
          <div className="govuk-panel__body">
            <p className="govuk-body">
              You have successfully updated your details.
            </p>
          </div>
        </div>

        <h3 className="govuk-heading-m">Tags</h3>
        <div className="govuk-tag-group">
          <span className="govuk-tag govuk-tag--green">Success</span>
          <span className="govuk-tag govuk-tag--red">Error</span>
          <span className="govuk-tag govuk-tag--blue">Info</span>
          <span className="govuk-tag">Neutral</span>
        </div>
      </div>

      <div className="govuk-grid-column-one-third">
        <h2 className="govuk-heading-l">Accessibility Features</h2>
        
        <div className="govuk-panel govuk-panel--confirmation">
          <h3 className="govuk-panel__title">Keyboard Navigation</h3>
          <div className="govuk-panel__body">
            <ul className="govuk-list govuk-list--bullet">
              <li>Tab to navigate between interactive elements</li>
              <li>Enter/Space to activate buttons and links</li>
              <li>Arrow keys for tabs and accordion</li>
              <li>Escape to close modals and details</li>
            </ul>
          </div>
        </div>

        <div className="govuk-panel govuk-panel--confirmation">
          <h3 className="govuk-panel__title">Screen Reader Support</h3>
          <div className="govuk-panel__body">
            <ul className="govuk-list govuk-list--bullet">
              <li>Semantic HTML structure</li>
              <li>ARIA labels and descriptions</li>
              <li>Live regions for dynamic content</li>
              <li>Proper heading hierarchy</li>
            </ul>
          </div>
        </div>

        <div className="govuk-panel govuk-panel--confirmation">
          <h3 className="govuk-panel__title">Visual Design</h3>
          <div className="govuk-panel__body">
            <ul className="govuk-list govuk-list--bullet">
              <li>High contrast ratios</li>
              <li>Focus indicators</li>
              <li>Consistent spacing</li>
              <li>Responsive design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Components
