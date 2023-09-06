import { Layout } from '../components/Layout/Layout'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Box, Container } from '@mui/material'

export const MainPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Container>
        <Layout />
      </Container>
    </Box>
  )
}
