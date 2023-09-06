import { Route, Routes } from 'react-router-dom'
import { homeRouter } from '../shared/routes/router'

export const Home = () => {
  return (
    <Routes>
      {homeRouter.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  )
}
