import Typography from '@components/atoms/typography'
import { ReactNode } from 'react'

const { Text } = Typography

type Props = {
  onClick: () => void
  className?: string
  left?: ReactNode
  right?: ReactNode
  title: string
  description?: string
}

const Card = ({ className, onClick, left, right, title, description }: Props) => {
  return (
    <div
      onClick={onClick}
      className={
        'w-full border border-black-50 flex flex-row gap-2  items-center rounded-lg p-4 shadow-md ' +
        className
      }
    >
      {left}
      <div className="flex flex-1 flex-col">
        <Text className="text-sm font-bold">{title}</Text>
        {description && (
          <Text className="text-sm font-normal text-black-400 line-clamp-1">{description}</Text>
        )}
      </div>
      {right}
    </div>
  )
}

export default Card
