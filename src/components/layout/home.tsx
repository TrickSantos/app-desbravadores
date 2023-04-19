import NavigationProvider from '@context/navigation'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <div className="w-full">
      <NavigationProvider>
        <Outlet />
      </NavigationProvider>
    </div>
  )
}

export default HomeLayout
