import Typography from '@components/atoms/typography'
import { ReactComponent as Medalha } from '@assets/icons/medalha.svg'
import { FiChevronRight } from 'react-icons/fi'
import { BsCheckCircleFill, BsFillXCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const { Text, Title } = Typography

const Management = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-white h-screen pt-24 px-2">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full mb-6 rounded-xl shadow-md flex flex-row justify-center gap-2 bg-black-50 px-4 py-3">
          <img className="w-20 h-20 rounded-full" src="https://picsum.photos/200" alt="foto" />
          <div className="flex flex-1 flex-col">
            <Text className="text-base font-bold text-black-900">Unidade Orion</Text>
            <Text className="text-sm font-normal text-black-900">Clube Sírius</Text>
          </div>
        </div>

        <div className="w-full flex flex-col items-start mb-6">
          <Title level={5}>Desafios cumpridos</Title>
          <div
            onClick={() => navigate('unitchallenges')}
            className="w-full border border-black-50 flex flex-row gap-2  items-center rounded-lg p-4 shadow-md"
          >
            <Medalha height={24} width={24} />
            <div className="flex flex-1 flex-col">
              <Text className="text-sm font-bold">Todos os desafios cumpridos</Text>
            </div>
            <FiChevronRight className="h-4 w-4" />
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-2 mb-6">
          <Title level={5}>Desbravadores</Title>
          <div className="w-full border border-black-50 flex flex-row gap-2  items-center rounded-lg p-4 shadow-md">
            <img className="w-10 h-10 rounded-md" src="https://picsum.photos/200" alt="foto" />
            <div className="flex flex-1 flex-col">
              <Text className="text-sm font-bold">Carol Santos</Text>
              <Text className="text-sm font-normal text-black-400">Capitã</Text>
            </div>
            <BsCheckCircleFill className="h-6 w-6 fill-green" />
          </div>
          <div className="w-full border border-black-50 flex flex-row gap-2  items-center rounded-lg p-4 shadow-md">
            <img className="w-10 h-10 rounded-md" src="https://picsum.photos/200" alt="foto" />
            <div className="flex flex-1 flex-col">
              <Text className="text-sm font-bold">Carol Santos</Text>
              <Text className="text-sm font-normal text-black-400">Capitã</Text>
            </div>
            <BsCheckCircleFill className="h-6 w-6 fill-green" />
          </div>

          <div className="w-full border border-black-50 flex flex-row gap-2  items-center rounded-lg p-4 shadow-md">
            <img className="w-10 h-10 rounded-md" src="https://picsum.photos/200" alt="foto" />
            <div className="flex flex-1 flex-col">
              <Text className="text-sm font-bold">Carol Santos</Text>
              <Text className="text-sm font-normal text-black-400">Capitã</Text>
            </div>
            <BsFillXCircleFill className="h-6 w-6 fill-red" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Management
