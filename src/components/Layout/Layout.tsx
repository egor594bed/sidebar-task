import { Route, Routes } from 'react-router-dom'
import { privateRouter } from '../../shared/routes/router'

export const Layout = () => {
  return (
    <Routes>
      {privateRouter.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  )
}
