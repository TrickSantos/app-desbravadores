import logo from '@assets/icons/sirius.png'
import CategoryList from '@components/templates/categoryList'
import NoticeList from '@components/templates/noticeList'
import BottomNavigation from '@components/organisms/bottomNavigation'
import { FaBars, FaRegUserCircle } from 'react-icons/fa'

const Home = () => {
  return (
    <div className="w-full">
      <div className="fixed top-0 left-0 bg-white shadow-md w-full h-14 flex flex-row justify-between items-center px-4 rounded-b-xl">
        <FaBars />
        <img className="w-10 h-10 object-contain" src={logo} alt="" />
        <FaRegUserCircle />
      </div>
      <div className="w-full h-screen mt-24 px-4 py-2 rounded-t-3xl bg-white shadow-md flex flex-col justify-start items-start">
        <CategoryList />
        <NoticeList />
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Home
