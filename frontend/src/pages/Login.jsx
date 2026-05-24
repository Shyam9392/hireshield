import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { ShieldCheck } from 'lucide-react'
import axios from 'axios'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm]     = useState({ email: '', password: '' })
  const [error, setError]   = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true); setError('')
    try {
      const res = await axios.post('/api/auth/login', form)
      localStorage.setItem('token', res.data.access_token)
      navigate('/dashboard')
    } catch (e) {
      setError(e.response?.data?.detail || 'Login failed')
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 w-full max-w-md">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xl mb-6">
          <ShieldCheck size={22} /> HireShield
        </div>
        <h2 className="text-2xl font-bold text-white mb-1">Welcome back</h2>
        <p className="text-slate-400 text-sm mb-6">Sign in to your account</p>

        {error && <div className="bg-red-900/30 border border-red-700 text-red-400
                                  text-sm rounded-lg px-4 py-2 mb-4">{error}</div>}

        <div className="space-y-4">
          <input type="email" placeholder="Email"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5
                       text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})} />

          <input type="password" placeholder="Password"
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2.5
                       text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            value={form.password}
            onChange={e => setForm({...form, password: e.target.value})} />

          <button onClick={handleSubmit} disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50
                       text-white font-semibold py-2.5 rounded-lg transition">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>

        <p className="text-slate-500 text-sm text-center mt-4">
          No account? <Link to="/register" className="text-indigo-400 hover:underline">Register</Link>
        </p>
      </div>
    </div>
  )
}
