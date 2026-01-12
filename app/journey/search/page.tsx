import { JourneySearch } from '@/page-components/JourneySearch'
import { redirect } from 'next/navigation'

interface JourneySearchPageProps {
  searchParams: Promise<{ 'know-name'?: string }>
}

export default async function JourneySearchPage({ searchParams }: JourneySearchPageProps) {
  // Handle form submission without JavaScript (progressive enhancement)
  const params = await searchParams
  const knowName = params['know-name']
  
  if (knowName === 'yes') {
    redirect('/journey/search-by-name')
  } else if (knowName === 'no') {
    // For now, redirect to search-by-name as search-by-location doesn't exist yet
    // TODO: Create search-by-location page
    redirect('/journey/search-by-name')
  }
  
  return <JourneySearch />
}
