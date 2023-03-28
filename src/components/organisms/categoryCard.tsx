import { ReactComponent as Pintura } from '@assets/icons/pintura.svg'
import ProgressBar from '@components/atoms/progressBar'
import Typography from '@components/atoms/typography'
import { useNavigate } from 'react-router-dom'

const { Text } = Typography

type Props = {
  title: string
  completed: number
  link: string
}

const CategoryCard = ({ title, completed, link }: Props) => {
  const navigate = useNavigate()

  return (
    <div
      className="grid grid-cols-2 gap-2 border border-black-100 rounded-xl shadow-md p-4"
      onClick={() =>
        navigate(`/category/${link}`, {
          state: {
            category: link,
          },
        })
      }
    >
      <div className="col-span-2">
        <Pintura height={30} width={30} />
      </div>
      <div className="col-span-2">
        <Text className="text-md font-bold">{title}</Text>
      </div>
      <div className="col-span-2">
        <Text className="text-xs text-black-400">{`Desafios completos ${completed}%`}</Text>
        <ProgressBar progress={completed} />
      </div>
    </div>
  )
}

export default CategoryCard
