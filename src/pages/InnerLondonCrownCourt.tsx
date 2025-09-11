import React from 'react'
import { Link } from 'react-router-dom'

export const InnerLondonCrownCourt: React.FC = () => {
  return (
    <>
      <Link to="/journey/search-by-name" className="govuk-back-link">
        Back to search results
      </Link>

      <div className="govuk-grid-row court-tribunal-details">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-l">
            Inner London Crown Court
          </h1>
          
          <h2 className="govuk-heading-l">
            Visit or contact us:
          </h2>
          
          <h3 className="govuk-heading-m">
            Address
          </h3>
          
          <p className="govuk-body-m address">
            Sessions House<br />
            Newington Causeway<br />
            London<br />
            SE1 6AZ
          </p>

          <p className="govuk-body-m" id="direction-map">
            <a className="govuk-link" rel="noreferrer noopener" target="_blank" href="https://maps.google.com/maps?q=51.4944,-0.1005">
              Get directions (opens in new tab)
            </a>
          </p>
          <p className="govuk-body-m">
            <a className="govuk-link" rel="noreferrer noopener" target="_blank" href="https://www.gov.uk/guidance/what-to-expect-coming-to-a-court-or-tribunal">
              What to expect coming to a court or tribunal (opens in new tab)
            </a>
          </p>

          <hr className="govuk-section-break govuk-section-break--visible" />

          <div id="additional-info">
              <h3 className="govuk-heading-m">
                Additional information
              </h3>
              <div className="govuk-body-m">
                <p>
                  <a href="https://www.gov.uk/government/news/scammers-using-hmcts-telephone-numbers" target="_blank" rel="noopener" className="govuk-link">
                    Scammers are mimicking genuine HMCTS phone numbers and email addresses
                    <span className="govuk-visually-hidden"> - opens in a new tab</span>
                  </a>
                  . They may demand payment and claim to be from HMRC or enforcement. If you're unsure, do not pay anything and report the scam to{' '}
                  <a href="https://www.actionfraud.police.uk/" target="_blank" rel="noopener" className="govuk-link">
                    Action Fraud
                    <span className="govuk-visually-hidden"> - opens in a new tab</span>
                  </a>
                  .
                </p>
              </div>
          </div>

          <hr className="govuk-section-break govuk-section-break--visible" />

          <div id="opening-times">
              <h3 className="govuk-heading-m">
                Opening times
              </h3>
              <dl className="govuk-summary-list">
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Court open
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Monday to Friday 8am to 6pm
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Counter open
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      9am to 5pm
                    </p>
                  </dd>
                </div>
              </dl>
          </div>

          <hr className="govuk-section-break govuk-section-break--visible" />

          <div id="emails">
              <h3 className="govuk-heading-m">
                Email
              </h3>
              <dl className="govuk-summary-list">
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Enquiries
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <a className="govuk-link" href="mailto:innerlondoncrowncourt@justice.gov.uk">
                      innerlondoncrowncourt@justice.gov.uk
                    </a>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Citizens advice
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <a className="govuk-link" href="mailto:innerlondon.cc@citizensadvice.org.uk">
                      innerlondon.cc@citizensadvice.org.uk
                    </a>
                  </dd>
                </div>
              </dl>
          </div>

          <hr className="govuk-section-break govuk-section-break--visible" />

          <div id="contacts">
              <h3 className="govuk-heading-m">
                Telephone
              </h3>
              <dl className="govuk-summary-list">
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Enquiries
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <a className="govuk-link" href="tel:020 7234 3100">020 7234 3100</a>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Fax
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <a className="govuk-link" href="tel:0870 324 0226">0870 324 0226</a>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Witness service
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <a className="govuk-link" href="tel:030 0332 1232">030 0332 1232</a>
                  </dd>
                </div>
              </dl>
          </div>

          <hr className="govuk-section-break govuk-section-break--visible" />

          <div id="building-facilities">
              <h3 className="govuk-heading-m">
                Building facilities
              </h3>
              <p className="govuk-body-m">
                If you have a disability and need help coming to a hearing, please contact 020 7234 3100.
              </p>

              <dl className="govuk-summary-list">
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Disabled access
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Disabled access and disabled toilet
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Hidden Disabilities Sunflower network
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Lanyards available on request.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Assistance dogs
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Assistance dogs are welcome
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Hearing Loop
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      This court has hearing enhancement facilities.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Refreshments
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Vending machines are available at this court.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Interview room
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Seven interview rooms are available at this court.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Prayer / Quiet room
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      This court has a prayer room.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Video facilities
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Video conference and Prison Video Link facilities.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Wireless network connection
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      This court has wireless internet access available within the building.
                    </p>
                  </dd>
                </div>
              </dl>

              <h4 className="govuk-heading-s">
                Translators or Interpreters
              </h4>
              <p className="govuk-body-m">
                <a rel="noreferrer noopener" target="_blank" href="https://www.gov.uk/get-interpreter-at-court-or-tribunal" className="govuk-link">
                  Get an interpreter at a court or tribunal. (opens in new tab)
                </a>
              </p>
          </div>
        </div>

        <div className="govuk-grid-column-one-third side-content" style={{ marginTop: '0' }}>
          <div className="govuk-grid-row">
            <img src="/assets/images/inner_london_crown_court.jpg" alt="" />
            <p className="govuk-body-s">
              Inner London Crown Court
            </p>
          </div>

          <hr className="govuk-section-break govuk-section-break--visible" />

          <div id="areas-of-law">
              <h3 className="govuk-heading-m">
                This location handles
              </h3>
              <ul className="govuk-list">
                <li>
                  <p>Crime</p>
                </li>
                <li>
                  <p>Single justice procedure</p>
                </li>
              </ul>
          </div>

          <hr className="govuk-section-break govuk-section-break--visible" />

          <div>
              <h3 className="govuk-heading-m">
                Make a complaint
              </h3>
              <p className="govuk-body-m">
                <a className="govuk-link" rel="noreferrer noopener" target="_blank" href="https://www.gov.uk/government/organisations/hm-courts-and-tribunals-service/about/complaints-procedure">
                  Contact us to make a complaint
                </a>
                <span className="govuk-visually-hidden"> (opens in new tab)</span>
              </p>
          </div>

          <hr className="govuk-section-break govuk-section-break--visible" />

          <div id="location-codes">
              <h3 className="govuk-heading-m">
                Court codes for legal professionals
              </h3>
              <p className="govuk-body-m">
                Crown Court location code: <span className="govuk-body-m">440</span>
              </p>
              <p className="govuk-body-m dx-number">
                DX: <span className="govuk-body-m">97345 Southwark 3</span>
              </p>
          </div>

          <hr className="govuk-section-break govuk-section-break--visible" />

          <div id="access-scheme">
              <h3 className="govuk-heading-m">
                Professional users' court and tribunal access scheme
              </h3>
              <p className="govuk-body-m">
                This location participates in this scheme
              </p>
              <p>
                <a className="govuk-link govuk-body-m" rel="noreferrer noopener" target="_blank" href="https://www.gov.uk/guidance/professional-users-court-and-tribunal-access-scheme">
                  Register for the scheme
                </a>
                <span className="govuk-visually-hidden"> (opens in new tab)</span>
              </p>
          </div>
        </div>
      </div>
    </>
  )
}
