import React from 'react'
import { CourtDetailTemplate } from '@/components/CourtDetailTemplate'
import { birminghamCrownCourtData } from '@/data/courts/birminghamCrownCourt'

export const BirminghamCrownCourt: React.FC = () => {
  return <CourtDetailTemplate court={birminghamCrownCourtData} />
}
