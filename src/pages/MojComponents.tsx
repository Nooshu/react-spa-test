import React, { useState } from 'react'
import { 
  MojCard, 
  MojBanner, 
  MojSearch, 
  MojSideNavigation, 
  MojMultiFileUpload 
} from '@/components'

export const MojComponents: React.FC = () => {
  const [searchValue, setSearchValue] = useState('')
  const sideNavItems = [
    { text: 'MoJ Cards', href: '#moj-cards', active: true },
    { text: 'MoJ Banners', href: '#moj-banners' },
    { text: 'MoJ Search', href: '#moj-search' },
    { text: 'MoJ Side Navigation', href: '#moj-side-nav' },
    { text: 'MoJ Multi-file Upload', href: '#moj-file-upload' }
  ]

  const handleSearch = (value: string) => {
    console.log('Search submitted:', value)
  }

  const handleFilesChange = (files: any[]) => {
    console.log('Files uploaded:', files.length)
  }

  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl">MoJ Design System Components</h1>
          <p className="govuk-body-l">
            Interactive gallery showcasing Ministry of Justice Design System components 
            integrated with React and accessibility best practices.
          </p>
        </div>
      </div>

      <div className="govuk-grid-row govuk-!-margin-top-6">
        <div className="govuk-grid-column-one-quarter">
          <MojSideNavigation items={sideNavItems} />
        </div>
        
        <div className="govuk-grid-column-three-quarters">
          <MojBanner 
            type="information" 
            title="MoJ Frontend Integration"
            dismissible
          >
            <p>
              These components are built using the MoJ Design System and integrated 
              with React for enhanced functionality while maintaining accessibility standards.
            </p>
          </MojBanner>

          <section id="moj-cards" className="govuk-!-margin-top-6">
            <h2 className="govuk-heading-l">MoJ Cards</h2>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-one-half">
                <MojCard
                  title="Standard MoJ Card"
                  description="A basic MoJ card component with title and description."
                  meta="Last updated 2 hours ago"
                />
              </div>
              <div className="govuk-grid-column-one-half">
                <MojCard
                  title="Linked MoJ Card"
                  description="A MoJ card that acts as a link to another page."
                  href="/components"
                  meta="Click to navigate"
                />
              </div>
            </div>
          </section>

          <section id="moj-banners" className="govuk-!-margin-top-6">
            <h2 className="govuk-heading-l">MoJ Banners</h2>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-full">
                <MojBanner type="success" title="Success Banner">
                  <p>This is a success banner with important information.</p>
                </MojBanner>
                
                <MojBanner type="warning" title="Warning Banner">
                  <p>This is a warning banner highlighting potential issues.</p>
                </MojBanner>
                
                <MojBanner type="error" title="Error Banner">
                  <p>This is an error banner indicating a problem that needs attention.</p>
                </MojBanner>
              </div>
            </div>
          </section>

          <section id="moj-search" className="govuk-!-margin-top-6">
            <h2 className="govuk-heading-l">MoJ Search</h2>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">
                <MojSearch
                  label="Search for content"
                  placeholder="Enter search terms..."
                  value={searchValue}
                  onChange={setSearchValue}
                  onSubmit={handleSearch}
                />
              </div>
            </div>
          </section>

          <section id="moj-file-upload" className="govuk-!-margin-top-6">
            <h2 className="govuk-heading-l">MoJ Multi-file Upload</h2>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-two-thirds">
                <MojMultiFileUpload
                  label="Upload documents"
                  hint="Upload multiple files at once. Supported formats: PDF, DOC, DOCX, TXT"
                  accept=".pdf,.doc,.docx,.txt"
                  maxFiles={5}
                  maxFileSize={5 * 1024 * 1024} // 5MB
                  onFilesChange={handleFilesChange}
                />
              </div>
            </div>
          </section>

          <section className="govuk-!-margin-top-6">
            <h2 className="govuk-heading-l">Integration Benefits</h2>
            <div className="govuk-grid-row">
              <div className="govuk-grid-column-one-third">
                <MojCard
                  title="Accessibility First"
                  description="All MoJ components meet WCAG 2.1 AA standards and are tested with assistive technologies."
                />
              </div>
              <div className="govuk-grid-column-one-third">
                <MojCard
                  title="Consistent Design"
                  description="Maintains visual consistency with MoJ Design System while providing React functionality."
                />
              </div>
              <div className="govuk-grid-column-one-third">
                <MojCard
                  title="Performance Optimized"
                  description="Components are built with performance in mind, using React best practices and lazy loading."
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
