import HomeLayout from '@components/layout/home'
import Category from '@pages/Category'
import Challenges from '@pages/Challenges'
import Home from '@pages/Home'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'challenges',
        element: <Challenges />,
      },
      {
        path: 'category/:category',
        element: <Category />,
      },
    ],
  },
])

export default router
