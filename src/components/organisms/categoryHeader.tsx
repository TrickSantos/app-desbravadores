import { FaChevronCircleLeft } from 'react-icons/fa'
import Typography from '@components/atoms/typography'

const { Title } = Typography

type Props = {
  title: string
  onClick: () => void
}

const CategoryHeader = ({ onClick, title }: Props) => {
  return (
    <div className="fixed top-0 left-0 bg-white shadow-md w-full h-14 flex flex-row justify-between items-center px-4 rounded-b-xl">
      <FaChevronCircleLeft className="h-8 w-8 text-orange" onClick={onClick} />
      <Title level={5} className="font-bold text-black-900">
        {title}
      </Title>
      <div className="h-8 w-8 text-orange" />
    </div>
  )
}

export default CategoryHeader
