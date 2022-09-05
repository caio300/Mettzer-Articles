import { Routes, Route } from 'react-router-dom'
import { Favorite } from './Pages/Favorite'
import { Home } from './Pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorite />} />
    </Routes>
  )
}
