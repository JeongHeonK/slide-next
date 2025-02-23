import Image from 'next/image'

interface BannerCardImageProps {
  src: string
  alt: string
}

export default function BannerCardImage({ src, alt }: BannerCardImageProps) {
  return (
    <div className="relative h-36 overflow-hidden rounded-t-xl">
      <Image
        fill
        src={src}
        alt={alt}
        className="block object-cover object-center w-auto h-auto rounded-t-xl"
        priority
      />
    </div>
  )
}
