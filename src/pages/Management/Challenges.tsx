import Card from '@components/organisms/card'
import { ReactComponent as Alvo } from '@assets/icons/arco_e_flecha.svg'
import { useNavigate } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

const UnitChallenges = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-white h-screen pt-20 px-2">
      <div className="w-full flex flex-col items-start gap-2 mb-6">
        <Card
          left={<Alvo className="h-6  w-6" />}
          title="Adote um idoso"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          onClick={() => navigate('aushduas', { state: { title: 'Adote um idoso' } })}
          right={<FiChevronRight className="h-4 w-4" />}
        />
        <Card
          left={<Alvo className="h-6  w-6" />}
          title="Adote um idoso"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          onClick={() => navigate('aushduas')}
          right={<FiChevronRight className="h-4 w-4" />}
        />
        <Card
          left={<Alvo className="h-6  w-6" />}
          title="Adote um idoso"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          onClick={() => navigate('aushduas')}
          right={<FiChevronRight className="h-4 w-4" />}
        />
      </div>
    </div>
  )
}

export default UnitChallenges
