import { JourneySearchByName } from '@/page-components/JourneySearchByName'

interface JourneySearchByNamePageProps {
  searchParams: Promise<{ 'court-search'?: string }>
}

export default async function JourneySearchByNamePage({ searchParams }: JourneySearchByNamePageProps) {
  const params = await searchParams
  const searchTerm = params['court-search'] || ''
  
  return <JourneySearchByName initialSearchTerm={searchTerm} />
}
