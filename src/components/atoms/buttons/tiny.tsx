import { ButtonHTMLAttributes } from 'react'

const TinyButton = ({
  disabled = false,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`${
        disabled && 'bg-black-200'
      } h-6 w-fit px-2 py-1 rounded-md text-xs text-white ${className}`}
      {...props}
    />
  )
}

export default TinyButton
