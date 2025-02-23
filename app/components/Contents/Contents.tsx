'use client'

import InfiniteScroll from 'react-infinite-scroll-component'
import { useRef, useState } from 'react'
import Content from './Content/Content'

interface ContentsProps {
  initialData: { rank: number; title: string; artist: string }[]
  hasNext: boolean
}

export default function Contents({ initialData, hasNext }: ContentsProps) {
  const { chartData, hasMore, fetchMoreData } = useContents({
    initialData,
    hasNext,
  })

  return (
    <div
      className="bg-zinc-200 p-3 overflow-y-scroll h-[400px]"
      id="scrollableDiv"
    >
      <InfiniteScroll
        className="flex flex-col gap-3"
        dataLength={chartData.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {chartData?.map(({ title, rank, artist }, index) => (
          <Content
            key={`${artist}-${rank}`}
            title={title}
            rank={rank}
            artist={artist}
            index={index}
          />
        ))}
      </InfiniteScroll>
    </div>
  )
}

const useContents = ({ initialData, hasNext }: ContentsProps) => {
  const [chartData, setChartData] = useState(initialData)
  const [hasMore, setHasMore] = useState(hasNext)
  const page = useRef(1)

  const fetchMoreData = async () => {
    page.current += 1
    const currentPage = page.current
    const response = await fetch(`/api/chart?page=${currentPage}`)
    const result = await response.json()
    setHasMore(result.hasNext)
    setChartData((data) => data.concat(result.nextChart))
  }

  return { chartData, hasMore, fetchMoreData }
}
