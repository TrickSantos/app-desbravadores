import logo from '@assets/icons/sirius.png'
import { FaBars, FaRegUserCircle } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import Typography from '@components/atoms/typography'
import routeConfig from '@config/routes'

const { Title } = Typography

const routes = Object.keys(routeConfig).map((key) => routeConfig[key])

const Header = () => {
  const { pathname } = useLocation()
  const [_, current] = pathname.split('/')
  const hasHeader = routes.find((route) => route.path.includes(current))?.showHeader

  const getCurrentHeaderName = () => {
    const currentHeader = routes.find((route) => route.path.includes(current))
    if (pathname === '/' || currentHeader === undefined)
      return <img className="w-10 h-10 object-contain" src={logo} alt="" />
    else
      return (
        <Title level={5} className="font-bold text-black-900">
          {currentHeader.title}
        </Title>
      )
  }

  if (!hasHeader) return <></>

  return (
    <div className="fixed top-0 left-0 bg-white shadow-md w-full h-14 flex flex-row justify-between items-center px-4 rounded-b-xl">
      <FaBars />
      {getCurrentHeaderName()}
      <FaRegUserCircle />
    </div>
  )
}

export default Header
