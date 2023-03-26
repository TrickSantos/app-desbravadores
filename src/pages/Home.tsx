import CategoryList from '@components/templates/categoryList'
import NoticeList from '@components/templates/noticeList'

const Home = () => {
  return (
    <div className="w-full h-screen mt-24 px-4 py-2 rounded-t-3xl bg-white shadow-md flex flex-col justify-start items-start">
      <CategoryList />
      <NoticeList />
    </div>
  )
}

export default Home
