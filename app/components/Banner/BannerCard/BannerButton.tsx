import { useRouter } from 'next/navigation'
import { ButtonHTMLAttributes } from 'react'

interface BannerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant: 'filled' | 'outlined'
  isProgressing: boolean
}
export default function BannerButton({
  text,
  variant,
  isProgressing,
  ...props
}: BannerButtonProps) {
  const router = useRouter()
  const handleClick = () => {
    router.push('/vote')
  }

  return (
    <button
      type="button"
      className={`${isProgressing ? variantStyle[variant] : variantStyle.disabled[variant]} flex-shrink-0 rounded-2xl px-2 text-sm transition-all`}
      disabled={!isProgressing}
      onClick={handleClick}
      {...props}
    >
      {text}
    </button>
  )
}

const variantStyle = {
  filled: 'bg-rose-500 text-white hover:bg-rose-300 active:bg-rose-700',
  outlined:
    'border border-rose-500 text-rose-500 hover:border-rose-300 hover:text-rose-300 active:border-rose-700 active:text-rose-700',
  disabled: {
    filled: 'bg-rose-200 text-white',
    outlined: 'border border-rose-200 text-rose-200',
  },
}
