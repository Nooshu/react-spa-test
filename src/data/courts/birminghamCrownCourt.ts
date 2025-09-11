import { CourtData } from './courtData'

export const birminghamCrownCourtData: CourtData = {
  id: 'birmingham-crown-court',
  name: 'Birmingham Crown Court',
  address: {
    building: 'Queen Elizabeth II Law Courts',
    street: '1 Newton Street',
    city: 'Birmingham',
    postcode: 'B4 7NA'
  },
  coordinates: { lat: 52.4819, lng: -1.8998 },
  openingTimes: {
    courtOpen: '9am to 5pm',
    counterOpen: '9am to 5pm'
  },
  emails: [
    { type: 'Enquiries', address: 'enquiries.birmingham.crowncourt@justice.gov.uk' }
  ],
  telephones: [
    { type: 'Enquiries', number: '0121 681 3300' },
    { type: 'Witness service', number: '0300 332 1000' }
  ],
  facilities: [
    { title: 'Hidden Disabilities Sunflower network', description: 'Lanyards available on request.' },
    { title: 'Assistance dogs', description: 'Assistance dogs are welcome.' },
    { title: 'Hearing Loop', description: 'Hearing facilities are fixed in some Courtrooms and mobile units available for use in others.' },
    { title: 'Refreshments', description: 'Catering facilities are currently closed so there are no refreshments available on site.' },
    { title: 'Interview room', description: 'Fifteen interview rooms are available at this court.' },
    { title: 'Wireless network connection', description: 'Access to GovWifi available.' }
  ],
  caseTypes: ['Crime', 'Single justice procedure'],
  courtCodes: {
    crownCourtCode: '404',
    dx: '702033 Birmingham 8'
  },
  imagePath: '/assets/images/birmingham-crown-court.jpg'
}
