import { ReactNode } from 'react'
import { FaBars, FaChevronCircleLeft, FaRegUserCircle } from 'react-icons/fa'
import Typography from '@components/atoms/typography'
import logo from '@assets/icons/sirius.png'
import { useLocation, useNavigate } from 'react-router-dom'

const { Title } = Typography

export type Route = {
  path: string
  showHeader: boolean
  showFooter: boolean
  title: ReactNode
  right?: {
    icon: ReactNode
    onClick: () => void
  }
  left?: {
    icon: ReactNode
    onClick: () => void
  }
}

export type Routes = {
  [key: string]: Route
}

export const useRoutes = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { title } = state ? (state as { title: string }) : { title: '' }
  const headerTitle = title.toLowerCase().charAt(0).toUpperCase() + title.slice(1).toLowerCase()

  const routes: Routes = {
    home: {
      path: '/',
      showHeader: true,
      showFooter: true,
      title: <img className="w-10 h-10 object-contain" src={logo} alt="" />,
      left: {
        icon: <FaBars />,
        onClick: () => {},
      },
      right: {
        icon: <FaRegUserCircle />,
        onClick: () => {},
      },
    },
    login: {
      path: '/login',
      showHeader: false,
      showFooter: false,
      title: (
        <Title level={5} className="font-bold text-black-900">
          Login
        </Title>
      ),
    },
    register: {
      path: '/register',
      showHeader: false,
      showFooter: false,
      title: (
        <Title level={5} className="font-bold text-black-900">
          Register
        </Title>
      ),
    },
    challenges: {
      path: '/challenges',
      showHeader: true,
      showFooter: true,
      title: (
        <Title level={5} className="font-bold text-black-900">
          Desafios
        </Title>
      ),
      left: {
        icon: <FaBars />,
        onClick: () => {},
      },
      right: {
        icon: <FaRegUserCircle />,
        onClick: () => {},
      },
    },
    challenge: {
      path: '/challenges/:id',
      showHeader: true,
      showFooter: true,
      title: (
        <Title level={5} className="font-bold text-black-900">
          Desafio
        </Title>
      ),
      left: {
        icon: <FaBars />,
        onClick: () => {},
      },
      right: {
        icon: <FaRegUserCircle />,
        onClick: () => {},
      },
    },
    category: {
      path: '/category/:id',
      showHeader: true,
      showFooter: false,
      title: headerTitle,
      left: {
        icon: <FaChevronCircleLeft className="h-8 w-8 text-orange" />,
        onClick: () => {
          navigate('/', { replace: true })
        },
      },
      right: {
        icon: <FaRegUserCircle />,
        onClick: () => {},
      },
    },
    ranking: {
      path: '/ranking',
      showHeader: true,
      showFooter: true,
      title: (
        <Title level={5} className="font-bold text-black-900">
          Ranking
        </Title>
      ),
      left: {
        icon: <FaBars />,
        onClick: () => {},
      },
      right: {
        icon: <FaRegUserCircle />,
        onClick: () => {},
      },
    },
    manage: {
      path: '/manage',
      showHeader: true,
      showFooter: true,
      title: (
        <Title level={5} className="font-bold text-black-900">
          Gerenciamento
        </Title>
      ),
      left: {
        icon: <FaBars />,
        onClick: () => {},
      },
      right: {
        icon: <FaRegUserCircle />,
        onClick: () => {},
      },
    },
    unitChallenges: {
      path: '/manage/unitchallenges',
      showHeader: true,
      showFooter: true,
      title: (
        <Title level={5} className="font-bold text-black-900">
          Gerenciamento de Desafios
        </Title>
      ),
      left: {
        icon: <FaChevronCircleLeft className="h-8 w-8 text-orange" />,
        onClick: () => {
          navigate(-1)
        },
      },
      right: {
        icon: <FaRegUserCircle />,
        onClick: () => {},
      },
    },
    unitChallenge: {
      path: '/manage/unitchallenges/:id',
      showHeader: true,
      showFooter: true,
      title: headerTitle,
      left: {
        icon: <FaChevronCircleLeft className="h-8 w-8 text-orange" />,
        onClick: () => {
          navigate(-1)
        },
      },
      right: {
        icon: <FaRegUserCircle />,
        onClick: () => {},
      },
    },
  }

  return routes
}
