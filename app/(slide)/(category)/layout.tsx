'use client'

import { LINKS } from '@/app/constants'
import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { useSwipeable } from 'react-swipeable'

export default function Layout({ children }: PropsWithChildren) {
  const { handlers } = useSlideLayout()
  return (
    <div {...handlers} className="w-screen overflow-x-hidden">
      {children}
    </div>
  )
}

const useSlideLayout = () => {
  const router = useRouter()
  const currentPath = usePathname()
  const currentPathIndex = LINKS.findIndex((link) => link.path === currentPath)
  const nextPathIndex =
    currentPathIndex === LINKS.length - 1 ? 0 : currentPathIndex + 1
  const nextPath = LINKS[nextPathIndex].path
  const prevPathIndex =
    currentPathIndex === 0 ? LINKS.length - 1 : currentPathIndex - 1
  const prevPath = LINKS[prevPathIndex].path

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      router.push(nextPath)
    },
    onSwipedRight: () => {
      router.push(prevPath)
    },
    swipeDuration: 300,
    preventScrollOnSwipe: true,
    delta: 20,
  })

  return { handlers }
}
