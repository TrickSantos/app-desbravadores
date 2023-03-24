import ListItem from '@components/organisms/listItem'
import Typography from '@components/atoms/typography'
import { FiChevronRight } from 'react-icons/fi'

const { Title } = Typography

const NoticeList = () => {
  return (
    <div className="w-full">
      <Title className="mb-2" level={5}>
        Avisos
      </Title>
      <div className="flex flex-col gap-1 w-full">
        <ListItem
          title="Aviso"
          description="Informação"
          rightIcon={<FiChevronRight className="h-4 w-4" />}
        />
        <ListItem
          title="Aviso"
          description="Informação"
          rightIcon={<FiChevronRight className="h-4 w-4" />}
        />
        <ListItem
          title="Aviso"
          description="Informação"
          rightIcon={<FiChevronRight className="h-4 w-4" />}
        />
      </div>
    </div>
  )
}

export default NoticeList
