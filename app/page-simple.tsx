"use client"

export default function SimpleHomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          FRYE Ecosystem - Simple Test
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-center mb-6">
            This is a simplified version to test if the basic Next.js setup works without complex components.
          </p>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Test Features</h2>
            <ul className="space-y-2">
              <li>✅ Basic React rendering</li>
              <li>✅ Tailwind CSS styling</li>
              <li>✅ Client-side hydration</li>
              <li>✅ No complex imports</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
