import { getCharts } from '@/app/api/chart'
import Banner from '@/app/components/Banner'
import Contents from '@/app/components/Contents/Contents'

export default async function ChartPage() {
  const { result, hasNext } = await getCharts()
  return (
    <div>
      <Banner />
      <Contents initialData={result} hasNext={hasNext} />
    </div>
  )
}
