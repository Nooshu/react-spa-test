import { manchesterCrownCourtData } from './manchesterCrownCourt'
import { birminghamCrownCourtData } from './birminghamCrownCourt'
import { innerLondonCrownCourtData } from './innerLondonCrownCourt'
import { CourtData } from './courtData'

// Court data configuration
export const courtData: Record<string, CourtData> = {
  'manchester-crown-court': manchesterCrownCourtData,
  'birmingham-crown-court': birminghamCrownCourtData,
  'inner-london-crown-court': innerLondonCrownCourtData
}

// Export individual court data for specific imports
export { manchesterCrownCourtData } from './manchesterCrownCourt'
export { birminghamCrownCourtData } from './birminghamCrownCourt'
export { innerLondonCrownCourtData } from './innerLondonCrownCourt'
export type { CourtData } from './courtData'
