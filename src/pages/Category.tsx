import TinyButton from '@components/atoms/buttons/tiny'
import Typography from '@components/atoms/typography'
import CategoryHeader from '@components/organisms/categoryHeader'
import ListItem from '@components/organisms/listItem'
import { useLocation, useNavigate } from 'react-router-dom'

const { Title } = Typography

const Category = () => {
  const { state } = useLocation()
  const { category } = state as { category: string }
  const title = category.toLowerCase().charAt(0).toUpperCase() + category.slice(1).toLowerCase()
  const navigate = useNavigate()

  return (
    <div className="w-full h-screen bg-white mt-24 px-4 py-2 rounded-t-3xl">
      <CategoryHeader title={title} onClick={() => navigate('/')} />
      <Title className="mb-2" level={5}>
        Semana
      </Title>
      <div className="flex flex-col gap-2 w-full">
        <ListItem
          title="Desafio 3"
          description="Informação"
          rightIcon={<TinyButton children="Ativo" className="bg-green" />}
        />
      </div>
      <Title className="mb-2" level={5}>
        Mês
      </Title>
      <div className="flex flex-col gap-2 w-full">
        <ListItem
          title="Desafio 1"
          description="Informação"
          rightIcon={<TinyButton children="Bloqueado" disabled />}
        />
        <ListItem
          title="Desafio 3"
          description="Informação"
          rightIcon={<TinyButton children="Ativo" className="bg-green" />}
        />
      </div>
    </div>
  )
}

export default Category
