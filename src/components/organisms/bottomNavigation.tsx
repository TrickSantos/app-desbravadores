import NavigationItem from '@components/molecules/navigationItem'
import { TiHome as HomeIcon } from 'react-icons/ti'
import { FaRegLightbulb as Lightbulb, FaMedal as Medal, FaCogs as Settings } from 'react-icons/fa'
import { useNavigationContext } from '@context/navigation'

const BottomNavigation = () => {
  const { showFooter } = useNavigationContext()

  if (!showFooter) return <></>

  return (
    <nav className="w-full bg-white rounded-t-xl border-t border-black-50 shadow-up z-10 fixed bottom-0 left-0">
      <ul className="flex flex-row justify-evenly items-center py-2">
        <NavigationItem icon={<HomeIcon />} name="Início" destination="/" />
        <NavigationItem icon={<Lightbulb />} name="Desafios" destination="/challenges" />
        <NavigationItem icon={<Medal />} name="Ranking" destination="/ranking" />
        <NavigationItem icon={<Settings />} name="Gerenciar" destination="/manage" />
      </ul>
    </nav>
  )
}

export default BottomNavigation
