import Typography from '@components/atoms/typography'

const { Text } = Typography

type Props = {
  title: string
  description: string
  rightIcon?: React.ReactNode
  leftIcon?: React.ReactNode
}

const ListItem = ({ description, title, leftIcon, rightIcon }: Props) => {
  return (
    <div className="w-full flex flex-row items-center rounded-lg bg-black-50 py-2 px-4 shadow-md">
      {leftIcon}
      <div className="flex flex-1 flex-col">
        <Text className="text-sm font-bold">{title}</Text>
        <Text className="text-sm font-normal text-black-400">{description}</Text>
      </div>
      {rightIcon}
    </div>
  )
}

export default ListItem
