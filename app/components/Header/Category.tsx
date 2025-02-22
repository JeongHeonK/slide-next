'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface CategoryProps {
  path: string
  name: string
}

export default function Category({ path, name }: CategoryProps) {
  const pathname = usePathname()
  const isActive = pathname === path
  return (
    <li key={path} className="shrink-0">
      <Link
        className={
          isActive ? 'active font-bold text-white' : 'font-bold text-black'
        }
        href={path}
      >
        {name}
      </Link>
    </li>
  )
}
