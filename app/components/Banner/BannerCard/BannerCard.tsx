import BannerButton from './BannerButton'
import BannerCardBadge from './BannerCardBadge'
import BannerCardDescription from './BannerCardDescription'
import BannerCardImage from './BannerCardImage'
import BannerCardTitle from './BannerCardTitle'

interface BannerCardProps {
  index: number
  currentSlideIndex: number
  isProgressing: boolean
  title: string
  description: string
  image: {
    name: string
    src: string
  }
}

export default function BannerCard({
  index,
  currentSlideIndex,
  title,
  description,
  isProgressing,
  image,
}: BannerCardProps) {
  const isCenter = index === currentSlideIndex
  return (
    <div
      id="banner"
      className={`drop-shadow-banner relative mx-1.5 my-3 rounded-xl bg-white transition-opacity ${isCenter ? 'opacity-100' : 'opacity-40'}`}
    >
      {isProgressing && <BannerCardBadge />}
      <BannerCardImage src={image.src} alt={image.name} />
      <div className="p-2">
        <div className="mb-2.5 flex items-center gap-2">
          <BannerCardTitle>{title}</BannerCardTitle>
          <BannerButton
            variant="outlined"
            text="투표하기"
            isProgressing={isProgressing}
          />
        </div>
        <BannerCardDescription>{description}</BannerCardDescription>
      </div>
    </div>
  )
}
