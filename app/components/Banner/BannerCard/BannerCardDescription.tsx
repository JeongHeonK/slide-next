import { PropsWithChildren } from 'react'

export default function BannerCardDescription({ children }: PropsWithChildren) {
  return <p className="text-right text-[12px]">{children}</p>
}
