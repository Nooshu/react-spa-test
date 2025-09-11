// Court data structure
export interface CourtData {
  id: string
  name: string
  address: {
    building: string
    street: string
    city: string
    postcode: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  openingTimes: {
    courtOpen: string
    counterOpen: string
  }
  emails: Array<{
    type: string
    address: string
  }>
  telephones: Array<{
    type: string
    number: string
  }>
  facilities: Array<{
    title: string
    description: string
  }>
  caseTypes: string[]
  courtCodes: {
    crownCourtCode: string
    dx: string
  }
  imagePath: string
}
