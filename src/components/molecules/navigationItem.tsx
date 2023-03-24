import { NavLink } from 'react-router-dom'
import Typography from '@components/atoms/typography'

const { Text } = Typography

type Props = {
  icon: React.ReactNode
  name: string
  destination: string
}

const NavigationItem = ({ icon, name, destination }: Props) => {
  return (
    <li>
      <NavLink to={destination}>
        {({ isActive }) => (
          <div
            className={`flex flex-col justify-center items-center ${
              isActive ? 'text-orange' : 'text-black-200'
            }`}
          >
            {icon}
            <Text className="text-sm">{name}</Text>
          </div>
        )}
      </NavLink>
    </li>
  )
}

export default NavigationItem
