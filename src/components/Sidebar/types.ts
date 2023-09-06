import { ReactElement } from 'react'
import { sidebarSelectorItems } from './shared/dataLists'

export interface NavItemProps {
  icon: ReactElement
  text: string
  setActive?: (text: string) => void
}

export interface NavSelectProps {
  items: typeof sidebarSelectorItems
}

export interface NavListProps {
  items: (typeof sidebarSelectorItems)[0]['links']
}
