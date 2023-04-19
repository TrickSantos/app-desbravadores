import Header from '@components/organisms/header'
import logo from '@assets/icons/sirius.png'
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useRoutes } from '@config/routes'
import BottomNavigation from '@components/organisms/bottomNavigation'

type NavigationContextType = {
  header: HeaderProps
  setHeader: (header: HeaderProps) => void
  showFooter: boolean
}

export const NavigationContext = createContext<NavigationContextType>({} as NavigationContextType)

type Props = {
  children: ReactNode
}

type ButtonProps = {
  icon: ReactNode
  onClick?: () => void
}

type HeaderProps = {
  title: ReactNode
  leftButton: ButtonProps
  rightButton: ButtonProps
  visible: boolean
}

const defaultOnClick = () => {}

const NavigationProvider: FC<Props> = ({ children }) => {
  const routeConfig = useRoutes()
  const routes = Object.keys(routeConfig).map((key) => routeConfig[key])
  const { pathname } = useLocation()
  const [_, current, nested, param] = pathname.split('/')
  const [header, setHeader] = useState<HeaderProps>({
    title: '',
    leftButton: { icon: <></>, onClick: defaultOnClick },
    rightButton: { icon: <></>, onClick: defaultOnClick },
    visible: false,
  })
  const [showFooter, setShowFooter] = useState(false)

  useEffect(() => {
    const currentRoute = routes.find((route) => {
      if (nested === undefined) return route.path.includes(current)
      if (param) return route.path.includes(`${current}/${nested}/:id`)
      if (route.path.includes(`${current}/`)) return true
      return route.path.includes(nested)
    })

    if (currentRoute === undefined) {
      setHeader({
        title: <img className="w-10 h-10 object-contain" src={logo} alt="" />,
        leftButton: { icon: <></>, onClick: defaultOnClick },
        rightButton: { icon: <></>, onClick: defaultOnClick },
        visible: false,
      })
      setShowFooter(false)
    } else {
      setHeader({
        title: currentRoute.title,
        leftButton: currentRoute.left || { icon: <></>, onClick: defaultOnClick },
        rightButton: currentRoute.right || { icon: <></>, onClick: defaultOnClick },
        visible: currentRoute.showHeader,
      })
      setShowFooter(currentRoute.showFooter)
    }
  }, [pathname])

  return (
    <NavigationContext.Provider
      value={{
        header,
        setHeader,
        showFooter,
      }}
    >
      <Header />
      {children}
      <BottomNavigation />
    </NavigationContext.Provider>
  )
}

export default NavigationProvider

export const useNavigationContext = () => {
  return useContext(NavigationContext)
}
