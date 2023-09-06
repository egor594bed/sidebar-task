import { Route, Routes } from 'react-router-dom'
import { mainRouter } from '../../shared/routes/router'

export const Navigation = () => {
  return (
    <Routes>
      {mainRouter.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  )
}
