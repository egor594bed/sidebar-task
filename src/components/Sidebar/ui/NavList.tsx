import { FC } from 'react'
import { List } from '@mui/material'
import { NavItem } from './NavItem'
import { NavListProps } from '../types'
import { useNavigate } from 'react-router-dom'

export const NavList: FC<NavListProps> = (props) => {
  const { items } = props
  const navigate = useNavigate()

  const setActiveStateHandler = (text: string) => {
    navigate(items.find((item) => item.text === text)?.path || '/')
  }

  return (
    <List>
      {items.map((item) => (
        <NavItem
          key={item.text}
          text={item.text}
          icon={item.icon}
          setActive={setActiveStateHandler}
        />
      ))}
    </List>
  )
}
