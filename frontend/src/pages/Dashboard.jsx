import { ShieldCheck, Search, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Dashboard() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const logout = () => { localStorage.removeItem('token'); navigate('/') }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-800">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xl">
          <ShieldCheck size={22} /> HireShield
        </div>
        <button onClick={logout}
          className="flex items-center gap-1.5 text-slate-400 hover:text-white transition text-sm">
          <LogOut size={15}/> Logout
        </button>
      </nav>

      {/* Search */}
      <div className="max-w-2xl mx-auto mt-16 px-6">
        <h1 className="text-3xl font-bold text-white text-center mb-2">Search a Company</h1>
        <p className="text-slate-400 text-center mb-8 text-sm">
          Enter any company name to get OSINT data and fraud score
        </p>
        <div className="flex gap-3">
          <input type="text" placeholder="e.g. Zorvyn FinTech, TCS, Infosys..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3
                       text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            value={query}
            onChange={e => setQuery(e.target.value)} />
          <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl
                             text-white transition flex items-center gap-2">
            <Search size={16}/> Search
          </button>
        </div>

        {/* Placeholder state */}
        <div className="mt-16 text-center text-slate-600">
          <ShieldCheck size={48} className="mx-auto mb-3 opacity-20"/>
          <p className="text-sm">Search results will appear here</p>
          <p className="text-xs mt-1">Scraping pipeline coming in Week 4–5</p>
        </div>
      </div>
    </div>
  )
}
