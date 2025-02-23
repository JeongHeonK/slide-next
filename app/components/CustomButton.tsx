'use client'

import { useRouter } from 'next/navigation'
import { ButtonHTMLAttributes } from 'react'

interface BannerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  variant: 'filled' | 'outlined'
  size?: 'medium' | 'small'
  isDisabled?: boolean
  path?: string
  customStyle?: string
  onClick?: () => void
}
export default function CustomButton({
  text,
  path,
  variant,
  customStyle,
  size = 'medium',
  isDisabled = false,
  onClick,
  ...props
}: BannerButtonProps) {
  const router = useRouter()
  const handleClick = () => {
    if (!path) return
    router.push(path)
  }

  return (
    <button
      type="button"
      className={`${!isDisabled ? variantStyle[variant] : variantStyle.disabled[variant]} ${variantStyle[size]} flex-shrink-0 rounded-2xl transition-all ${customStyle}`}
      disabled={isDisabled}
      onClick={onClick || handleClick}
      {...props}
    >
      {text}
    </button>
  )
}

const variantStyle = {
  medium: 'px-3 py-2 text-md',
  small: 'px-2 text-sm',
  filled: 'bg-rose-500 text-white hover:bg-rose-300 active:bg-rose-700',
  outlined:
    'border border-rose-500 text-rose-500 hover:border-rose-300 hover:text-rose-300 active:border-rose-700 active:text-rose-700',
  disabled: {
    filled: 'bg-rose-200 text-white',
    outlined: 'border border-rose-200 text-rose-200',
  },
}
