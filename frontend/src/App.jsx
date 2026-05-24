import { Routes, Route, Navigate } from 'react-router-dom'
import Home      from './pages/Home'
import Login     from './pages/Login'
import Register  from './pages/Register'
import Dashboard from './pages/Dashboard'
import Company   from './pages/Company'

function App() {
  return (
    <Routes>
      <Route path="/"          element={<Home />} />
      <Route path="/login"     element={<Login />} />
      <Route path="/register"  element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/company/:id" element={<Company />} />
      <Route path="*"          element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
