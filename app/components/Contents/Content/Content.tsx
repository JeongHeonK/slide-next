'use client'

import { useEffect, useState } from 'react'

interface ContentProps {
  rank: number
  title: string
  artist: string
  index: number
}

export default function Content({ rank, title, artist, index }: ContentProps) {
  const { animatedClassName, isTopThree } = useContent(index, rank)

  return (
    <div
      className={`flex justify-between items-center gap-3 drop-shadow-md bg-white rounded-md px-3 py-1 max-w-5xl mx-auto transition-all ${animatedClassName}`}
    >
      <span
        className={`${isTopThree ? 'bg-red-500' : 'bg-rose-300'} text-white px-4 py-2 rounded-md`}
      >
        {rank}
      </span>
      <span className="w-52 text-left flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
        {title}
      </span>
      <span className="w-32 text-ellipsis whitespace-nowrap overflow-hidden">
        {artist}
      </span>
    </div>
  )
}

const useContent = (index: number, rank: number) => {
  const [animatedClassName, setAnimatedClassName] = useState(
    'opacity-0 translate-x-10',
  )
  const isTopThree = rank < 4

  useEffect(() => {
    const timerId = setTimeout(
      () => {
        setAnimatedClassName('opacity-100')
      },
      100 * (index % 7),
    )
    return () => {
      clearTimeout(timerId)
    }
  }, [index])

  return { animatedClassName, isTopThree }
}
