import { FC, useEffect, useState } from 'react'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { NavItem } from './NavItem'
import { NavSelectProps } from '../types'
import { useLocation, useNavigate } from 'react-router-dom'

export const NavSelect: FC<NavSelectProps> = (props) => {
  const { items } = props
  const [activeState, setActiveState] = useState('')
  const [expanded, setExpanded] = useState<boolean>(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    setActiveState(
      items.find((item) => item.path === `/${location.pathname.split('/')[1]}`)
        ?.text ||
        items.find((item) => item.path === '/')?.text ||
        '/'
    )
  }, [location.pathname])

  const setActiveStateHandler = (text: string) => {
    setActiveState(text)
    setExpanded(false)
    navigate(items.find((item) => item.text === text)?.path || '/')
  }

  if (!activeState) return null

  return (
    <Accordion
      disableGutters
      className='nav-select'
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      sx={{
        boxShadow: 'none',
        backgroundColor: 'transparent',
      }}
    >
      <AccordionSummary
        sx={{
          padding: 0,
          '.MuiAccordionSummary-content': {
            margin: 0,
          },
          '&.Mui-focusVisible': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <NavItem
          icon={
            items.find((item) => item.text === activeState)?.icon ||
            items[0].icon
          }
          text={activeState}
        />
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        {items.map((item) => {
          if (item.text === activeState) return
          return (
            <NavItem
              key={item.text}
              icon={item.icon}
              text={item.text}
              setActive={setActiveStateHandler}
            />
          )
        })}
      </AccordionDetails>
    </Accordion>
  )
}
