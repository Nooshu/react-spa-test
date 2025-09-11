import { CourtData } from './courtData'

export const manchesterCrownCourtData: CourtData = {
  id: 'manchester-crown-court',
  name: 'Manchester Crown Court (Minshull St)',
  address: {
    building: 'The Court House',
    street: 'Aytoun Street',
    city: 'Manchester',
    postcode: 'M1 3FS'
  },
  coordinates: { lat: 53.4786727845773, lng: -2.23516609910164 },
  openingTimes: {
    courtOpen: 'Monday to Friday 7:30am to 5pm',
    counterOpen: 'Monday to Friday 9am to 5pm'
  },
  emails: [
    { type: 'Enquiries', address: 'Accommodation.manchesterminshullstreet.crowncourt@justice.gov.uk' },
    { type: 'Enquiries', address: 'courtclerks.manchesterminshullstreet.crowncourt@justice.gov.uk' },
    { type: 'Crown court', address: 'crownoffice.manchesterminshullstreet.crowncourt@justice.gov.uk' },
    { type: 'Listing', address: 'listing.manchesterminshullstreet.crowncourt@justice.gov.uk' }
  ],
  telephones: [
    { type: 'Enquiries', number: '0161 954 7500' },
    { type: 'Witness service', number: '0300 332 1000' }
  ],
  facilities: [
    { title: 'No parking', description: 'There are no parking facilities at this building, however public car parks are available nearby on Major Street, Bloom Street and Auburn Street.' },
    { title: 'Disabled access', description: 'This is a grade 2* listed building and therefore access may be restricted. There is no access for wheelchair users to courtrooms 5, 6, 7 & 8. Access is restricted to the well of the Court for wheelchair users in courtrooms 1, 2, 3, 4, 9 & 10. Please contact us to discuss this on Accommodation.manchesterminshullstreet.crowncourt@justice.gov.uk or on 0161 954 7545. We do have a lift at the entrance and level access to most areas and some Courtrooms. We also have a lift to the first and second floors.' },
    { title: 'Hidden Disabilities Sunflower network', description: 'Lanyards available on request.' },
    { title: 'Assistance dogs', description: 'Assistance dogs are welcome.' },
    { title: 'Hearing Loop', description: 'The building has hearing enhancement facilities available in all courtrooms.' },
    { title: 'Security arch', description: 'For safety and security all users and their possessions will be searched by security when they enter this building. This court has a security arch. Please alert a security officer if you have a pacemaker.' },
    { title: 'Lift', description: 'Lifts are available in this building to access the first and second floors. For those requiring wheelchair access, the width of the doors is 32 inches and the weight restriction is 630kg.' },
    { title: 'Public toilets', description: 'Public toilets are available on the ground floor.' },
    { title: 'Disabled toilet', description: 'An accessible toilet is available on the ground floor.' },
    { title: 'Refreshments', description: 'Chilled water is available on the first floor.' },
    { title: 'Interview room', description: 'There are eleven interview/consultation rooms available in the building, located on the ground, first and second floors. It may be possible to book some of these in advance. Please contact us on 0161 954 7577.' },
    { title: 'Waiting Room', description: 'This building has a public waiting area outside courtrooms on the ground floor, first floor and second floor. There is a separate waiting area for witnesses. Please ask for details.' },
    { title: 'Baby changing facility', description: 'Baby changing facilities are located in the disabled toilet on the ground floor.' },
    { title: 'Video facilities', description: 'Court/hearing room video conferencing facilities and prison to court video link facilities are available (by prior arrangement). For queries please contact listing.manchesterminshullstreet.crowncourt@justice.gov.uk or 0161 954 7500.' },
    { title: 'Wireless network connection', description: 'Wi-Fi is available in all areas of the building and can be accessed via PCU or GOV Wi-Fi.' }
  ],
  caseTypes: ['Crime', 'Domestic Abuse Protection Order (DAPOs)', 'Single justice procedure'],
  courtCodes: {
    crownCourtCode: '436',
    dx: '724860 Manchester 43'
  },
  imagePath: '/assets/images/manchester-crown-court.jpg'
}
