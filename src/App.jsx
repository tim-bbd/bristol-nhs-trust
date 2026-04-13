import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavPage from './pages/NavPage'
import SearchPage from './pages/SearchPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/:l1" element={<NavPage />} />
      <Route path="/:l1/:l2" element={<NavPage />} />
      <Route path="/:l1/:l2/:l3" element={<NavPage />} />
    </Routes>
  )
}
