import Image from 'next/image'
import CustomButton from './CustomButton'

export default function ComingSoon() {
  return (
    <div className="w-full h-[580px] overflow-hidden relative">
      <Image
        alt="coming soon"
        src="/img/comingSoon.jpg"
        priority
        fill
        objectFit="cover"
        className="h-auto w-auto block opacity-35"
      />
      <h3 className="absolute top-60 mx-auto left-0 right-0 text-center font-semibold text-lg">
        서비스 준비 중입니다. 곧 돌아올게요!
      </h3>
      <CustomButton
        text="홈으로"
        variant="filled"
        path="/"
        customStyle="absolute z-30 left-52 top-72"
      />
    </div>
  )
}
