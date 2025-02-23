'use client'

import { useEffect } from 'react'
import CustomButton from '../components/CustomButton'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <div className="w-full h-[580px] flex flex-col justify-center gap-4 items-center">
      <h2>예기치 않은 오류가 발생했습니다:(</h2>
      <div className="flex justify-center gap-2">
        <CustomButton
          text="홈으로"
          variant="filled"
          path="/chart"
          size="medium"
          isDisabled={false}
        />
        <CustomButton
          text="새로고침"
          variant="outlined"
          size="medium"
          isDisabled={false}
          onClick={() => reset()}
        />
      </div>
    </div>
  )
}
