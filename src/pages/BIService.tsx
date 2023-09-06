import { Route, Routes } from 'react-router-dom'
import { biRouter } from '../shared/routes/router'

export const BIService = () => {
  return (
    <Routes>
      {biRouter.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  )
}
