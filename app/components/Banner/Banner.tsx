'use client'

import { useCallback, useMemo, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useBannerStateStore } from '@/app/store'
import CustomPaging from './CustomSlide/CustomPaging'
import { BANNER, INITIAL_SETTING } from '../../constants'
import BannerCard from './BannerCard'

export default function Banner() {
  const { settings, currentSlideIndex } = useBanner()
  const bannerStateActions = useBannerStateStore((state) => state.actions)

  return (
    <div
      className="mx-auto mb-7"
      onTouchStart={() => bannerStateActions.setIsBannerActive()}
      onTouchMove={() => bannerStateActions.setIsBannerActive()}
      onTouchEnd={() => bannerStateActions.setIsBannerInactive()}
    >
      <Slider {...settings} className="carousel-container">
        {BANNER.map(({ title, description, isProgressing, image }, index) => (
          <BannerCard
            key={title}
            currentSlideIndex={currentSlideIndex}
            index={index}
            image={image}
            title={title}
            description={description}
            isProgressing={isProgressing}
          />
        ))}
      </Slider>
    </div>
  )
}

const useBanner = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const changeCurrentIndex = useCallback(
    (index: number) => setCurrentSlideIndex(index),
    [],
  )

  const settings = useMemo(
    () => ({
      ...INITIAL_SETTING,

      afterChange: changeCurrentIndex,
      customPaging: (i: number) => CustomPaging(i, currentSlideIndex),
    }),
    [currentSlideIndex, changeCurrentIndex],
  )

  return { settings, currentSlideIndex }
}
