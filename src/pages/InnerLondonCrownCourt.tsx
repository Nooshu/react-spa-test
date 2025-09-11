import React from 'react'
import { CourtDetailTemplate } from '@/components/CourtDetailTemplate'
import { innerLondonCrownCourtData } from '@/data/courts/innerLondonCrownCourt'

export const InnerLondonCrownCourt: React.FC = () => {
  return <CourtDetailTemplate court={innerLondonCrownCourtData} />
}
