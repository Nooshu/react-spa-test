import { CourtData } from './courtData'

export const innerLondonCrownCourtData: CourtData = {
  id: 'inner-london-crown-court',
  name: 'Inner London Crown Court',
  address: {
    building: 'Sessions House',
    street: 'Newington Causeway',
    city: 'London',
    postcode: 'SE1 6AZ'
  },
  coordinates: { lat: 51.4944, lng: -0.1005 },
  openingTimes: {
    courtOpen: 'Monday to Friday 8am to 6pm',
    counterOpen: '9am to 5pm'
  },
  emails: [
    { type: 'Enquiries', address: 'innerlondoncrowncourt@justice.gov.uk' },
    { type: 'Citizens advice', address: 'innerlondon.cc@citizensadvice.org.uk' }
  ],
  telephones: [
    { type: 'Enquiries', number: '020 7234 3100' },
    { type: 'Fax', number: '0870 324 0226' },
    { type: 'Witness service', number: '030 0332 1232' }
  ],
  facilities: [
    { title: 'Disabled access', description: 'Disabled access and disabled toilet' },
    { title: 'Hidden Disabilities Sunflower network', description: 'Lanyards available on request.' },
    { title: 'Assistance dogs', description: 'Assistance dogs are welcome' },
    { title: 'Hearing Loop', description: 'This court has hearing enhancement facilities.' },
    { title: 'Refreshments', description: 'Vending machines are available at this court.' },
    { title: 'Interview room', description: 'Seven interview rooms are available at this court.' },
    { title: 'Prayer / Quiet room', description: 'This court has a prayer room.' },
    { title: 'Video facilities', description: 'Video conference and Prison Video Link facilities.' },
    { title: 'Wireless network connection', description: 'This court has wireless internet access available within the building.' }
  ],
  caseTypes: ['Crime', 'Single justice procedure'],
  courtCodes: {
    crownCourtCode: '440',
    dx: '97345 Southwark 3'
  },
  imagePath: '/assets/images/inner_london_crown_court.jpg'
}
