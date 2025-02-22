'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LINK } from '../constants'

export default function Header() {
  const pathname = usePathname()

  return (
    <ul className="flex w-full flex-nowrap gap-5 overflow-x-scroll bg-rose-300 px-5 py-3">
      {LINK.map(({ path, name }) => {
        const isActive = pathname === path
        return (
          <li key={path} className="shrink-0">
            <Link
              className={
                isActive
                  ? 'active font-bold text-white'
                  : 'font-bold text-black'
              }
              href={path}
            >
              {name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
