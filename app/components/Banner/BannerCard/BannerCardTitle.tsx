import { PropsWithChildren } from 'react'

export default function BannerCardTitle({ children }: PropsWithChildren) {
  return (
    <h3 className="text-bold flex-1 overflow-hidden text-sm font-bold text-ellipsis whitespace-nowrap">
      {children}
    </h3>
  )
}
