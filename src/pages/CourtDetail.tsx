import React from 'react'
import { Link } from 'react-router-dom'

export const CourtDetail: React.FC = () => {
  return (
    <>
      <Link to="/journey/search-by-name" className="govuk-back-link">
        Back to search results
      </Link>

      <div className="govuk-grid-row court-tribunal-details">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-l">
            Manchester Crown Court (Minshull St)
          </h1>
          
          <h2 className="govuk-heading-l">
            Visit or contact us:
          </h2>
          
          <h3 className="govuk-heading-m">
            Address
          </h3>
          
          <p className="govuk-body-m address">
            The Court House<br />
            Aytoun Street<br />
            Manchester<br />
            M1 3FS
          </p>

          <p className="govuk-body-m" id="direction-map">
            <a className="govuk-link" rel="noreferrer noopener" target="_blank" href="https://maps.google.com/maps?q=53.4786727845773,-2.23516609910164">
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
                      Monday to Friday 7:30am to 5pm
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Counter open
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Monday to Friday 9am to 5pm
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Telephone enquiries answered
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Monday to Friday 8am to 5pm
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
                    <a className="govuk-link" href="mailto:Accommodation.manchesterminshullstreet.crowncourt@justice.gov.uk">
                      Accommodation.manchesterminshullstreet.crowncourt@justice.gov.uk
                    </a>
                    <p className="govuk-body-m">(Accommodation)</p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Enquiries
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <a className="govuk-link" href="mailto:courtclerks.manchesterminshullstreet.crowncourt@justice.gov.uk">
                      courtclerks.manchesterminshullstreet.crowncourt@justice.gov.uk
                    </a>
                    <p className="govuk-body-m">(Court Clerks)</p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Crown court
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <a className="govuk-link" href="mailto:crownoffice.manchesterminshullstreet.crowncourt@justice.gov.uk">
                      crownoffice.manchesterminshullstreet.crowncourt@justice.gov.uk
                    </a>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Listing
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <a className="govuk-link" href="mailto:listing.manchesterminshullstreet.crowncourt@justice.gov.uk">
                      listing.manchesterminshullstreet.crowncourt@justice.gov.uk
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
                    <a className="govuk-link" href="tel:0161  954 7500">0161  954 7500</a>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    Witness service
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <a className="govuk-link" href="tel:0300 332 1000">0300 332 1000</a>
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
                If you have a disability and need help coming to a hearing, please contact 0161  954 7500.
              </p>

              <dl className="govuk-summary-list">
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      No parking
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      There are no parking facilities at this building, however public car parks are available nearby on Major Street, Bloom Street and Auburn Street.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Disabled access
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      This is a grade 2* listed building and therefore access may be restricted. There is no access for wheelchair users to courtrooms 5, 6, 7 & 8. Access is restricted to the well of the Court for wheelchair users in courtrooms 1, 2, 3, 4, 9 & 10. Please contact us to discuss this on{' '}
                      <a href="mailto:Accommodation.manchesterminshullstreet.crowncourt@justice.gov.uk" rel="nofollow" className="govuk-link">
                        Accommodation.manchesterminshullstreet.crowncourt@justice.gov.uk
                      </a>
                      {' '}or on 0161 954 7545. We do have a lift at the entrance and level access to most areas and some Courtrooms. We also have a lift to the first and second floors.
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
                      Assistance dogs are welcome.
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
                      The building has hearing enhancement facilities available in all courtrooms.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Security arch
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      For safety and security all users and their possessions will be searched by security when they enter this building. This court has a security arch. Please alert a security officer if you have a pacemaker.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Lift
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Lifts are available in this building to access the first and second floors. For those requiring wheelchair access, the width of the doors is 32 inches and the weight restriction is 630kg.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Public toilets
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Public toilets are available on the ground floor.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Disabled toilet
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      An accessible toilet is available on the ground floor.
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
                      Chilled water is available on the first floor.
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
                      There are eleven interview/consultation rooms available in the building, located on the ground, first and second floors. It may be possible to book some of these in advance. Please contact us on 0161 954 7577.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Waiting Room
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      This building has a public waiting area outside courtrooms on the ground floor, first floor and second floor. There is a separate waiting area for witnesses. Please ask for details.
                    </p>
                  </dd>
                </div>
                <div className="govuk-summary-list__row">
                  <dd className="govuk-summary-list__key">
                    <h4 className="govuk-heading-s">
                      Baby changing facility
                    </h4>
                  </dd>
                  <dd className="govuk-summary-list__value">
                    <p className="govuk-body-m">
                      Baby changing facilities are located in the disabled toilet on the ground floor.
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
                      Court/hearing room video conferencing facilities and prison to court video link facilities are available (by prior arrangement). For queries please contact{' '}
                      <a href="mailto:listing.manchesterminshullstreet.crowncourt@justice.gov.uk" rel="nofollow" className="govuk-link">
                        listing.manchesterminshullstreet.crowncourt@justice.gov.uk
                      </a>
                      {' '}or 0161 954 7500.
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
                      Wi-Fi is available in all areas of the building and can be accessed via PCU or GOV Wi-Fi.
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
          <img src="/assets/images/manchester-crown-court.jpg" alt="" />
          <p className="govuk-body-s">
            Manchester Crown Court (Minshull St)
          </p>

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
                  <a className="govuk-link" rel="noreferrer noopener" target="_blank" href="https://www.gov.uk/guidance/domestic-abuse-protection-notices-dapns-and-domestic-abuse-protection-orders-dapos">
                    Domestic Abuse Protection Order (DAPOs)
                  </a>
                  <span className="govuk-visually-hidden"> (opens in new tab)</span>
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
                Crown Court location code: <span className="govuk-body-m">436</span>
              </p>
              <p className="govuk-body-m dx-number">
                DX: <span className="govuk-body-m">724860 Manchester 43</span>
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
