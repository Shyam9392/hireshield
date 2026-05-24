import { useNavigate } from 'react-router-dom'
import { ShieldCheck, Search, AlertTriangle, BarChart2 } from 'lucide-react'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-slate-800">
        <div className="flex items-center gap-2 text-indigo-400 font-bold text-xl">
          <ShieldCheck size={24} />
          HireShield
        </div>
        <div className="flex gap-3">
          <button onClick={() => navigate('/login')}
            className="px-4 py-2 text-slate-300 hover:text-white transition">
            Login
          </button>
          <button onClick={() => navigate('/register')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="inline-flex items-center gap-2 bg-indigo-950 border border-indigo-800
                        text-indigo-300 text-sm px-4 py-1.5 rounded-full mb-6">
          <ShieldCheck size={14} /> Pre-Employment Intelligence Platform
        </div>
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
          Know Before You <span className="text-indigo-400">Apply</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-xl mb-8">
          HireShield aggregates public OSINT data to score company legitimacy,
          detect fraud patterns, and protect you from fake hiring schemes.
        </p>
        <div className="flex gap-4">
          <button onClick={() => navigate('/register')}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl
                       text-white font-semibold transition">
            Start for Free
          </button>
          <button onClick={() => navigate('/dashboard')}
            className="px-6 py-3 border border-slate-700 hover:border-indigo-500
                       rounded-xl text-slate-300 transition">
            View Dashboard
          </button>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl w-full">
          {[
            { icon: <Search size={20}/>,        title: "OSINT Aggregation",  desc: "Scrapes news, GitHub, job boards & MCA records" },
            { icon: <BarChart2 size={20}/>,      title: "Health Score",       desc: "AI-powered 0–100 legitimacy score with explanation" },
            { icon: <AlertTriangle size={20}/>,  title: "Fraud Detection",    desc: "Flags mass hiring scams, fake addresses & more" },
          ].map((f, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-5 text-left">
              <div className="text-indigo-400 mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="text-center text-slate-600 text-sm py-4">
        Built by Shyamsunder Kalyanapu · HireShield v1.0
      </footer>
    </div>
  )
}
