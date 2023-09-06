import { useMemo, useState } from 'react'
import { Box, Divider } from '@mui/material'
import { NavSelect } from './ui/NavSelect'
import { ReactComponent as Logo } from '../../shared/icons/CG_back.svg'
import { NavList } from './ui/NavList'
import { sidebarSelectorItems } from './shared/dataLists'
import { useLocation } from 'react-router-dom'

const defaultStyle = {
  width: '43px',
  height: '100vh',
  backgroundColor: 'transparent',
  position: 'fixed',
  overflowX: 'hidden',
  transition: 'width 0.3s, background-color 0.3s',
  '& svg': {
    transition: 'fill 0.3s',
  },
}

export const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const sidebarNavItems = useMemo(() => {
    return (
      sidebarSelectorItems.find(
        (item) => item.path === `/${location.pathname.split('/')[1]}`
      )?.links ||
      sidebarSelectorItems.find((item) => item.path === '/')?.links ||
      []
    )
  }, [location.pathname])

  return (
    <Box
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      sx={
        !open
          ? defaultStyle
          : {
              ...defaultStyle,
              width: '200px',
              backgroundColor: 'rgba(52,60,71,.95)',
              '& svg': {
                fill: 'white',
              },
              '& .MuiListItemText-root': {
                textIndent: '1em',
                opacity: 1,
              },
            }
      }
    >
      <Box sx={{ padding: '10px' }}>
        <Logo fill='#525252' />
      </Box>
      <Divider />
      <NavSelect items={sidebarSelectorItems} />
      <Divider />
      <NavList items={sidebarNavItems} />
    </Box>
  )
}
