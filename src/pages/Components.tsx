import React, { useState } from 'react'
import { 
  Button, 
  Accordion, 
  Tabs, 
  Table, 
  Card, 
  Alert,
  BackLink,
  Breadcrumbs,
  CharacterCount,
  Checkboxes,
  CookieBanner,
  DateInput,
  Details,
  ErrorMessage,
  ErrorSummary,
  ExitThisPage,
  FileUpload,
  InsetText,
  Pagination,
  Panel,
  PasswordInput,
  Radios,
  SkipLink,
  SummaryList,
  Tag,
  TaskList,
  WarningText
} from '@/components'

export const Components: React.FC = () => {
  const [alertVisible, setAlertVisible] = useState(false)
  const [checkboxValues, setCheckboxValues] = useState<string[]>([])
  const [radioValue, setRadioValue] = useState('')
  const [dateValue, setDateValue] = useState<{ day?: string; month?: string; year?: string }>({ day: '', month: '', year: '' })
  const [passwordValue, setPasswordValue] = useState('')
  const [fileValue, setFileValue] = useState<File | null>(null)

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
          <h2 className="govuk-heading-l">Navigation Components</h2>
          
          <h3 className="govuk-heading-m">Back Link</h3>
          <BackLink to="/">Back to home</BackLink>
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Breadcrumbs</h3>
          <Breadcrumbs 
            items={[
              { text: 'Home', to: '/' },
              { text: 'Components', to: '/components' },
              { text: 'Current page' }
            ]} 
          />
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Skip Link</h3>
          <SkipLink href="#main-content">Skip to main content</SkipLink>
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Form Components</h2>
          
          <h3 className="govuk-heading-m">Checkboxes</h3>
          <Checkboxes
            name="interests"
            items={[
              { value: 'accessibility', text: 'Accessibility', hint: 'Making websites usable for everyone' },
              { value: 'performance', text: 'Performance', hint: 'Optimizing website speed' },
              { value: 'design', text: 'Design', hint: 'Creating beautiful user interfaces' }
            ]}
            value={checkboxValues}
            onChange={setCheckboxValues}
            fieldset={{ legend: 'What are you interested in?' }}
            hint="Select all that apply"
          />
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Radio Buttons</h3>
          <Radios
            name="experience"
            items={[
              { value: 'beginner', text: 'Beginner', hint: 'New to web development' },
              { value: 'intermediate', text: 'Intermediate', hint: 'Some experience with web development' },
              { value: 'advanced', text: 'Advanced', hint: 'Experienced web developer' }
            ]}
            value={radioValue}
            onChange={setRadioValue}
            fieldset={{ legend: 'What is your experience level?' }}
          />
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Date Input</h3>
          <DateInput
            name="birth-date"
            value={dateValue}
            onChange={setDateValue}
            fieldset={{ legend: 'What is your date of birth?' }}
            hint="For example, 27 3 2007"
          />
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Password Input</h3>
          <PasswordInput
            name="password"
            value={passwordValue}
            onChange={setPasswordValue}
            label="Password"
            hint="Must be at least 8 characters"
          />
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">File Upload</h3>
          <FileUpload
            name="document"
            label="Upload a document"
            hint="PDF, DOC or DOCX files only"
            accept=".pdf,.doc,.docx"
            value={fileValue}
            onChange={setFileValue}
          />
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Content Components</h2>
          
          <h3 className="govuk-heading-m">Details</h3>
          <Details summary="How do I make my website accessible?">
            <p>Start by following the Web Content Accessibility Guidelines (WCAG) 2.1. Use semantic HTML, provide alternative text for images, ensure good color contrast, and test with assistive technologies.</p>
          </Details>
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Inset Text</h3>
          <InsetText>
            <p>This is important information that stands out from the main content.</p>
          </InsetText>
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Warning Text</h3>
          <WarningText>
            You can be fined up to £5,000 if you do not register.
          </WarningText>
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Tags</h3>
          <Table
            caption="GOV.UK Design System tag variants"
            headers={['Class name', 'Tag']}
            rows={[
              ['govuk-tag--grey', <Tag variant="grey">Inactive</Tag>],
              ['govuk-tag--green', <Tag variant="green">New</Tag>],
              ['govuk-tag--turquoise', <Tag variant="turquoise">Active</Tag>],
              ['govuk-tag--blue', <Tag variant="blue">Pending</Tag>],
              ['govuk-tag--light-blue', <Tag variant="light-blue">In progress</Tag>],
              ['govuk-tag--purple', <Tag variant="purple">Received</Tag>],
              ['govuk-tag--pink', <Tag variant="pink">Sent</Tag>],
              ['govuk-tag--red', <Tag variant="red">Rejected</Tag>],
              ['govuk-tag--orange', <Tag variant="orange">Declined</Tag>],
              ['govuk-tag--yellow', <Tag variant="yellow">Delayed</Tag>]
            ]}
          />
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Panel</h3>
          <Panel title="Application complete">
            Your reference number is HDJ2123F
          </Panel>
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Data Components</h2>
          
          <h3 className="govuk-heading-m">Summary List</h3>
          <SummaryList
            rows={[
              {
                key: 'Name',
                value: 'Sarah Philips',
                actions: {
                  items: [
                    { text: 'Change', href: '#', visuallyHiddenText: 'name' }
                  ]
                }
              },
              {
                key: 'Date of birth',
                value: '5 January 1978'
              },
              {
                key: 'Address',
                value: '72 Guild Street, London, SE23 6FH',
                actions: {
                  items: [
                    { text: 'Change', href: '#', visuallyHiddenText: 'address' }
                  ]
                }
              }
            ]}
          />
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Task List</h3>
          <TaskList
            items={[
              { name: 'Check your personal details', status: 'completed' },
              { name: 'Check your application', status: 'in-progress' },
              { name: 'Submit your application', status: 'not-started' }
            ]}
          />
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Pagination</h3>
          <Pagination
            previous={{ href: '#', text: 'Previous page' }}
            next={{ href: '#', text: 'Next page' }}
            items={[
              { number: 1, href: '#' },
              { number: 2, current: true },
              { number: 3, href: '#' },
              { ellipsis: true },
              { number: 10, href: '#' }
            ]}
          />
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Error Handling</h2>
          
          <h3 className="govuk-heading-m">Error Summary</h3>
          <ErrorSummary
            title="There is a problem"
            description="You need to fix the errors on this page before continuing."
            errorList={[
              { text: 'Enter your full name', href: '#name' },
              { text: 'Enter your email address', href: '#email' }
            ]}
          />
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Error Message</h3>
          <ErrorMessage>
            Enter your full name
          </ErrorMessage>
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-full">
          <h2 className="govuk-heading-l">Special Components</h2>
          
          <h3 className="govuk-heading-m">Character Count</h3>
          <CharacterCount maxLength={100} threshold={0.9}>
            <textarea 
              className="govuk-textarea" 
              name="description"
              rows={5}
              placeholder="Enter your description here..."
            />
          </CharacterCount>
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Cookie Banner</h3>
          <CookieBanner />
          
          <h3 className="govuk-heading-m govuk-!-margin-top-6">Exit This Page</h3>
          <p className="govuk-body">Press the Escape key to show the exit this page button.</p>
          <ExitThisPage />
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
