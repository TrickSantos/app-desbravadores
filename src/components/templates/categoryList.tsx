import Typography from '@components/atoms/typography'
import CategoryCard from '@components/organisms/categoryCard'

const { Title } = Typography

const CategoryList = () => {
  return (
    <div className="w-full mb-4">
      <Title className="mb-2" level={5}>
        Desafios
      </Title>
      <div className="w-full grid grid-cols-2 gap-4">
        <CategoryCard title="Pintura" completed={50} />
        <CategoryCard title="Pintura" completed={50} />
        <CategoryCard title="Pintura" completed={50} />
        <CategoryCard title="Pintura" completed={50} />
      </div>
    </div>
  )
}

export default CategoryList
