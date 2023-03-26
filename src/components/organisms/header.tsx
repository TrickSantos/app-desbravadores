import logo from '@assets/icons/sirius.png'
import { FaBars, FaRegUserCircle } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import Typography from '@components/atoms/typography'

const { Title } = Typography

const headerName = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Desafios',
    link: '/challenges',
  },
  {
    name: 'Ranking',
    link: '/ranking',
  },
  {
    name: 'Gerenciamento',
    link: '/manage',
  },
]

const Header = () => {
  const { pathname } = useLocation()

  const getCurrentHeaderName = () => {
    const currentHeader = headerName.find((header) => header.link === pathname)
    if (pathname === '/' || currentHeader === undefined)
      return <img className="w-10 h-10 object-contain" src={logo} alt="" />
    else
      return (
        <Title level={5} className="font-bold text-black-900">
          {currentHeader.name}
        </Title>
      )
  }

  return (
    <div className="fixed top-0 left-0 bg-white shadow-md w-full h-14 flex flex-row justify-between items-center px-4 rounded-b-xl">
      <FaBars />
      {getCurrentHeaderName()}
      <FaRegUserCircle />
    </div>
  )
}

export default Header
