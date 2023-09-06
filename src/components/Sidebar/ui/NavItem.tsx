import { FC } from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { NavItemProps } from '../types'

export const NavItem: FC<NavItemProps> = (props) => {
  const { icon, text, setActive } = props
  return (
    <ListItem
      onClick={() => setActive && setActive(text)}
      disablePadding
      sx={{
        display: 'flex',
        alignItems: 'center',
        overflowX: 'hidden',
        padding: '0 10px',
        '&:hover': {
          backgroundColor: 'rgba(52,60,71,1)',
          cursor: 'pointer',
          borderRadius: '5px',
        },
      }}
    >
      <ListItemIcon sx={{ minWidth: 0 }}>{icon}</ListItemIcon>
      <ListItemText
        sx={{
          opacity: 0,
          color: 'white',
          textIndent: '-10em',
          transition: 'text-indent 0.3s, opacity 1s',
        }}
        primary={text}
      ></ListItemText>
    </ListItem>
  )
}
