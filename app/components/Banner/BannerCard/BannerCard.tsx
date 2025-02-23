import { calculateIsProgressing } from '@/app/util'
import CustomButton from '../../CustomButton'
import BannerCardBadge from './BannerCardBadge'
import BannerCardDescription from './BannerCardDescription'
import BannerCardImage from './BannerCardImage'
import BannerCardTitle from './BannerCardTitle'

interface BannerCardProps {
  index: number
  currentSlideIndex: number
  title: string
  description: string
  startDate: string
  endDate: string
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
  startDate,
  endDate,
  image,
}: BannerCardProps) {
  const isCenter = index === currentSlideIndex
  const isProgressing = calculateIsProgressing(startDate, endDate)
  return (
    <div
      id="banner"
      className={`drop-shadow-banner relative mx-1.5 my-3 rounded-xl z-10 bg-white transition-opacity ${isCenter ? 'opacity-100' : 'opacity-40'}`}
    >
      {isProgressing && <BannerCardBadge />}
      <BannerCardImage src={image.src} alt={image.name} />
      <div className="p-2">
        <div className="mb-2.5 flex items-center gap-2">
          <BannerCardTitle>{title}</BannerCardTitle>
          <CustomButton
            variant="outlined"
            text="투표하기"
            size="small"
            isDisabled={!isProgressing}
            path="/vote"
          />
        </div>
        <BannerCardDescription>{description}</BannerCardDescription>
      </div>
    </div>
  )
}
