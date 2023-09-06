import { ReactComponent as InfoIcon } from '../../../shared/icons/InfoIcon.svg'
import { ReactComponent as HistoryIcon } from '../../../shared/icons/HistoryIcon.svg'
import { ReactComponent as WorksIcon } from '../../../shared/icons/WorksIcon.svg'
import { ReactComponent as CRMIcon } from '../../../shared/icons/CRMIcon.svg'
import { ReactComponent as BIIcon } from '../../../shared/icons/BIIcon.svg'
import { ReactComponent as ERPIcon } from '../../../shared/icons/ERPIcon.svg'
import { ReactComponent as HomeIcon } from '../../../shared/icons/HomeIcon.svg'

const defaultColor = '#525252'

export const sidebarSelectorItems = [
  {
    text: 'Home',
    icon: <HomeIcon fill={defaultColor} />,
    path: '/',
    links: [
      {
        text: 'Информция 1',
        icon: <InfoIcon fill={defaultColor} />,
        path: '/info',
      },
      {
        text: 'История 2',
        icon: <HistoryIcon fill={defaultColor} />,
        path: '/history',
      },
      {
        text: 'Работы 3',
        icon: <WorksIcon fill={defaultColor} />,
        path: '/works',
      },
    ],
  },
  {
    text: 'CRM',
    icon: <CRMIcon fill={defaultColor} />,
    path: '/crm',
    links: [
      {
        text: 'Информция 4',
        icon: <InfoIcon fill={defaultColor} />,
        path: '/crm/info',
      },
      {
        text: 'История 5',
        icon: <HistoryIcon fill={defaultColor} />,
        path: '/crm/history',
      },
      {
        text: 'Работы 6',
        icon: <WorksIcon fill={defaultColor} />,
        path: '/crm/works',
      },
    ],
  },
  {
    text: 'BI',
    icon: <BIIcon fill={defaultColor} />,
    path: '/bi',
    links: [
      {
        text: 'Информция 7',
        icon: <InfoIcon fill={defaultColor} />,
        path: '/bi/info',
      },
      {
        text: 'История 8',
        icon: <HistoryIcon fill={defaultColor} />,
        path: '/bi/history',
      },
      {
        text: 'Работы 9',
        icon: <WorksIcon fill={defaultColor} />,
        path: '/bi/works',
      },
    ],
  },
  {
    text: 'ERP',
    icon: <ERPIcon fill={defaultColor} />,
    path: '/erp',
    links: [
      {
        text: 'Информция 10',
        icon: <InfoIcon fill={defaultColor} />,
        path: '/erp/info',
      },
      {
        text: 'История 11',
        icon: <HistoryIcon fill={defaultColor} />,
        path: '/erp/history',
      },
      {
        text: 'Работы 12',
        icon: <WorksIcon fill={defaultColor} />,
        path: '/erp/works',
      },
    ],
  },
]
