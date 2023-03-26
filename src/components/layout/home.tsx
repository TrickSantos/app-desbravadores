import BottomNavigation from '@components/organisms/bottomNavigation'
import Header from '@components/organisms/header'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <Outlet />
      <BottomNavigation />
    </div>
  )
}

export default HomeLayout
