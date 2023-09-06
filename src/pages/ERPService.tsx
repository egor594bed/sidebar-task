import { Route, Routes } from 'react-router-dom'
import { erpRouter } from '../shared/routes/router'

export const ERPService = () => {
  return (
    <Routes>
      {erpRouter.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  )
}
