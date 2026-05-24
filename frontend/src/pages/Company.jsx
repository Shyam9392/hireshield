import { useParams } from 'react-router-dom'

export default function Company() {
  const { id } = useParams()
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Company #{id}</h1>
        <p className="text-slate-400 text-sm">Full profile page — coming in Week 6</p>
      </div>
    </div>
  )
}
