import React, { useState } from 'react'
import { Button } from '@/components/Button'
import { Accordion } from '@/components/Accordion'
import { Tabs } from '@/components/Tabs'
import { Table } from '@/components/Table'
import { Card } from '@/components/Card'
import { Alert } from '@/components/Alert'

export const Components: React.FC = () => {
  const [alertVisible, setAlertVisible] = useState(false)

  const accordionItems = [
    {
      heading: 'What is accessibility?',
      content: 'Accessibility means making your website or app usable by as many people as possible. This includes people with disabilities, older people, and people using different devices or browsers.'
    },
    {
      heading: 'Why is accessibility important?',
      content: 'Accessibility is important because it ensures that everyone can use your service, regardless of their abilities or circumstances. It\'s also a legal requirement in many countries.'
    },
    {
      heading: 'How do I make my service accessible?',
      content: 'Start by following the Web Content Accessibility Guidelines (WCAG) 2.1. Use semantic HTML, provide alternative text for images, ensure good color contrast, and test with assistive technologies.'
    }
  ]

  const tabItems = [
    {
      id: 'buttons',
      label: 'Buttons',
      content: (
        <div>
          <h3 className="govuk-heading-s">Button Variants</h3>
          <div className="govuk-button-group">
            <Button variant="primary">Primary button</Button>
            <Button variant="secondary">Secondary button</Button>
            <Button variant="warning">Warning button</Button>
            <Button variant="start">Start button</Button>
          </div>
          
          <h3 className="govuk-heading-s govuk-!-margin-top-6">Button Sizes</h3>
          <div className="govuk-button-group">
            <Button size="small">Small button</Button>
            <Button size="medium">Medium button</Button>
            <Button size="large">Large button</Button>
          </div>
        </div>
      )
    },
    {
      id: 'alerts',
      label: 'Alerts',
      content: (
        <div>
          <Alert type="success" title="Success">
            Your application has been submitted successfully.
          </Alert>
          
          <Alert type="warning" title="Warning">
            Please check your information before continuing.
          </Alert>
          
          <Alert type="error" title="Error">
            There was a problem with your submission.
          </Alert>
          
          <Alert type="info" title="Information">
            This is some important information you should know.
          </Alert>
        </div>
      )
    },
    {
      id: 'tables',
      label: 'Tables',
      content: (
        <div>
          <Table
            caption="Accessibility test results"
            headers={['Page', 'Score', 'Issues', 'Status']}
            rows={[
              ['Home', '95%', '2', 'Pass'],
              ['Forms', '98%', '1', 'Pass'],
              ['Components', '92%', '3', 'Pass'],
              ['Performance', '100%', '0', 'Pass']
            ]}
          />
        </div>
      )
    }
  ]


  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl">Components</h1>
          <p className="govuk-body-l">
            Interactive gallery showcasing GOV.UK Design System components 
            built from scratch with accessibility in mind.
          </p>
        </div>
      </div>

      <div className="govuk-grid-row">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Accordion</h2>
          <Accordion items={accordionItems} />
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Tabs</h2>
          <Tabs items={tabItems} />
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Cards</h2>
          <div className="govuk-grid-row">
            <div className="govuk-grid-column-one-third">
              <Card
                title="Accessibility Testing"
                content="Comprehensive accessibility testing using automated tools and manual testing techniques."
                link="/accessibility"
              />
            </div>
            <div className="govuk-grid-column-one-third">
              <Card
                title="Performance Optimization"
                content="Performance testing and optimization techniques for React applications."
                link="/performance"
              />
            </div>
            <div className="govuk-grid-column-one-third">
              <Card
                title="Form Validation"
                content="Advanced form validation patterns with real-time feedback and error handling."
                link="/forms"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Interactive Alerts</h2>
          <div className="govuk-button-group">
            <Button onClick={() => setAlertVisible(!alertVisible)}>
              {alertVisible ? 'Hide' : 'Show'} alert
            </Button>
          </div>
          
          {alertVisible && (
            <Alert type="info" title="Dynamic Alert">
              This alert was toggled using React state. It demonstrates dynamic content 
              updates with proper accessibility announcements.
            </Alert>
          )}
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Accessibility Features</h2>
          <div className="govuk-inset-text">
            <h3 className="govuk-heading-s">Keyboard Navigation</h3>
            <ul className="govuk-list govuk-list--bullet">
              <li>Tab to navigate between interactive elements</li>
              <li>Enter/Space to activate buttons and links</li>
              <li>Arrow keys for tabs and accordion navigation</li>
              <li>Escape to close modals and details</li>
            </ul>
          </div>
          
          <div className="govuk-inset-text">
            <h3 className="govuk-heading-s">Screen Reader Support</h3>
            <ul className="govuk-list govuk-list--bullet">
              <li>Semantic HTML structure with proper headings</li>
              <li>ARIA labels and descriptions</li>
              <li>Live regions for dynamic content updates</li>
              <li>Proper form labels and error associations</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
