import Typography from '@components/atoms/typography'
import RankingItem from '@components/organisms/rankingItem'

const { Title } = Typography

const RankingList = () => {
  return (
    <div className="w-full flex flex-col gap-2 px-4">
      <Title level={5}>Unidades</Title>
      <RankingItem name="Lobos" points={500} position={4} />
      <RankingItem name="Bellatrix" points={500} position={5} />
      <RankingItem name="Pegasus" points={500} position={6} />
    </div>
  )
}

export default RankingList
