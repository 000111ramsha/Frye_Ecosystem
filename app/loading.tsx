export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 mb-4">
          <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500">
            <div className="h-6 w-6 text-white animate-pulse">⚡</div>
          </div>
          <span className="text-2xl font-bold gradient-text">FRYE</span>
        </div>
        <div className="w-48 h-2 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse"></div>
        </div>
        <p className="text-slate-400 mt-4">Loading the future of innovation...</p>
      </div>
    </div>
  )
}
