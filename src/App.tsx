import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import VoidPage from './pages/VoidPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/void" element={<VoidPage />} />
    </Routes>
  )
}
