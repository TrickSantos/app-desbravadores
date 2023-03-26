import TinyButton from '@components/atoms/buttons/tiny'
import Typography from '@components/atoms/typography'
import ListItem from '@components/organisms/listItem'

const { Title } = Typography

const Challenges = () => {
  return (
    <div className="w-full h-screen bg-white mt-24 px-4 py-2 rounded-t-3xl">
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
          title="Desafio 2"
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

export default Challenges
