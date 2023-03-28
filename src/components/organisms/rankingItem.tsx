import Typography from '@components/atoms/typography'

const { Text } = Typography

type Props = {
  position: number
  name: string
  points: number
}

const RankingItem = ({ points, position, name }: Props) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="w-full flex flex-row">
        <div className="w-6 flex justify-start items-center">
          <Text className="text-md font-bold">{`${position}º`}</Text>
        </div>
        <div className="w-full h-10 rounded-lg shadow-md flex flex-row justify-between items-center bg-orange p-2">
          <Text className="text-md text-white">{`Unidade ${name}`}</Text>
          <Text className="text-md text-white">{`${points} pontos`}</Text>
        </div>
      </div>
    </div>
  )
}

export default RankingItem
