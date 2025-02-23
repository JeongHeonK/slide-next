import { NextResponse } from 'next/server'
import { getCharts } from '../chart'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page')
  const response = await getCharts(Number(page))

  return NextResponse.json({
    nextChart: response.result,
    hasNext: response.hasNext,
  })
}
