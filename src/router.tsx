import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '@components/layout/home'
import Category from '@pages/Category'
import Challenges from '@pages/Challenges'
import Home from '@pages/Home'
import Management from '@pages/Management/Management'
import UnitChallenges from '@pages/Management/Challenges'
import Ranking from '@pages/Ranking'
import UnitChallenge from '@pages/Management/Challenge'

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
      {
        path: 'ranking',
        element: <Ranking />,
      },
      {
        path: 'manage',
        children: [
          {
            index: true,
            element: <Management />,
          },
          {
            path: 'unitchallenges',
            element: <UnitChallenges />,
          },
          {
            path: 'unitchallenges/:id',
            element: <UnitChallenge />,
          },
        ],
      },
    ],
  },
])

export default router
