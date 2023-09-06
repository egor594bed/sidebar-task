import { useLocation } from 'react-router-dom'

//Заглушка для роутов
export const Test = () => {
  const { pathname } = useLocation()
  return <div>{pathname}</div>
}
