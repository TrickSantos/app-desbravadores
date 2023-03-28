export type Route = {
  path: string
  showHeader: boolean
  showFooter: boolean
  title: string
}

export type Routes = {
  [key: string]: Route
}

const routes: Routes = {
  home: {
    path: '/',
    showHeader: true,
    showFooter: true,
    title: 'Home',
  },
  login: {
    path: '/login',
    showHeader: false,
    showFooter: false,
    title: 'Login',
  },
  register: {
    path: '/register',
    showHeader: false,
    showFooter: false,
    title: 'Register',
  },
  challenges: {
    path: '/challenges',
    showHeader: true,
    showFooter: true,
    title: 'Desafios',
  },
  challenge: {
    path: '/challenges/:id',
    showHeader: true,
    showFooter: true,
    title: 'Desafio',
  },
  category: {
    path: '/category/:id',
    showHeader: true,
    showFooter: false,
    title: ':id',
  },
  ranking: {
    path: '/ranking',
    showHeader: true,
    showFooter: true,
    title: 'Ranking',
  },
  manage: {
    path: '/manage',
    showHeader: true,
    showFooter: true,
    title: 'Gerenciar',
  },
}

export default routes
