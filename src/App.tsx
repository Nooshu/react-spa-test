import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Components from './pages/Components'
import Forms from './pages/Forms'
import Performance from './pages/Performance'

function App() {
  return (
    <div className="govuk-template">
      <a href="#main-content" className="govuk-skip-link">
        Skip to main content
      </a>
      
      <header className="govuk-header" role="banner" data-module="govuk-header">
        <div className="govuk-header__container govuk-width-container">
          <div className="govuk-header__logo">
            <a href="/" className="govuk-header__link govuk-header__link--homepage">
              <svg
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 304 60"
                height="30"
                width="152"
                fill="currentcolor" 
                className="govuk-header__logotype" 
                aria-label="GOV.UK"
              >
                <title>GOV.UK</title>
                <path d="M13.4,22.3c2,.8,4.2-.2,5-2s-.2-4.2-2-5c-2-.8-4.2.2-5,2-.8,2,0,4.2,2,5M4.8,27.3c2,.8,4.2-.2,5-2s-.2-4.2-2-5c-2-.8-4.2.2-5,2-1,2,0,4.2,2,5M2.2,36.9c2,.8,4.2-.2,5-2,.8-2-.2-4.2-2-5-2-.8-4.2.2-5,2-.8,2,0,4.2,2,5M23,25.3c2,.8,4.2-.2,5-2s-.2-4.2-2-5c-2-.8-4.2.2-5,2s0,4.2,2,5M57.8,22.3c-2,.8-4.2-.2-5-2s.2-4.2,2-5c2-.8,4.2.2,5,2,1,2,0,4.2-2,5M66.4,27.3c-2,.8-4.2-.2-5-2s.2-4.2,2-5c2-.8,4.2.2,5,2,1,2,0,4.2-2,5M69,36.9c-2,.8-4.2-.2-5-2-.8-2,.2-4.2,2-5,2-.8,4.2.2,5,2,.8,2,0,4.2-2,5M48.2,25.3c-2,.8-4.2-.2-5-2s.2-4.2,2-5c2-.8,4.2.2,5,2s0,4.2-2,5M37.6,15.5l4.8,2.6v-7.2l-4.8,1.6c-.2-.2-.2-.4-.4-.4s2-6,2-6h-6.8l2,6c-.2.2-.4.2-.4.4-.2.2-4.8-1.4-4.8-1.4v7l4.8-2.6c-.2.2,0,.4.2.6l-2.8,8.4c-.2.4-.2.8-.2,1.4,0,2.2,1.6,4.2,3.8,4.4h1.2c2.2-.4,3.8-2.2,3.8-4.4s0-.8-.2-1.4l-2.8-8.4c.4-.2.6-.4.6-.6M35.6,56.1c9.2,0,17.8.6,25.6,1.8,2.2-9.2,4.8-14.4,7.6-18.2l-5.2-1.8c.6,2.6.6,3.8,0,5.6-.8-.8-1.6-2.4-2.2-4.8l-2.4,8.4c1.6-1,2.8-1.8,4-1.8-2.4,5.2-5.4,6.4-7.2,6-2.4-.4-3.4-2.6-3-4.4.6-2.6,3.2-3.2,4.4-.2,2.4-4.8-1.6-6.2-4.2-4.8,3.8-3.8,4.4-7.2,1.2-11.4-4.4,3.4-4.4,6.6-2.4,11.2-2.6-3-6.6-1.4-5,3.4,1.8-2.8,4.2-1,4,1.6-.4,2.4-3.4,4.2-7.4,4-5.6-.4-6-4.4-6-7.4,1.4-.2,3.8,1,6,4l.8-8.8c-2.2,2.4-4.4,2.8-6.6,2.8.8-2.4,4.2-6.2,4.2-6.2h-11s3.6,4,4.2,6.2c-2.2,0-4.4-.6-6.6-2.8l.8,8.8c2.2-3,4.6-4.2,6-4-.2,3.2-.4,7-6,7.4-3.8.4-7-1.6-7.4-4-.4-2.6,2-4.4,3.8-1.6,1.4-4.8-2.6-6.2-5.2-3.4,2-4.6,2-8-2.4-11.2-3.2,4.2-2.6,7.6,1.2,11.4-2.6-1.4-6.4,0-4.2,4.8,1.2-3,3.8-2.2,4.4.2.4,1.8-.8,3.8-3,4.4-2,.4-5-1-7.4-6,1.4,0,2.6.8,4,1.8l-3-8.4c-.6,2.4-1.4,3.8-2.4,4.8-.6-1.6-.4-3,0-5.6l-5.2,1.8c3,3.8,5.6,9,7.8,18.2,7.6-1,16.4-1.8,25.4-1.8"/>
                <path transform="translate(8 0)" d="M88.6,33.2c0,1.8.2,3.4.6,5s1.2,3,2,4.4c1,1.2,2,2.2,3.4,3s3,1.2,5,1.2,3.4-.2,4.6-.8,2.2-1.4,3-2.2,1.2-1.8,1.6-3c.2-1,.4-2,.4-3v-.4h-10.6v-6.4h18.8v23h-7.4v-5c-.6.8-1.2,1.6-2,2.2-.8.6-1.6,1.2-2.6,1.8-1,.4-2,.8-3.2,1.2s-2.4.4-3.6.4c-3,0-5.8-.6-8-1.6-2.4-1.2-4.4-2.6-6-4.6s-2.8-4.2-3.6-6.8c-.6-2.8-1-5.6-1-8.6s.4-5.8,1.4-8.4,2.2-4.8,4-6.8,3.8-3.4,6.2-4.6c2.4-1.2,5.2-1.6,8.2-1.6s3.8.2,5.6.6c1.8.4,3.4,1.2,4.8,2s2.8,1.8,3.8,3c1.2,1.2,2,2.6,2.8,4l-7.4,4.2c-.4-.8-1-1.8-1.6-2.4-.6-.8-1.2-1.4-2-2s-1.6-1-2.6-1.4-2.2-.4-3.4-.4c-2,0-3.6.4-5,1.2-1.4.8-2.6,1.8-3.4,3-1,1.2-1.6,2.8-2,4.4-.6,1.6-.8,3.8-.8,5.4ZM161.4,24.6c-.8-2.6-2.2-4.8-4-6.8s-3.8-3.4-6.2-4.6c-2.4-1.2-5.2-1.6-8.4-1.6s-5.8.6-8.4,1.6c-2.2,1.2-4.4,2.8-6,4.6-1.8,2-3,4.2-4,6.8-.8,2.6-1.4,5.4-1.4,8.4s.4,5.8,1.4,8.4c.8,2.6,2.2,4.8,4,6.8s3.8,3.4,6.2,4.6c2.4,1.2,5.2,1.6,8.4,1.6s5.8-.6,8.4-1.6c2.4-1.2,4.6-2.6,6.2-4.6,1.8-2,3-4.2,4-6.8.8-2.6,1.4-5.4,1.4-8.4-.2-3-.6-5.8-1.6-8.4h0ZM154,33.2c0,2-.2,3.8-.8,5.4-.4,1.6-1.2,3.2-2.2,4.4s-2.2,2.2-3.4,2.8c-1.4.6-3,1-4.8,1s-3.4-.4-4.8-1-2.6-1.6-3.4-2.8c-1-1.2-1.6-2.6-2.2-4.4-.4-1.6-.8-3.4-.8-5.4v-.2c0-2,.2-3.8.8-5.4.4-1.6,1.2-3.2,2.2-4.4,1-1.2,2.2-2.2,3.4-2.8,1.4-.6,3-1,4.8-1s3.4.4,4.8,1,2.6,1.6,3.4,2.8c1,1.2,1.6,2.6,2.2,4.4.4,1.6.8,3.4.8,5.4v.2ZM177.8,54l-11.8-42h9.4l8,31.4h.2l8-31.4h9.4l-11.8,42h-11.4,0ZM235.4,46.7c1.2,0,2.4-.2,3.4-.6,1-.4,2-.8,2.8-1.6s1.4-1.6,1.8-2.8c.4-1.2.6-2.4.6-4V11.8h8.2v27.2c0,2.4-.4,4.4-1.2,6.2s-2,3.4-3.6,4.8c-1.4,1.4-3.2,2.4-5.4,3-2,.8-4.4,1-6.8,1s-4.8-.4-6.8-1c-2-.8-3.8-1.8-5.4-3-1.6-1.4-2.6-3-3.6-4.8-.8-1.8-1.2-4-1.2-6.2V11.7h8.4v26c0,1.6.2,2.8.6,4,.4,1.2,1,2,1.8,2.8s1.6,1.2,2.8,1.6c1.2.4,2.2.6,3.6.6h0ZM261.4,11.9h8.4v18.2l14.8-18.2h10.4l-14.4,16.8,15.4,25.2h-9.8l-11-18.8-5.4,6v12.8h-8.4V11.9h0ZM206.2,44.2c-3,0-5.4,2.4-5.4,5.4s2.4,5.4,5.4,5.4,5.4-2.4,5.4-5.4-2.4-5.4-5.4-5.4Z"/>
              </svg>
            </a>
          </div>
          <div className="govuk-header__content">
            <a href="/" className="govuk-header__link govuk-header__link--service-name">
              React A11y Test
            </a>
          </div>
        </div>
      </header>

      <div className="govuk-width-container">
        <nav className="govuk-navigation" aria-label="Main navigation">
          <ul className="govuk-navigation__list">
            <li className="govuk-navigation__list-item">
              <a className="govuk-navigation__link" href="/">Home</a>
            </li>
            <li className="govuk-navigation__list-item">
              <a className="govuk-navigation__link" href="/forms">Forms</a>
            </li>
            <li className="govuk-navigation__list-item">
              <a className="govuk-navigation__link" href="/components">Components</a>
            </li>
            <li className="govuk-navigation__list-item">
              <a className="govuk-navigation__link" href="/performance">Performance</a>
            </li>
          </ul>
        </nav>
        <div className="govuk-phase-banner">
          <p className="govuk-phase-banner__content">
            <strong className="govuk-tag govuk-phase-banner__content__tag">
              BETA
            </strong>
            <span className="govuk-phase-banner__text">
              This is a new service – your <a className="govuk-link" href="#">feedback</a> will help us to improve it.
            </span>
          </p>
        </div>

        <nav className="govuk-breadcrumbs" aria-label="Breadcrumbs">
          <ol className="govuk-breadcrumbs__list">
            <li className="govuk-breadcrumbs__list-item">
              <a className="govuk-breadcrumbs__link" href="/">Home</a>
            </li>
          </ol>
        </nav>

        <main className="govuk-main-wrapper" id="main-content" role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<Components />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/performance" element={<Performance />} />
          </Routes>
        </main>
      </div>

      <footer className="govuk-footer" role="contentinfo">
        <div className="govuk-width-container">
          <div className="govuk-footer__meta">
            <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
              <h2 className="govuk-visually-hidden">Support links</h2>
              <ul className="govuk-footer__inline-list">
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="#">Help</a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="#">Cookies</a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="#">Contact</a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="#">Terms and conditions</a>
                </li>
                <li className="govuk-footer__inline-list-item">
                  <a className="govuk-footer__link" href="#">Rhestr o wasanaethau</a>
                </li>
              </ul>
              <svg
                aria-hidden="true"
                focusable="false"
                className="govuk-footer__licence-logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 483.2 195.7"
                height="17"
                width="41"
              >
                <path
                  fill="currentColor"
                  d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 97.8 0C43.9 0 0 43.9 0 97.8s43.9 97.8 97.8 97.8c36.5 0 68.3-20.1 85.1-49.7a97.76 97.76 0 0 0 149.2 25.4l19.4 22.2h3v-87.8h42l.7 46.7v-42.3h85.8z"
                />
              </svg>
              <span className="govuk-footer__licence-description">
                All content is available under the
                <a
                  className="govuk-footer__link"
                  href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                  rel="license"
                >
                  Open Government Licence v3.0
                </a>
                , except where otherwise stated
              </span>
            </div>
            <div className="govuk-footer__meta-item">
              <a
                className="govuk-footer__link govuk-footer__copyright-logo"
                href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/"
              >
                © Crown copyright
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
