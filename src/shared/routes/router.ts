import { BIService } from '../../pages/BIService'
import { CRMService } from '../../pages/CRMService'
import { ERPService } from '../../pages/ERPService'
import { Home } from '../../pages/Home'
import { MainPage } from '../../pages/MainPage'
import { Test } from '../../components/Test'

export const ROUTES = {
  HOME: '/*',
  CRM: '/crm',
  ERP: '/erp',
  BI: '/bi',
}

export const mainRouter = [
  {
    path: '/*',
    element: MainPage,
  },
]

export const privateRouter = [
  {
    path: ROUTES.HOME,
    element: Home,
  },
  {
    path: ROUTES.CRM + '/*',
    element: CRMService,
  },
  {
    path: ROUTES.ERP + '/*',
    element: ERPService,
  },
  {
    path: ROUTES.BI + '/*',
    element: BIService,
  },
]

export const homeRouter = [
  {
    path: '/',
    element: Test,
  },
  {
    path: '/info',
    element: Test,
  },
  {
    path: '/history',
    element: Test,
  },
  {
    path: '/works',
    element: Test,
  },
]

export const crmRouter = [
  {
    path: '/',
    element: Test,
  },
  {
    path: '/info',
    element: Test,
  },
  {
    path: '/history',
    element: Test,
  },
  {
    path: '/works',
    element: Test,
  },
]

export const erpRouter = [
  {
    path: '/',
    element: Test,
  },
  {
    path: '/info',
    element: Test,
  },
  {
    path: '/history',
    element: Test,
  },
  {
    path: '/works',
    element: Test,
  },
]

export const biRouter = [
  {
    path: '/',
    element: Test,
  },
  {
    path: '/info',
    element: Test,
  },
  {
    path: '/history',
    element: Test,
  },
  {
    path: '/works',
    element: Test,
  },
]
