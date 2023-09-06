import { Route, Routes } from 'react-router-dom'
import { crmRouter } from '../shared/routes/router'

export const CRMService = () => {
  return (
    <Routes>
      {crmRouter.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
    </Routes>
  )
}
