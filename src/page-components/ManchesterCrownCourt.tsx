import React from 'react'
import { CourtDetailTemplate } from '@/components/CourtDetailTemplate'
import { manchesterCrownCourtData } from '@/data/courts/manchesterCrownCourt'

export const ManchesterCrownCourt: React.FC = () => {
  return <CourtDetailTemplate court={manchesterCrownCourtData} />
}
